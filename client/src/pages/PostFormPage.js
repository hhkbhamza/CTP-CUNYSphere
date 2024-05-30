import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
import "../style/PostFormPage.css";
import AWS from "aws-sdk";
// import { pdfjs } from "react-pdf";

function PostFormPage() {
  const [data, setData] = useState({ content: "", fileName: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    //"pdfsaverbucketctp"
    //process.env.REACT_APP_AWS_BUCKET
    //"us-east-2"
    //process.env.REACT_APP_AWS_REGION
    const S3_BUCKET = process.env.REACT_APP_AWS_BUCKET;
    const REGION = process.env.REACT_APP_AWS_REGION;

    //process.env.REACT_APP_AWS_ACCESS_KEY_ID
    //process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    try {
      const s3Response = await s3.upload(params).promise();
      setData({ ...data, fileName: s3Response.Location });
      console.log(`File uploaded at ${s3Response.Location}`);
    } catch (error) {
      console.error("Error uploading file to S3:", error);
      setError(true);
    }
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (file) {
      await uploadFile(file);
      let response = await fetch("/api/micro_posts", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: data.content,
          fileName: file.name, // Use the file name directly from the file object
        }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        console.log(await response.text()); // Log the error response for debugging
        setError(true);
      }
    } else {
      console.error("No file selected.");
      setError(true);
    }
  };

  if (success) return <Navigate to="/Job/resume-page" />;

  return (
    <div className="postForm-container">
      {error && <ErrorAlert details={"Failed to save the content"} />}
      <form onSubmit={handleSubmit}>
       <p className="postForm-p">Message</p>
          <textarea
            name="content"
            rows="5"
            cols="80"
            placeholder="Message in resume feedback"
            value={data.content}
            className="form-control"
            onChange={(e) => setData({ ...data, content: e.target.value })}
            autoFocus
          ></textarea>
          <br />
          <br />
          <br />
          <p className="postForm-p">Upload a file</p>
          <input
            name="file"
            type="file"
            className="form-control"
            onChange={handleFileChange}
            accept=".pdf"
          />
          <button type="submit" className="postForm-btn postForm-btn-primary">
            Submit Post
          </button>
      </form>
    </div>
  );
}

export default PostFormPage;
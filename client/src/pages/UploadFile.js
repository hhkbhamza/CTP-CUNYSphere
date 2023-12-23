import AWS from "aws-sdk";
import { useState } from "react";


function App() {
  // Create state to store file
  const [file, setFile] = useState(null);


  // Function to upload file to s3
  const uploadFile = async () => {
    // S3 Bucket Name
    const S3_BUCKET = "pdfsaverbucketctp";
    // const S3_BUCKET = "cuny-sphere";


    // S3 Region
    const REGION = "us-east-2";


    // S3 Credentials
    AWS.config.update({
        accessKeyId: "",
        secretAccessKey: "",
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });


    // Files Parameters
    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };


    // Uploading file to s3
    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        // File uploading progress
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();


    await upload.then((err, data) => {
      console.log(err);
      // Fille successfully uploaded
      alert("File uploaded successfully.");
    });
  };
  // Function to handle file and store it to file state
  const handleFileChange = (e) => {
    // Uploaded file
    const file = e.target.files[0];
    // Changing file state
    setFile(file);
  };
  return (
    <div className="App">
      <div>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button onClick={uploadFile}>Upload</button>
      </div>
    </div>
  );
}


export default App;
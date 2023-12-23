import React from "react";
import { Link } from "react-router-dom";
import CommentBox from "./CommentSection";
import CommentList from "./CommentsList";
import PDFViewer from "./PDFViewer";

function MicroPostCard({ content, fileName, createdAt, id }) {
  console.log({ fileName });

  const pdfUrl = `https://pdfsaverbucketctp.s3.amazonaws.com/${fileName}`;

  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <Link to={"/posts/" + id}>{content}</Link>
          <br />
          <br />
          <PDFViewer pdfUrl={pdfUrl} fileName={fileName} />
{/* 
          <object
              style={{ width: '100%', height: '1000px' }}
              type="application/octet-stream"
              data={`https://pdfsaverbucketctp.s3.amazonaws.com/${fileName}`}
              download={fileName} // Add download attribute
            >
            <a href={`https://pdfsaverbucketctp.s3.amazonaws.com/${fileName}`} download={fileName}>Download PDF</a>
          </object>
           */}
        </div>
        <div className="card-footer small text-muted text-end">{createdAt}</div>
        <div className="card-footer small text-muted text-end">
          <CommentBox resumeId={id} />
          <CommentList resumeId={id} />
        </div>
      </div>
    </div>
  );
}

export default MicroPostCard;

import React from "react";

const PDFViewer = ({ pdfUrl, fileName }) => {
  return (
    <div>
      <iframe
        title="PDF Viewer"
        style={{ width: "100%", height: "500px" }}
        src={`https://docs.google.com/gview?url=${pdfUrl}&embedded=true`}
      >
        <p>
          Your browser does not support embedded PDF files. Download the PDF
          <a href={pdfUrl} download={fileName}>
            Download the PDF
          </a>
        </p>
      </iframe>
    </div>
  );
};

export default PDFViewer;
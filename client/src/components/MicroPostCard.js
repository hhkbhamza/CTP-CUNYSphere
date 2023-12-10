import React from "react";
import { Link } from "react-router-dom";
//import FileSaver from "file-saver";

function MicroPostCard({ content, fileName, createdAt, id, firstName }) {
  let b64encode = function(fileName) { 
    return atob(fileName.map(function(v){return String.fromCharCode(v)}).join(''))
  };

  const blobs = new Blob([new Uint8Array(fileName)]);
  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
       const reader = new FileReader();
       reader.readAsDataURL(blob);
       reader.onloadend = () => {
          const base64data = reader.result;
          // Remove the Data-URL declaration preceding the Base64-encoded data
          const base64 = base64data.split(',')[1];
          resolve(base64);
       };
       reader.onerror = (error) => {
          reject(error);
       };
    });
 };
  
  let base64String = btoa(String.fromCharCode(...new Uint8Array(fileName)));
  //const base64 = new Int32Array(fileName);
 // let base64 = new Uint8Array(fileName);
  // var base64EncodedStr = btoa(unescape(encodeURIComponent(fileName)));
  
  
  
  
  
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
        
          <Link to={"/posts/" + id}>
            {content}
            </Link>
            <br/>
            <br/>
            <object 
            to={"/posts/" + id}
              style={{width: '100%', height: '200pt'}} 
              type="application/pdf" 
              
              data={'data:application/pdf;blob,' + blobs}>g</object>

        </div>
        <div className="card-footer small text-muted text-end">{createdAt}</div>
      </div>
    </div>
  );
}

export default MicroPostCard;

// import React from "react";
// import { Link } from "react-router-dom";

// function MicroPostCard({ content, createdAt, id }) {
//   return (
//     <div className="col-10 col-md-8 col-lg-7">
//       <div className="card mb-4 shadow">
//         <div className="card-body card-text">
//           {/* <Link to={"/posts/" + id}>{content}</Link> */}
//           <Link to={"/courses/" + id}>{content}</Link>
//         </div>
//         <div className="card-footer small text-muted text-end">{createdAt}</div>
//       </div>
//     </div>
//   );
// }

// export default MicroPostCard;
   
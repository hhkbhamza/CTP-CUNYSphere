import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
import "../pages/style/PostFormPage.css";

function PostFormPage() {
  const [data, setData] = useState({ content: "", fileName: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      setData((prevData) => ({ ...prevData, [name]: value }));
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await fetch("/api/micro_posts", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: data.content,
          filePath: data.filePath,
        }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Server error while creating a new micro post", error);
      setError(true);
    }
  };

  if (success) return <Navigate to="/job/career-crafters" />;

  return (
    <div className="d-flex justify-content-center">
      <div className="col-lg-7 mx-auto"> {/* Add mx-auto class here */}
        {error && <ErrorAlert details={"Failed to save the content"} />}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Message
            </label>
            <input
              type="text"
              id="content"
              className="form-control"
              value={data.content}
              onChange={fieldChanged("content")}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">
              Upload File
            </label>
            <input
              type="file"
              id="file"
              value={data.filePath}
              className="form-control"
              onChange={fieldChanged("filePath")}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostFormPage;

// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
// import ErrorAlert from "../components/ErrorAlert";

// function PostFormPage() {
//   const [content, setContent] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);

//   const handleContentChange = (event) => {
//     setContent(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       let response = await fetch("/api/micro_posts", {
//         method: "POST",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           content: content,
//         }),
//       });

//       if (response.ok) {
//         setSuccess(true);
//       } else {
//         setError(true);
//       }
//     } catch (error) {
//       console.error("Server error while creating a new micro post", error);
//       setError(true);
//     }
//   };

//   if (success) return <Navigate to="/" />;

//   return (
//     <div className="col-10 col-md-8 col-lg-7">
//       {error && <ErrorAlert details={"Failed to save the content"} />}
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <input
//             type="text"
//             placeholder="Add your words of wisdom here..."
//             value={content}
//             className="form-control"
//             onChange={handleContentChange}
//             autoFocus
//           />
//           <button type="submit" className="btn btn-primary">
//             Save Post
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default PostFormPage;

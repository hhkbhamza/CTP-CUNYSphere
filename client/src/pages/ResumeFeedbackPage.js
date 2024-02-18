import React from "react";
import NavBar from "../components/NavBar";
import "./style/ResumeFeedbackPage.css"; // Ensure the CSS file is correctly referenced
import PostFormPage from "./PostFormPage";
import PostsListPage from "./PostsListPage";
import MicroPostCard from "../components/MicroPostCard";

function ResumeFeedbackPage() {
  return (
    <div className="resumeFeedback-page">
      <NavBar />
      <div className="resume-feedback-container">
        <h1 className="resumeH1">Upload a resume</h1>
        <p className="resume-p">
          Are you looking to enhance your professional profile and make a
          lasting impression on potential employers?<br/> You're in the right place!
          Upload your resume here to receive valuable feedback from your peers.
        </p>
      </div>
      <PostFormPage />
    </div>
  );
}
export default ResumeFeedbackPage;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../style/JobPage.css";
import PostFormPage from "./PostFormPage";
import PostsListPage from "./PostsListPage";

function JobTabs() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/job/resume-feedback">
            Resume Feedback
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

function JobPage() {
  const [showTabs, setShowTabs] = useState(true);

  const toggleTabs = () => {
    setShowTabs(!showTabs);
  };

  return (
    <div className="job-page">
      <NavBar onJobClick={toggleTabs} />
      {showTabs && <JobTabs />}
      <div className="background-image" />
      <h1 className="resume-section-title">Resume</h1>
      <div className="resume-feedback">
        <PostsListPage />
      </div>
    </div>
  );
}

export default JobPage;

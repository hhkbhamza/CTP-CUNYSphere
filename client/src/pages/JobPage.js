import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../pages/style/JobPage.css"; // Ensure the CSS file is correctly referenced
import PostFormPage from "./PostFormPage";
import PostsListPage from "./PostsListPage";

function JobTabs() {
  return (
    <div>
      {/* You can customize the tabs as needed */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/job/career-connect">
            Career Connect
          </NavLink>
        </li>
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
  const [showTabs, setShowTabs] = useState(true); // Set to true by default

  const toggleTabs = () => {
    setShowTabs(!showTabs);
  };

  return (
    <div className="job-page">
      <NavBar onJobClick={toggleTabs} />
      {showTabs && <JobTabs />}
      <div className="resume-feedback">
        <h1>Resume</h1>
        <PostsListPage />
        {/* Add content for CareerConnect here  */}
        {/* <PostFormPage />
        <PostsListPage /> */}
      </div>
      <div className="career-connect">
        <h1>CareerConnect</h1>
        {/* Add content for CareerCrafters here  */}
      </div>
    </div>
  );
}

export default JobPage;

// import React from 'react';
// import "../pages/style/JobPage.css";
// import NavBar from "../components/NavBar.js";

// function JobPage() {
//     return (
//         <div>
//         <NavBar/>
//         <nav>
//             <ul className="navbar">
//                 <li className="dropdown">
//                     <a href="#" className="jobDetails dropbtn">CareerConnect</a>
//                     <div className="dropdown-content">
//                         <a href="#">Full Time</a>
//                         <a href="#">Part Time</a>
//                         <a href="#">Internship</a>
//                         <a href="#">Referral</a>
//                     </div>
//                 </li>
//                 <li className="dropdown">
//                     <a href="#" className="jobDetails dropbtn">CareerCrafters</a>
//                     <div className="dropdown-content">
//                         <a href="#">Resume Help</a>
//                         <a href="#">Resume Building</a>
//                     </div>
//                 </li>
//                 <li><a className="jobDetails" href="#">About</a></li>
//             </ul>
//         </nav>
//         </div>
//     );
// }

// export default JobPage;
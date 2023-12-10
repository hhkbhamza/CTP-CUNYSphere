import React from 'react';
import NavBar from '../components/NavBar';
import '../pages/style/CareerConnectPage.css'; // Ensure the CSS file is correctly referenced
import PostFormPage from "./PostFormPage";
import PostsListPage from "./PostsListPage"

function CareerConnect() {
    return (
        <div className="job-page">
        <NavBar/>
            <div className="resume-feedback">
                <h1>Resume</h1>
                 {/* Add content for CareerConnect here  */}
                 {/* <PostFormPage />
                 <PostsListPage /> */}
            </div>
            <div className="career-crafters">
                <h1>CareerCrafters</h1>
                {/* Add content for CareerCrafters here  */}
            </div>
        </div>
    );
}

export default CareerConnect;
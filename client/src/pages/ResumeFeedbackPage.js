import React from 'react';
import NavBar from '../components/NavBar';
import '../pages/style/ResumeFeedbackPage.css'; // Ensure the CSS file is correctly referenced
import PostFormPage from "./PostFormPage";
import PostsListPage from "./PostsListPage"
import MicroPostCard from '../components/MicroPostCard';

function ResumeFeedbackPage() {
    return (
        <div className="job-page">
        <NavBar/>
            <div className="resume-feedback">
                <h1>Upload a resume</h1>
                 <PostFormPage />
                 {/* <MicroPostCard /> */}
                 
            </div>
        </div>
    );
}

export default ResumeFeedbackPage;
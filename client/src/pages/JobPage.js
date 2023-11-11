import React from 'react';
import "../pages/style/jobPage.css";

function JobPage() {
    return (
        <nav>
            <ul className="navbar">
                <li className="dropdown">
                    <a href="#" className="jobDetails dropbtn">CareerConnect</a>
                    <div className="dropdown-content">
                        <a href="#">Full Time</a>
                        <a href="#">Part Time</a>
                        <a href="#">Internship</a>
                        <a href="#">Referral</a>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="#" className="jobDetails dropbtn">CareerCrafters</a>
                    <div className="dropdown-content">
                        <a href="#">Resume Help</a>
                        <a href="#">Resume Building</a>
                    </div>
                </li>
                <li><a className="jobDetails" href="#">About</a></li>
            </ul>
        </nav>
    );
}

export default JobPage;
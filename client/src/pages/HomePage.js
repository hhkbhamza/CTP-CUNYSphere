import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/style/homePage.css";

function HomePage() {
  
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the login page when the "Login" button is clicked
    navigate("/login");
  };
  const handleSignupClick = () => {
    // Navigate to the login page when the "Login" button is clicked
    navigate("/signup");
  };

  const showLoginAndSignUp = true; 

  return (
    <div className="homepage">
      <div className="topContainer">
        <div className="menu">
          <button className="menu-button">CUNY</button>
          <button className="menu-button">CUNY Blackboard</button>
        </div>
        <button className="login-button" onClick={handleLoginClick} >Log In</button>
        <button className="signup-button" onClick={handleSignupClick} >Sign Up</button>
      </div>

      <div className="mainContainer">
        <div className="logoContainer">
          <h1 className="title">CUNY</h1>
          <h1 className="secondTitle">Sphere</h1>
          <p className="tagline">A Degree for Every Dream</p>
        </div>
      </div>
      <div className="image-container">
          <img src="ctp_homepage.png" alt="CUNY Students" />
        </div>
    </div>
    
  );
}

export default HomePage;
import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/style/HomePage.css";
import AuthButton from "../components/AuthButton";

function HomePage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleEnterClick = () => {
    navigate("/main");
  };

  return (
    <div className="homepage">
      <div className="topContainer">
        <img src="../cuny-logo.jpeg" alt="CUNY Logo" className="logoImg" />
        <div className="menu">
          <button className="menu-button">
            <a
              href="https://www.cuny.edu/about/administration/offices/cis/cunyfirst/"
              style={{ textDecoration: "none", color: "#0033a1" }}
            >
              CUNYfirst
            </a>
          </button>
          <button className="menu-button">
            <a
              href="https://www.cuny.edu/about/administration/offices/cis/core-functions/cuny-blackboard/"
              style={{ textDecoration: "none", color: "#0033a1" }}
            >
              CUNY Blackboard
            </a>
          </button>
          {/* <button className="login-button" onClick={handleLoginClick}>
            Log In
          </button> */}
          <AuthButton />
          <button className="signup-button" onClick={handleSignupClick}>
            Sign Up
          </button>
        </div>
      </div>

      <div className="contentContainer">
        <div className="mainContainer">
          <div className="logoContainer">
            <h1 className="title">CUNY</h1>
            <h1 className="secondTitle">
              <span className="text-wrapper-1">S</span>
              <span className="text-wrapper-2">p</span>
              <span className="text-wrapper-3">h</span>
              <span className="text-wrapper-4">e</span>
              <span className="text-wrapper-5">r</span>
              <span className="text-wrapper-6">e</span>
            </h1>
            <p className="tagline">Uniting Students, Shaping Tomorrows</p>
          </div>
          <button className="enterButton" onClick={handleEnterClick}>Visit CUNY Sphere</button>
        </div>
        <div className="imageContainer">
          <img src="ctp_homepage.png" alt="CUNY Students" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../pages/style/HomePage.css";


// function HomePage() {
//  const navigate = useNavigate();


//  const handleLoginClick = () => {
//    // Navigate to the login page when the "Login" button is clicked
//    navigate("/login");
//  };
//  const handleSignupClick = () => {
//    // Navigate to the login page when the "Login" button is clicked
//    navigate("/signup");
//  };


//   const showLoginAndSignUp = true;


//  return (
//    <div className="homepage">
//      <div className="topContainer">
//      <img src="../cuny-logo.jpeg" alt="CUNY Logo" className="logoImg" />
//        <div className="menu">
//          <button className="menu-button">
//            <a
//              href="https://www.cuny.edu/about/administration/offices/cis/cunyfirst/"
//              style={{ textDecoration: "none",color: "#0033a1"}}
//            >
//              CUNY
//            </a>
//          </button>
//          <button className="menu-button">
//            <a
//              href="https://www.cuny.edu/about/administration/offices/cis/core-functions/cuny-blackboard/"
//              style={{ textDecoration: "none", color: "#0033a1" }}
//            >
//              CUNY Blackboard
//            </a>
//          </button>
//          <button className="login-button" onClick={handleLoginClick}>
//          Log In
//        </button>
//        <button className="signup-button" onClick={handleSignupClick}>
//          Sign Up
//        </button>
//        </div>
      
//      </div>


//      <div className="contentContainer">
//        <div className="mainContainer">
//          <div className="logoContainer">
//            <h1 className="title">CUNY</h1>
//            <h1 className="secondTitle">
//              <span className="text-wrapper-1">S</span>
//              <span className="text-wrapper-2">p</span>
//              <span className="text-wrapper-3">h</span>
//              <span className="text-wrapper-4">e</span>
//              <span className="text-wrapper-5">r</span>
//              <span className="text-wrapper-6">e</span>
//            </h1>
//            <p className="tagline">Uniting Students, Shaping Tomorrows</p>
//          </div>
//        </div>
//        <div className="imageContainer">
//          <img src="ctp_homepage.png" alt="CUNY Students" />
//        </div>
//      </div>
//    </div>
//  );
// }


// export default HomePage;



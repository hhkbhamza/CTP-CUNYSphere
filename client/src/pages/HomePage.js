import React from "react"


function HomePage() {
    return (
      <div className="homepage">
        <div className="top-bar">
          <div className="menu">
            <button className="menu-button">CUNY</button>
            <button className="menu-button">CUNY Blackboard</button>
          </div>
          <button className="login-button">Login</button>
        </div>
        <div className="main-content">
          <h1 className="title">CUNY<span className="title-accent">Sphere</span></h1>
          <p className="tagline">A Degree for Every Dream</p>
          <div className="image-container">
            <img src="cuny_students_image.jpg" alt="CUNY Students" />
          </div>
        </div>
      </div>
    );
  }

export default HomePage
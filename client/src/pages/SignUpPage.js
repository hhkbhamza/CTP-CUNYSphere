import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/style/SignupPage.css";

function SignupPage() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    college: "", // Added for college selection
  });

  const navigate = useNavigate();

  // A list of CUNY colleges for the dropdown menu
  const cunyColleges = [
    "Baruch College",
    "Brooklyn College",
    "City College",
    "College of Staten Island",
    "Hunter College",
    "John Jay College of Criminal Justice",
    // Add all other colleges
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the form
    console.log("Signing up with these details:", userDetails);
  };
  const handleLogInClick = () => {
    // Navigate to the login page when the "Login" button is clicked
    navigate("/login");
  };

  return (
    <div className="signupContainer">
      <div className="leftSide">
        {/* <div className="title">
          <h1>CU<br></br>NY</h1>
          <h1 className="secondTitle">
            <span className="text-wrapper-1">S</span>
            <span className="text-wrapper-2">p</span>
            <span className="text-wrapper-3">h</span>
            <span className="text-wrapper-4">e</span>
            <span className="text-wrapper-5">r</span>
            <span className="text-wrapper-6">e</span>
          </h1>
          <div className="yesAccount">
            <p>Already a member?</p>
            <p className="login" onClick={handleLogInClick}>
              Log In
            </p>
          </div>
        </div> */}
        <img src="../logo.png"></img>
      </div>
      <div className="rightSide">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Username</label>
          <input
            name="email"
            type="email"
            value={userDetails.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={userDetails.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <label htmlFor="college">Choose your school</label>
          <select
            name="college"
            value={userDetails.college}
            onChange={handleChange}
            required
          >
            <option value="">Select your college</option>
            {cunyColleges.map((college) => (
              <option key={college} value={college}>
                {college}
              </option>
            ))}
          </select>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;

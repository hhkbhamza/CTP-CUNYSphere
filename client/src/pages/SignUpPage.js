import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../style/SignupPage.css";

function SignUpPage() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    college: "", // Added for college selection
  });

  const navigate = useNavigate();
  const auth = useAuth();
  const [error, setError] = useState(false);

  const location = useLocation();

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

  const from = location.state?.from?.pathname || "/login";

  const fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      setUserDetails((prevData) => ({ ...prevData, [name]: value }));
    };
  };

  const handleLogInClick = () => {
    // Navigate to the login page when the "Login" button is clicked
    navigate("/login");
  };

  const signup = async (e) => {
    e.preventDefault();
    let { firstName, lastName, college, email, password } = userDetails;

    try {
      await auth.signup(firstName, lastName, college, email, password);
      navigate(from, { replace: true });
    } catch (error) {
      setError(true);
    }
  };
  let errorMessage = "";
  if (error) {
    errorMessage = (
      <div className="alert alert-danger" role="alert">
        Invalid username or password
      </div>
    );
  }

  return (
    <div className="signupContainer">
      <div className="leftSide">
        <img src="../logo.png"></img>
        <div className="yesAccount">
          <p>Already a member?</p>
          <p className="login" onClick={handleLogInClick}>
            Log In
          </p>
        </div>
      </div>
      <div className="rightSide">
        <h1>Sign Up</h1>
        <form onSubmit={signup}>
          {errorMessage}
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            value={userDetails.firstName}
            onChange={fieldChanged("firstName")}
            placeholder="First Name"
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            value={userDetails.lastName}
            onChange={fieldChanged("lastName")}
            placeholder="Last Name"
            required
          />
          <label htmlFor="email">Username</label>
          <input
            name="email"
            type="email"
            value={userDetails.email}
            onChange={fieldChanged("email")}
            placeholder="Email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={userDetails.password}
            onChange={fieldChanged("password")}
            placeholder="Password"
            required
          />

          <label htmlFor="college">Choose your school</label>
          <select
            name="college"
            value={userDetails.college}
            onChange={fieldChanged("college")}
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

export default SignUpPage;
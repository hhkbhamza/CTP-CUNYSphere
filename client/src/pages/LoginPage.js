import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/style/LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    // You can add code here to send the login information to your backend or perform authentication.
  };

  const handleSignupClick = () => {
    // Navigate to the login page when the "Login" button is clicked
    navigate("/signup");
  };

  return (
    <div className="loginContainer">
      <div className="leftSide">
        <div className="title">
          <h1 className="firstTitle">CU<br></br>NY</h1>
          <h1 className="secondTitle">
            <span className="text-wrapper-1">S</span>
            <span className="text-wrapper-2">p</span>
            <span className="text-wrapper-3">h</span>
            <span className="text-wrapper-4">e</span>
            <span className="text-wrapper-5">r</span>
            <span className="text-wrapper-6">e</span>
          </h1>
          <div className="noAccount">
            <p>Not a member?</p>
            <p className="signup" onClick={handleSignupClick} >Sign Up</p>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <h1>Welcome!</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Username</label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
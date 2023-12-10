import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../pages/style/LoginPage.css";

function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

 const from = location.state?.from?.pathname || "/";

  const fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      setData((prevData) => ({ ...prevData, [name]: value }));
    };
  };

  const handleSignupClick = () => {
    // Navigate to the login page when the "Login" button is clicked
    navigate("/signup");
  };

  const login = async (e) => {
    e.preventDefault();
    let { email, password } = data;

    try {
      await auth.authenticate(email, password);
      // setRedirectToReferrer(true); // used in react-router v5
      // in react-router v6 navigate changes the pages directly.
      // comment from official docs example:
      //    Send them back to the page they tried to visit when they were
      //    redirected to the login page. Use { replace: true } so we don't create
      //    another entry in the history stack for the login page.  This means that
      //    when they get to the protected page and click the back button, they
      //    won't end up back on the login page, which is also really nice for the
      //    user experience.
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  let errorMessage = "";
  if (error) {
    errorMessage = (
      <div className="alert alert-danger" role="alert">
        Login Failed
      </div>
    );
  }

  return (
    <div className="loginContainer">
      <div className="leftSide">
        {/* <div className="title">
          <h1 className="firstTitle">CU<br></br>NY</h1>
          <h1 className="secondTitle">
            <span className="text-wrapper-1">S</span>
            <span className="text-wrapper-2">p</span>
            <span className="text-wrapper-3">h</span>
            <span className="text-wrapper-4">e</span>
            <span className="text-wrapper-5">r</span>
            <span className="text-wrapper-6">e</span>
          </h1>
        </div> */}
        <img src="../logo.png"></img>
        <div className="noAccount">
            <p>Not a member?</p>
            <p className="signup" onClick={handleSignupClick} >Sign Up</p>
          </div>
      </div>
      <div className="rightSide">
        <h1>Welcome!</h1>
        <form onSubmit={login}>
          <label htmlFor="email">Username</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={fieldChanged("email")}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={fieldChanged("password")}
            required
          />

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;


// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import "../pages/style/LoginPage.css";


// function LoginPage() {
//  const auth = useAuth();
//  const navigate = useNavigate();
//  const location = useLocation();
//  const [data, setData] = useState({ email: "", password: "" });
//  const [error, setError] = useState(false);


//  const from = location.state?.from?.pathname || "/";


//  const fieldChanged = (name) => {
//    return (event) => {
//      let { value } = event.target;
//      setData((prevData) => ({ ...prevData, [name]: value }));
//    };
//  };


//  const handleSignupClick = () => {
//    // Navigate to the login page when the "Login" button is clicked
//    navigate("/signup");
//  };


//  const login = async (e) => {
//    e.preventDefault();
//    let { email, password } = data;


//    try {
//      await auth.authenticate(email, password);
//      // setRedirectToReferrer(true); // used in react-router v5
//      // in react-router v6 navigate changes the pages directly.
//      // comment from official docs example:
//      //    Send them back to the page they tried to visit when they were
//      //    redirected to the login page. Use { replace: true } so we don't create
//      //    another entry in the history stack for the login page.  This means that
//      //    when they get to the protected page and click the back button, they
//      //    won't end up back on the login page, which is also really nice for the
//      //    user experience.
//      navigate("/courses");
//    } catch (error) {
//      setError(true);
//    }
//  };


//  let errorMessage = "";
//  if (error) {
//    errorMessage = (
//      <div className="alert alert-danger" role="alert">
//        Login Failed
//      </div>
//    );
//  }


//  return (
//    <div className="loginContainer">
//      <div className="leftSide">
//        {/* <div className="title">
//          <h1 className="firstTitle">CU<br></br>NY</h1>
//          <h1 className="secondTitle">
//            <span className="text-wrapper-1">S</span>
//            <span className="text-wrapper-2">p</span>
//            <span className="text-wrapper-3">h</span>
//            <span className="text-wrapper-4">e</span>
//            <span className="text-wrapper-5">r</span>
//            <span className="text-wrapper-6">e</span>
//          </h1>
//        </div> */}
//        <img src="../logo.png"></img>
//        <div className="noAccount">
//            <p>Not a member?</p>
//            <p className="signup" onClick={handleSignupClick} >Sign Up</p>
//          </div>
//      </div>
//      <div className="rightSide">
//        <h1>Welcome!</h1>
//        <form onSubmit={login}>
//          <label htmlFor="email">Username</label>
//          <input
//            type="email"
//            name="email"
//            placeholder="Email"
//            value={data.email}
//            onChange={fieldChanged("email")}
//            required
//          />


//          <label htmlFor="password">Password</label>
//          <input
//            type="password"
//            name="password"
//            placeholder="Password"
//            value={data.password}
//            onChange={fieldChanged("password")}
//            required
//          />


//          <button type="submit">Log In</button>
//        </form>
//      </div>
//    </div>
//  );
// }


// export default LoginPage;

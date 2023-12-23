import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../pages/style/AuthButton.css";

const AuthButton = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.isAuthenticated) {
    return (
      <Link className="btn btn-primary login-button" to="/login">
        Login
      </Link>
    );
  }

  const logout = () => {
    auth.signout().then(() => navigate("/"));
  };

  return (
    <div className="text-white">
      Welcome! {auth.user.firstName}
      <button className="btn btn-primary login-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default AuthButton;
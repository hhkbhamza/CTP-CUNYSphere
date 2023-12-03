import React from 'react'
import { Link, NavLink } from "react-router-dom";
import AuthButton from "./AuthButton";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/main">
            CUNY Sphere
          </Link>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/posts/new">
                {/* PostFormPage */}
                Course
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/job">
                Job
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/news">
                News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about-us">
                About Us
              </NavLink>
            </li>
            <li className="nav-item"><button>Sign out</button></li>
          </ul>
          <AuthButton />
        </div>
      </nav>
  )
}

export default NavBar;
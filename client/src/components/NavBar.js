import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthButton from "./AuthButton";

function NavBar() {
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };

  const navStyle = {
    backgroundColor: "#0033a1",
  };

  const logoStyle = {
    width: "120px",
    height: "100px",
    objectFit: "cover",
  };

  const navLinkStyle = {
    marginLeft: "10px", 
    marginRight: "15px", 
    display: "flex",
    alignItems: "center",
    fontSize: "1.15rem",
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-dark shadow mb-3"
        style={navStyle}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="../cuny-sphere-preview.png" style={logoStyle} alt="Logo" />
          </Link>

          <ul className="navbar-nav ml-auto"> 
            <li className="nav-item" style={navLinkStyle}>
              <NavLink
                className="nav-link"
                to="/course"
                onClick={() => handleNavItemClick("course")}
              >
                Course
              </NavLink>
            </li>
            <li className="nav-item" style={navLinkStyle}>
              <NavLink
                className="nav-link"
                to="/job"
                onClick={() => handleNavItemClick("job")}
              >
                Job
              </NavLink>
            </li>
            <li className="nav-item" style={navLinkStyle}>
              <NavLink
                className="nav-link"
                to="/news"
                onClick={() => handleNavItemClick("news")}
              >
                News
              </NavLink>
            </li>
            <li className="nav-item" style={navLinkStyle}>
              <NavLink
                className="nav-link"
                to="/about-us"
                onClick={() => handleNavItemClick("about-us")}
              >
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <AuthButton />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

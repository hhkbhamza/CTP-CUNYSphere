import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";

import "./App.css";

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Micro Blog
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts/new">
              Create a Micro Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    /*
    <div>
      <LoginPage/>
      <SignUpPage/>
    </div>
    */

     <BrowserRouter>
       <Navigation />
       <div className="container-xl text-center">
         <div className="row justify-content-center">
           <Routes>
             <Route path="/posts/new" element={<PostFormPage />} />
             <Route path="/posts/:id" element={<ShowPostPage />} />
             <Route path="/about-us" element={<AboutUsPage />} />
             <Route path="/" element={<PostsListPage />} />
             
             <Route path="/login" element={<LoginPage />} />
             <Route path="/signup" element={<SignUpPage />} />
             <Route path="/home" element={<HomePage />} />
           </Routes>
         </div>
       </div>
     </BrowserRouter>
  );
}

export default App;

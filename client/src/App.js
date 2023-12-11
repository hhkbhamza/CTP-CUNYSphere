import { motion } from "framer-motion";
import React from "react";
import { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import NewsPage from "./pages/NewsPage";
import CoursePage from "./pages/CoursePage";
import CareerConnectPage from "./pages/CareerConnectPage";
import ResumeFeedbackPage from "./pages/ResumeFeedbackPage";
import "../src/pages/style/App.css";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRouteRequiresAuth";
import MainPage from "./pages/MainPage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import 'firebase/compat/database';
import ChatRoom from './components/ChatRoom';
import ChatRoomOne from './components/ChatRoomOne';
import ChatRoomTwo from './components/ChatRoomTwo';
import ChatRoomThree from './components/ChatRoomThree';


function Navigation(props) {
  const navStyle = {
    backgroundColor: "#0033a1",
  };

  const logoStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/main">
          <img src="../cuny-sphere-preview.png" alt="CUNY Logo" style={logoStyle} />
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/course">
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
          <li className="nav-item">
            <button>Sign out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="container-fluid">
          {/* <section>
          <ChatRoom />
          </section> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>

          <div className="row justify-content-center">
            <Routes>
              <Route path="/main" element={<MainPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/job" element={<PrivateRoute>{<JobPage />}</PrivateRoute>} />
              <Route
                path="/job/career-connect"
                element={<PrivateRoute>{<CareerConnectPage />}</PrivateRoute>}
              />
              <Route
                path="/job/resume-feedback"
                element={<PrivateRoute>{<ResumeFeedbackPage />}</PrivateRoute>}
              />
              <Route path="/news" element={<PrivateRoute>{<NewsPage />}</PrivateRoute>} />
              <Route path="/course" element={<PrivateRoute>{<CoursePage />}</PrivateRoute>} />
              <Route path="/course/chat/0" element={<PrivateRoute>{<ChatRoom />}</PrivateRoute>} />
              <Route path="/course/chat/1" element={<PrivateRoute>{<ChatRoomOne />}</PrivateRoute>} />
              <Route path="/course/chat/2" element={<PrivateRoute>{<ChatRoomTwo />}</PrivateRoute>} />
              <Route path="/course/chat/3" element={<PrivateRoute>{<ChatRoomThree />}</PrivateRoute>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

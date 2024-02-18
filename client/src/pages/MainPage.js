import React from "react";
import NavBar from "../components/NavBar";
import "../style/MainPage.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedTextCharacter from "../components/AnimatedTextCharacter";


function MainPage() {
  const navigate = useNavigate();

  const handleMeetTheTeamClick = () => {
    navigate("/about-us");
  };

  return (
    <motion.div className="main-page">
      <NavBar />
      <div className="cunySphere">
        <AnimatedTextCharacter text="CUNY Sphere" />
      </div>
      <motion.div className="content-container">
        <motion.div
          className="image-container"
          initial={{ x: -100, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
          className="mainPage-img"
            src="../Saly-1.png"
            alt=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
          />
        </motion.div>
        <motion.div className="text-container">
          <motion.div
            className="aboutCunySphere"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mainPageh2">About CUNY Sphere</h2>
            <p>
              Navigating the digital landscape of education, students often
              struggle to find reliable resources and connect with peers who
              share their academic interests. Our team at CUNY Sphere addresses
              this challenge, a specialized online platform for CUNY computer
              majors. <br />
              We provide comprehensive academic support, student assistance, and
              opportunities for meaningful connections. Dedicated to enhancing
              the educational experience, our team is committed to empowering
              CUNY students for success.
            </p>
            {/* Add more paragraphs if needed */}
          </motion.div>
          <motion.div
            className="aboutUs"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mainPageh2">CUNY Crafters</h2>
            <p>
              CUNY Crafters is a team of four students enrolled at the City
              University of New York (CUNY), embarking on a transformative
              journey in the realm of technology. As proud Full Stack Fellows of
              the CUNY Tech Prep program, a dynamic initiative supported by the
              CUNY Institute for Software Design and Development (CISDD) and the
              New York City Tech Talent Pipeline (NYC TTP), we are driven by a
              shared vision to bring about positive change and enhance the
              college experience. Get to know us!
            </p>
            <motion.button
              onClick={handleMeetTheTeamClick}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Meet The Team
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MainPage;
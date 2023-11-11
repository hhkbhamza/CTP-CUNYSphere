import React from "react";
import "../pages/style/aboutUsPage.css";

function AboutUsPage(props) {
  return (
    <>
      <div className="col text-center">
        <h2 className="mb-3">About CUNY Sphere</h2>
        <p className="mb-5">
          Navigating the digital landscape of education, students often struggle
          to find reliable resources and connect with peers who share their
          academic interests. Our team at CUNY Sphere addresses this challenge,
          a specialized online platform for CUNY computer majors. We provide
          comprehensive academic support, student assistance, and opportunities
          for meaningful connections. Dedicated to enhancing the educational
          experience, our team is committed to empowering CUNY students for
          success.
        </p>
        <h2 className="mb-3">About CUNY Crafters</h2>
        <div className="row">
          <div className="col-lg-6">
            <h3>Amir Hamza</h3>
            <p>Software Engineer</p>
            <img src="../Amir.jpeg"></img> <br></br>
            <a href="https://www.linkedin.com/in/amirhamza1/">LinkedIn</a>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos in itaque nihil consectetur qui natus similique
              nostrum molestias, ipsa explicabo hic impedit aspernatur. Ipsa
              provident neque culpa alias incidunt amet.
            </p>
          </div>
          <div className="col-lg-6">
            <h3>Benjamin Zhang</h3>
            <img src="../Benjamin.jpeg"></img> <br></br>
            <a href="https://www.linkedin.com/in/benjamin-z-b07229240/">
              LinkedIn
            </a>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos in itaque nihil consectetur qui natus similique
              nostrum molestias, ipsa explicabo hic impedit aspernatur. Ipsa
              provident neque culpa alias incidunt amet.
            </p>
          </div>
          <div className="col-lg-6">
            <h3>Dahyeon Park</h3>
            <img src="../Dahyeon.jpg"></img> <br></br>
            <a href="https://www.linkedin.com/in/dahyeon-park/">LinkedIn</a>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos in itaque nihil consectetur qui natus similique
              nostrum molestias, ipsa explicabo hic impedit aspernatur. Ipsa
              provident neque culpa alias incidunt amet.
            </p>
          </div>
          <div className="col-lg-6">
            <h3>Omar Abdullah</h3>
            <img src="../Omar.jpeg"></img> <br></br>
            <a href="https://www.linkedin.com/in/omar-abdullah-7719201ab/">
              LinkedIn
            </a>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos in itaque nihil consectetur qui natus similique
              nostrum molestias, ipsa explicabo hic impedit aspernatur. Ipsa
              provident neque culpa alias incidunt amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
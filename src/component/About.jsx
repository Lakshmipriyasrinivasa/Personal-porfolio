import React from "react";
import "./About.css";
import priyaPhoto from "../assets/priya.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img src={priyaPhoto} alt="Lakshmipriya" />
        </div>

        <div className="about-content">

          <h4>About Me</h4>

          <h2>Full Stack Web Developer</h2>

          <p>
            I'm <strong>Lakshmipriya M S</strong>, a Full Stack Web Developer
            passionate about building modern, responsive, and user-friendly web
            applications. I enjoy turning ideas into real-world solutions using
            React.js, Node.js, Express.js, and SQL databases.
          </p>

          <p>
            I have experience developing full-stack applications, integrating
            REST APIs, designing databases, and working collaboratively in
            startup environments. I enjoy learning new technologies and solving
            challenging problems through clean and efficient code.
          </p>

          <div className="about-info">

            <div className="info-box">
              <h5>Name</h5>
              <p>Lakshmipriya M S</p>
            </div>

            <div className="info-box">
              <h5>Email</h5>
              <p>lakshmipriyamscse2021@gmail.com</p>
            </div>

            <div className="info-box">
              <h5>Education</h5>
              <p>B.E. Computer Science and Engineering</p>
            </div>

            <div className="info-box">
              <h5>Location</h5>
              <p>Tamil Nadu, India</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <h2 className="footer-logo">
          Lakshmipriya M S
        </h2>

        <p className="footer-text">
          Full Stack Web Developer
        </p>

        <div className="footer-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#experience">Experience</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:lakshmipriyamscse2021@gmail.com">
            Email
          </a>

        </div>

        <hr />

        <p className="copyright">
          © {year} Lakshmipriya M S. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;
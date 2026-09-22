import React from "react";
import "./Hero.css";
import priyaPhoto from "../assets/priya.jpeg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <p className="hello">Hello, I'm</p>

        <h1 className="name">
          Lakshmipriya <span>M S</span>
        </h1>

        <h2 className="role">
          Full Stack Web Developer
        </h2>

        <p className="description">
          Passionate about building responsive, scalable, and
          user-friendly web applications using React.js,
          Node.js, Express.js, and SQL databases.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href={`${import.meta.env.BASE_URL}resume.pdf`} className="btn-secondary" download>
            Download Resume
          </a>
        </div>

      </div>

      <div className="hero-image">
        <img src={priyaPhoto} alt="Lakshmipriya" />
      </div>
    </section>
  );
};

export default Hero;
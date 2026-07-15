import React from "react";
import "./Project.css";

const Projects = () => {
  const projects = [
    {
      title: "Employee Portal",
      description:
        "A full-stack employee management system with Admin and Employee dashboards. Features include attendance tracking, task management, projects, messaging, and working hours.",
      technologies: "React.js • Node.js • Express.js • MySQL",
      github: "https://github.com/yourusername/employee-portal",
      demo: "#",
    },
    {
      title: "Hotel Booking Website",
      description:
        "A responsive hotel booking application with room management, booking system, login authentication, and admin panel.",
      technologies: "HTML • CSS • JavaScript • PHP • MySQL",
      github: "https://github.com/yourusername/hotel-booking",
      demo: "#",
    },
    {
      title: "Intelligent Intrusion Detection System",
      description:
        "A machine learning–based Network Intrusion Detection System that detects cyber threats using reinforcement learning and benchmark datasets.",
      technologies: "Python • Machine Learning • NSL-KDD • UNSW-NB15",
      github: "https://github.com/yourusername/intrusion-detection",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h4>Projects</h4>
        <h2>My Recent Work</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="tech">
                {project.technologies}
              </span>

              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
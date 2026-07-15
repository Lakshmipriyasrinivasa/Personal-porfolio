import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <h4>Experience</h4>
        <h2>My Professional Journey</h2>

        <div className="timeline">

          {/* Experience 1 */}

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="date">
                Aug 2025 - Mar 2026
              </span>

              <h3>Software Developer</h3>

              <h5>FIELDUO, Inc.</h5>

              <p>
                Worked as a Full Stack Developer building scalable web
                applications using React.js and Node.js. Developed
                secure application modules, integrated REST APIs,
                collaborated with the CEO and CTO, and participated
                in production deployments and client demonstrations.
              </p>
            </div>
          </div>

          {/* Experience 2 */}

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="date">
                May 2025 - Jul 2025
              </span>

              <h3>Freelance Full Stack Developer</h3>

              <h5>Hotel Booking Web Application</h5>

              <p>
                Developed a complete hotel booking website using
                HTML, CSS, JavaScript, PHP and MySQL.
                Built responsive pages, integrated backend APIs,
                managed booking data, and delivered a real-world
                production-ready application.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "🟨" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "MySQL", icon: "🗄️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Git", icon: "🔧" },
    { name: "GitHub", icon: "💻" },
    { name: "Postman", icon: "📬" },
    { name: "VS Code", icon: "📝" },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <h4>My Skills</h4>
        <h2>Technologies I Work With</h2>

        <p>
          I enjoy building modern web applications using frontend and backend
          technologies. Here are the tools and technologies I use regularly.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <span>{skill.icon}</span>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
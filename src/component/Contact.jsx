import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <h4>Contact</h4>
        <h2>Get In Touch</h2>

        <p className="contact-text">
          I'm currently looking for new opportunities. Feel free to reach out
          if you'd like to work together or just say hello!
        </p>

        <div className="contact-content">

          {/* Left Side */}

          <div className="contact-info">

            <div className="contact-card">
              <h3>Email</h3>
              <p>lakshmipriyamscse2021@gmail.com</p>
            </div>

            <div className="contact-card">
              <h3>Phone</h3>
              <p>+91 86083 88323</p>
            </div>

            <div className="contact-card">
              <h3>Location</h3>
              <p>Tamil Nadu, India</p>
            </div>

            <div className="contact-card">
              <h3>GitHub</h3>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                github.com/yourusername
              </a>
            </div>

          </div>

          {/* Right Side */}

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;
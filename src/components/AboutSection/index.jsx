import React from 'react';
import profilePic from '../../img/profile-pic.png';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-left">
            <div className="profile-card">
              <div className="profile-image-container">
                <img
                  src={profilePic}
                  alt="Vishesh Tiwari"
                  className="profile-image"
                />
              </div>
              <h1 className="profile-name">Vishesh Tiwari</h1>
              <h2 className="profile-title">Full Stack Java Developer</h2>
              <div className="profile-tags">
                <span className="tag">6+ Years Experience</span>
                <span className="tag">Java Expert</span>
                <span className="tag">React Developer</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-content">
              <h3 className="section-title">About Me</h3>
              <p className="about-text">
                Experienced IT professional with 6+ years of work experience seeking a position as Full stack developer. 
                Offering expertise in Java, Spring Boot/MVC, React and AWS.
              </p>
              
              <p className="about-text">
                I am passionate about creating efficient, scalable applications and have a strong background in 
                both frontend and backend development. My experience spans across various technologies including 
                Java ecosystem, modern JavaScript frameworks, and cloud platforms.
              </p>

              <div className="divider"></div>

              <h4 className="contact-title">Contact Information</h4>
              
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:vishesh.tiwari813@gmail.com" className="contact-link">
                    vishesh.tiwari813@gmail.com
                  </a>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <a 
                    href="https://www.linkedin.com/in/vishesh-tiwari-448222146/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">🐙</span>
                  <a 
                    href="https://github.com/Vishesh813" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
              
              <div className="resume-download">
                <button 
                  className="download-resume-btn"
                  onClick={() => window.open('https://drive.google.com/file/d/your-resume-id/view', '_blank')}
                  aria-label="Download Resume"
                >
                  <span className="download-icon">📄</span>
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
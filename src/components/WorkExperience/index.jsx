import React from 'react';
import portfolioData from '../../data/portfolioData.json';
import './WorkExperience.css';

// Company color mapping
const companyColors = {
  'Target': '#CC0000',
  'Lowe\'s': '#004990', 
  'Principal Global Services': '#1f4e79',
  'Tata Consultancy Services': '#0066cc'
};

const experiences = portfolioData.workExperience.map(exp => ({
  company: exp.company,
  position: exp.position,
  location: exp.location,
  duration: exp.duration,
  logo: exp.logo,
  color: companyColors[exp.company] || '#0066cc',
  achievements: exp.achievements,
}));

const WorkExperienceSection = () => {
  return (
    <div className="work-experience-section">
      <div className="work-container">
        <h1 className="section-title">Work Experience</h1>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker" style={{ backgroundColor: exp.color }}>
                <span className="marker-icon">💼</span>
              </div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <img src={exp.logo} alt={exp.company} className="company-logo" />
                    <div className="experience-info">
                      <h2 className="position-title">{exp.position}</h2>
                      <h3 className="company-name">{exp.company}</h3>
                    </div>
                  </div>
                  
                  <div className="experience-meta">
                    <span className="meta-item">📍 {exp.location}</span>
                    <span className="meta-item">📅 {exp.duration}</span>
                  </div>

                  <h4 className="achievements-title">Key Achievements:</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">
                        <span className="bullet" style={{ backgroundColor: exp.color }}></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
import React from 'react';
import lowesLogo from '../../img/logo-lowes.png';
import principalLogo from '../../img/pricipal-logo.jpg';
import tcsLogo from '../../img/tcs-logo.png';
import './WorkExperience.css';

const experiences = [
  {
    company: 'Lowe\'s',
    position: 'Senior Software Engineer',
    location: 'Bangalore',
    duration: 'February 2023 - Present',
    logo: lowesLogo,
    color: '#004990',
    achievements: [
      'Spearheaded the creation of Promo Central Applications, the central hub to create diverse types of promotions in a generic way',
      'Empowered promo specialists to effortlessly create a wide range of promotions',
      'Collaborated with Promo Central team to utilize JAVA, Springboot, React',
      'Architected applications, executed integration test cases, and managed CI/CD with Jenkins and Docker',
      'Optimized search operations over millions of data with appropriate strategies, enhancing read and write operations efficiency',
    ],
  },
  {
    company: 'Principal Global Services',
    position: 'Software Engineer',
    location: 'Pune',
    duration: 'January 2022 - February 2023',
    logo: principalLogo,
    color: '#1f4e79',
    achievements: [
      'Improved operation teams experience for tracking transaction and viewing the reports based on conditions on UI',
      'Developed Spring Batch application for processing records in batch',
      'Created Jira error notification component using AWS services like AWS SQS, AWS CloudWatch, AWS Lambda',
      'Migrated spring web application components written in event-driven architecture using AWS services',
      'Experienced in infrastructure as Code to deliver a stable environment rapidly and scale using AWS CDK',
      'Trained new joiners on domain knowledge as well agile practices, Git and other framework',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    position: 'System Engineer',
    location: 'Pune',
    duration: 'June 2019 - January 2022',
    logo: tcsLogo,
    color: '#0066cc',
    achievements: [
      'Developed a web-based application which helps to find active mainframe jobs script based on a search condition using Spring boot for backend and Bootstrap for frontend development',
      'Design and developed web applications using Java EE 8 technologies like Servlets, JSP, JDBC follows MVC',
      'Developing Java REST Web services and improving front-end using jQuery, HTML, CSS, AJAX',
      'Automated different manual test cases using HP LeanFT similar to Selenium. Worked on Integration Java with the LeanFT tool',
    ],
  },
];

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
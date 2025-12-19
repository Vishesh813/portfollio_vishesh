import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Promo Central Application',
    description: 'A comprehensive promotion management system built for Lowe\'s to create and manage diverse types of promotions in a generic way.',
    technologies: ['Java', 'Spring Boot', 'React', 'Jenkins', 'Docker', 'AWS'],
    features: [
      'Generic promotion creation system',
      'Optimized search over millions of records',
      'CI/CD pipeline with Jenkins and Docker',
      'Microservices architecture'
    ],
    company: 'Lowe\'s',
    year: '2023',
    status: 'Production',
    icon: '🏪'
  },
  {
    id: 2,
    title: 'Transaction Tracking System',
    description: 'Enhanced operation teams experience for tracking transactions and generating reports with advanced filtering capabilities.',
    technologies: ['Java', 'Spring Boot', 'AWS SQS', 'AWS Lambda', 'CloudWatch'],
    features: [
      'Real-time transaction tracking',
      'Advanced reporting system',
      'AWS-based notification system',
      'Event-driven architecture'
    ],
    company: 'Principal Global Services',
    year: '2022',
    status: 'Production',
    icon: '📊'
  },
  {
    id: 3,
    title: 'Spring Batch Processing System',
    description: 'Developed Spring Batch application for processing large volumes of records efficiently with error handling and monitoring.',
    technologies: ['Java', 'Spring Batch', 'Spring Boot', 'AWS CDK', 'Infrastructure as Code'],
    features: [
      'Batch processing of large datasets',
      'Error handling and retry mechanisms',
      'Infrastructure as Code deployment',
      'Monitoring and alerting'
    ],
    company: 'Principal Global Services',
    year: '2022',
    status: 'Production',
    icon: '⚙️'
  },
  {
    id: 4,
    title: 'Mainframe Jobs Management System',
    description: 'Web-based application to find and manage active mainframe jobs with advanced search capabilities.',
    technologies: ['Java EE 8', 'Spring Boot', 'Bootstrap', 'jQuery', 'REST APIs'],
    features: [
      'Advanced search functionality',
      'Real-time job status monitoring',
      'User-friendly web interface',
      'RESTful API integration'
    ],
    company: 'Tata Consultancy Services',
    year: '2021',
    status: 'Production',
    icon: '🖥️'
  },
  {
    id: 5,
    title: 'Automated Testing Framework',
    description: 'Automated testing solution using HP LeanFT for comprehensive test coverage and continuous integration.',
    technologies: ['Java', 'HP LeanFT', 'Selenium', 'Test Automation', 'CI/CD'],
    features: [
      'Automated test case execution',
      'Integration with CI/CD pipeline',
      'Comprehensive test reporting',
      'Cross-browser testing support'
    ],
    company: 'Tata Consultancy Services',
    year: '2020',
    status: 'Production',
    icon: '🧪'
  }
];

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="projects-container">
        <h1 className="section-title">Projects & Portfolio</h1>
        <p className="section-subtitle">
          A showcase of my professional projects and technical contributions across different organizations
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-meta">
                  <span className="project-company">{project.company}</span>
                  <span className="project-year">{project.year}</span>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-footer">
                <span className={`project-status ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

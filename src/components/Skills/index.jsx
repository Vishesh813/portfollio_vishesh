import React, { useState } from 'react';
import './Skills.css';

const frontEndSkills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 85 },
  { name: 'TypeScript', level: 75 },
  { name: 'jQuery', level: 70 },
];

const backEndSkills = [
  { name: 'Java/J2EE', level: 90 },
  { name: 'Spring Boot', level: 85 },
  { name: 'Spring MVC', level: 80 },
  { name: 'REST APIs', level: 85 },
  { name: 'JUnit & Mockito', level: 80 },
  { name: 'Git & Maven', level: 85 },
  { name: 'CI/CD (Jenkins)', level: 75 },
];

const allSkills = [
  'Java/J2EE platform preferably Java 8 or above',
  'Spring MVC, Spring Boot, Spring Batch, Microservices',
  'REST APIs',
  'XML, JSON',
  'Unit test framework - JUNIT and Mockito',
  'VCS tools - Git, BitBucket',
  'Build tool Maven',
  'CI/CD pipeline tool - Bamboo, Github actions and Jenkins',
  'AWS services - SNS, SQS, API gateway, IAM, S3, Cloudwatch, SES, Lambda',
  'Understanding of ORM tools - Hibernate',
  'Database concept, MYSQL and SQL',
  'Web servers and application servers like Tomcat, Websphere and JBoss',
  'Oauth, OpenID',
  'Apigee, Kibana',
  'CSS, HTML, Javascript, Jquery, React, Typescript',
  'Dev Ops - Graphana, Kubernetes, Docker, Kafka',
];

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const renderSkillsList = () => (
    <div className="skills-card">
      <h3 className="skills-title">Technical Skills</h3>
      <div className="skills-grid">
        {allSkills.map((skill, index) => (
          <div key={index} className="skill-chip">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  const renderSkillBars = (skills, title) => (
    <div className="skills-card">
      <h3 className="skills-title">{title}</h3>
      <div className="skills-bars">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-progress">
              <div 
                className="skill-progress-bar" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return renderSkillsList();
      case 1:
        return renderSkillBars(frontEndSkills, 'Frontend Skills');
      case 2:
        return renderSkillBars(backEndSkills, 'Backend Skills');
      default:
        return renderSkillsList();
    }
  };

  return (
    <div className="skills-section">
      <div className="skills-container">
        <div className="skills-tabs">
          <button 
            className={`tab-button ${selectedTab === 0 ? 'active' : ''}`}
            onClick={() => handleTabChange(0)}
          >
            All Skills
          </button>
          <button 
            className={`tab-button ${selectedTab === 1 ? 'active' : ''}`}
            onClick={() => handleTabChange(1)}
          >
            Frontend
          </button>
          <button 
            className={`tab-button ${selectedTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabChange(2)}
          >
            Backend
          </button>
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Skills;
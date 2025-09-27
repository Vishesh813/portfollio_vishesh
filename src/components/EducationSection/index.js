import React from 'react';
import knitLogo from '../../img/knit-logo.jpg';
import csjmLogo from '../../img/csjm-logo.png';
import nlkLogo from '../../img/up-bord-logo.png';
import './EducationSection.css';

const educationData = [
  {
    degree: 'Master of Computer Application',
    school: 'Kamla Nehru Institute of Technology',
    university: 'Dr. A.P.J. Abdul Kalam Technical University Uttar Pradesh, Lucknow',
    duration: '2016 - 2019',
    percentage: '77.67%',
    logo: knitLogo,
    color: '#1976d2',
    type: 'Post Graduate',
  },
  {
    degree: 'B.Sc (Mathematics/Chemistry)',
    school: 'V.S.S.D College, Kanpur',
    university: 'Chhatrapati Shahu Ji Maharaj University, Kanpur',
    duration: '2012 - 2016',
    percentage: '62.67%',
    logo: csjmLogo,
    color: '#388e3c',
    type: 'Graduate',
  },
  {
    degree: 'Intermediate',
    school: 'N.L.K Inter College, Kanpur',
    university: 'U.P. Board Allahabad',
    duration: '2010 - 2012',
    percentage: '79.88%',
    logo: nlkLogo,
    color: '#f57c00',
    type: 'Higher Secondary',
  },
  {
    degree: 'High School (10th)',
    school: 'N.L.K Inter College, Kanpur',
    university: 'U.P. Board Allahabad',
    duration: '2009 - 2010',
    percentage: '80.81%',
    logo: nlkLogo,
    color: '#7b1fa2',
    type: 'Secondary',
  },
];

const EducationSection = () => {
  return (
    <div className="education-section">
      <div className="education-container">
        <h1 className="section-title">Education</h1>
        
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker" style={{ backgroundColor: edu.color }}>
                <span className="marker-icon">🎓</span>
              </div>
              <div className="timeline-content">
                <div className="education-card">
                  <div className="education-header">
                    <img src={edu.logo} alt={edu.school} className="school-logo" />
                    <div className="education-info">
                      <h2 className="degree-title">{edu.degree}</h2>
                      <h3 className="school-name">{edu.school}</h3>
                      <p className="university-name">{edu.university}</p>
                    </div>
                  </div>
                  
                  <div className="divider"></div>
                  
                  <div className="education-meta">
                    <span className="meta-item">📅 {edu.duration}</span>
                    <span className="meta-item">📊 {edu.percentage}</span>
                    <span className="type-chip" style={{ backgroundColor: edu.color }}>
                      {edu.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
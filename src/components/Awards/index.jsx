import React from 'react';
import './Awards.css';

const awards = [
  {
    title: 'Spot Award',
    description: 'Recognized for outstanding performance and contribution',
    icon: '⭐',
    color: '#ffd700',
    year: '2023',
  },
  {
    title: 'Delivery Award',
    description: 'Recognized for exceptional project delivery and client satisfaction',
    icon: '🏆',
    color: '#c0c0c0',
    year: '2022',
  },
  {
    title: 'TCS iON Java Hackathon 2019 Finalist',
    description: 'Reached final round in TCS internal Java hackathon competition',
    icon: '🥇',
    color: '#cd7f32',
    year: '2019',
  },
  {
    title: '3x Spot Winner',
    description: 'Three times spot winner in team for exceptional contributions',
    icon: '🏅',
    color: '#ff6b6b',
    year: '2019-2021',
  },
  {
    title: 'TCS CODEVITA 2018',
    description: 'Cleared first round of TCS CODEVITA programming competition',
    icon: '🥇',
    color: '#4ecdc4',
    year: '2018',
  },
];

const Awards = () => {
  return (
    <div className="awards-section">
      <div className="awards-container">
        <h1 className="section-title">Achievements & Awards</h1>
        
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="award-card">
              <div className="award-icon" style={{ backgroundColor: award.color }}>
                <span className="icon">{award.icon}</span>
              </div>
              
              <h3 className="award-title">{award.title}</h3>
              
              <p className="award-description">{award.description}</p>
              
              <span className="award-year">{award.year}</span>
            </div>
          ))}
        </div>

        <div className="recognition-summary">
          <h3 className="summary-title">Recognition Summary</h3>
          <div className="summary-list">
            {awards.map((award, index) => (
              <div key={index} className="summary-item">
                <div className="summary-icon" style={{ backgroundColor: award.color }}>
                  <span className="icon">{award.icon}</span>
                </div>
                <div className="summary-content">
                  <h4 className="summary-award-title">{award.title}</h4>
                  <p className="summary-award-description">
                    {award.description} ({award.year})
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/mockData';
import '../styles/About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const { personal, experience, achievements } = portfolioData;

  useEffect(() => {
    document.title = `About - ${personal.name}`;
  }, [personal.name]);

  const tabs = [
    { id: 'story', label: 'My Story', icon: '🌟' },
    { id: 'experience', label: 'Experience', icon: '🚀' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' }
  ];

  return (
    <div className="about-page">
      <section className="section hero-about">
        <div className="container">
          <div className="about-hero">
            <div className="about-hero-text animate-slideInUp">
              <h1 className="page-title gradient-text">About Me</h1>
              <p className="page-subtitle">Journey Through the Cosmos of My Experience</p>
            </div>
            <div className="about-hero-visual">
              <div className="cosmic-avatar">
                <div className="avatar-ring ring-1"></div>
                <div className="avatar-ring ring-2"></div>
                <div className="avatar-ring ring-3"></div>
                <div className="avatar-center">
                  <span className="avatar-initial">{personal.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-content">
        <div className="container">
          <div className="about-tabs">
            <div className="tab-navigation">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-label">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="tab-content">
              {activeTab === 'story' && (
                <div className="story-content animate-slideInUp">
                  <div className="story-grid">
                    <div className="story-text">
                      <h2 className="content-title">The Cosmic Journey</h2>
                      <p>{personal.bio}</p>
                      <p>My passion for creating digital experiences began when I first saw the infinite possibilities of code meeting creativity. Like a cosmic explorer charting unknown territories, I've dedicated my career to pushing the boundaries of what's possible in the digital realm.</p>
                      <p>Every project is an expedition into uncharted space, where technical challenges become stepping stones to innovation and creative vision transforms into tangible reality.</p>
                      
                      <div className="personal-stats">
                        <div className="stat-row">
                          <span className="stat-label">Location:</span>
                          <span className="stat-value">{personal.location}</span>
                        </div>
                        <div className="stat-row">
                          <span className="stat-label">Email:</span>
                          <span className="stat-value">
                            <a href={`mailto:${personal.email}`} className="contact-email">
                              {personal.email}
                            </a>
                          </span>
                        </div>
                        <div className="stat-row">
                          <span className="stat-label">Phone:</span>
                          <span className="stat-value">
                            <a href={`tel:${personal.phone}`} className="contact-phone">
                              {personal.phone}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="story-visual">
                      <div className="floating-elements">
                        <div className="element element-1"></div>
                        <div className="element element-2"></div>
                        <div className="element element-3"></div>
                        <div className="element element-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="experience-content animate-slideInUp">
                  <h2 className="content-title">Professional Orbit</h2>
                  <div className="timeline">
                    {experience.map((exp, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-marker">
                          <div className="timeline-dot"></div>
                        </div>
                        <div className="timeline-content cosmic-card">
                          <div className="timeline-period">{exp.period}</div>
                          <h3 className="timeline-title">{exp.title}</h3>
                          <div className="timeline-company">{exp.company}</div>
                          <p className="timeline-description">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="achievements-content animate-slideInUp">
                  <h2 className="content-title">Stellar Achievements</h2>
                  <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="achievement-item cosmic-card">
                        <div className="achievement-icon">
                          {achievement.split(' ')[0]}
                        </div>
                        <div className="achievement-text">
                          {achievement.substring(achievement.indexOf(' ') + 1)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
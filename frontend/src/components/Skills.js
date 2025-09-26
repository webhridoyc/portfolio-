import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/mockData';
import '../styles/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  const { skills, services, personal } = portfolioData;

  useEffect(() => {
    document.title = `Skills - ${personal.name}`;
  }, [personal.name]);

  const SkillBar = ({ skill }) => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setAnimated(true), 300);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">{skill.name}</span>
          <span className="skill-level">{skill.level}%</span>
        </div>
        <div className="skill-bar">
          <div 
            className={`skill-progress ${animated ? 'animated' : ''}`}
            style={{ '--skill-level': `${skill.level}%` }}
          ></div>
        </div>
        <div className="skill-category">{skill.category}</div>
      </div>
    );
  };

  const ServiceCard = ({ service }) => (
    <div className="service-card cosmic-card">
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <div className="service-price">{service.price}</div>
    </div>
  );

  return (
    <div className="skills-page">
      <section className="section skills-hero">
        <div className="container">
          <div className="hero-content animate-slideInUp">
            <h1 className="page-title gradient-text">Skills & Services</h1>
            <p className="page-subtitle">
              Mastery forged across galaxies of code, design, and innovation
            </p>
          </div>
        </div>
      </section>

      <section className="section skills-content">
        <div className="container">
          {/* Skills Section */}
          <div className="skills-section">
            <h2 className="section-title">Technical Arsenal</h2>
            
            <div className="skills-tabs">
              <button
                className={`skill-tab ${activeCategory === 'technical' ? 'active' : ''}`}
                onClick={() => setActiveCategory('technical')}
              >
                <span className="tab-icon">⚡</span>
                Technical Skills
              </button>
              <button
                className={`skill-tab ${activeCategory === 'creative' ? 'active' : ''}`}
                onClick={() => setActiveCategory('creative')}
              >
                <span className="tab-icon">🎨</span>
                Creative Skills
              </button>
            </div>

            <div className="skills-grid">
              {skills[activeCategory].map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="services-section">
            <h2 className="section-title">Cosmic Services</h2>
            <p className="section-subtitle">
              Transform your digital vision into stellar reality
            </p>
            
            <div className="services-grid">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>

          {/* Skills Overview */}
          <div className="skills-overview">
            <h2 className="section-title">Skill Galaxy Overview</h2>
            
            <div className="overview-grid">
              <div className="overview-card cosmic-card">
                <h3>Frontend Mastery</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Vue.js</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Three.js</span>
                  <span className="skill-tag">CSS3</span>
                </div>
                <p>Crafting immersive user experiences with modern frameworks and cutting-edge animations.</p>
              </div>

              <div className="overview-card cosmic-card">
                <h3>Backend Excellence</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">FastAPI</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">PostgreSQL</span>
                </div>
                <p>Building robust, scalable server architectures that power stellar applications.</p>
              </div>

              <div className="overview-card cosmic-card">
                <h3>Creative Vision</h3>
                <div className="skill-tags">
                  <span className="skill-tag">UI/UX</span>
                  <span className="skill-tag">3D Modeling</span>
                  <span className="skill-tag">Animation</span>
                  <span className="skill-tag">Digital Art</span>
                  <span className="skill-tag">Branding</span>
                </div>
                <p>Blending artistic creativity with technical precision for memorable digital experiences.</p>
              </div>

              <div className="overview-card cosmic-card">
                <h3>DevOps & Tools</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">CI/CD</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Linux</span>
                </div>
                <p>Streamlining development workflows and ensuring seamless deployment across the galaxy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
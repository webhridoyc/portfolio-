import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/mockData';
import '../styles/Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { personal, projects, testimonials } = portfolioData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  const TypewriterText = ({ text, delay = 50 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [currentIndex, text, delay]);

    return <span>{displayText}</span>;
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-slideInUp' : ''}`}>
            <h1 className="hero-title">
              <span className="hero-greeting">Hello, I'm</span>
              <span className="hero-name gradient-text glow-cyan">{personal.name}</span>
            </h1>
            <h2 className="hero-subtitle">
              <TypewriterText text={personal.title} delay={80} />
            </h2>
            <p className="hero-description">
              {personal.tagline}
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="cosmic-button primary">
                View My Work
              </Link>
              <Link to="/contact" className="cosmic-button secondary">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-elements">
              <div className="floating-orb orb-1"></div>
              <div className="floating-orb orb-2"></div>
              <div className="floating-orb orb-3"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
          <span>Explore the Universe</span>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section about-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title gradient-text">About Me</h2>
            <p className="section-subtitle">Journey Through My Cosmic Evolution</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>{personal.bio}</p>
              <Link to="/about" className="cosmic-button">Learn More</Link>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number glow-cyan">50+</span>
                <span className="stat-label">Stellar Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number glow-pink">10k+</span>
                <span className="stat-label">Hours of Code</span>
              </div>
              <div className="stat-item">
                <span className="stat-number glow-gold">100%</span>
                <span className="stat-label">Cosmic Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section featured-projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title gradient-text">Featured Projects</h2>
            <p className="section-subtitle">Explore My Most Stellar Creations</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card cosmic-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                      <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="projects-cta">
            <Link to="/projects" className="cosmic-button">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title gradient-text">Cosmic Testimonials</h2>
            <p className="section-subtitle">What Fellow Space Travelers Say</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card cosmic-card">
                <div className="testimonial-content">
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
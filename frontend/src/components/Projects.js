import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/mockData';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const { projects, personal } = portfolioData;

  useEffect(() => {
    document.title = `Projects - ${personal.name}`;
  }, [personal.name]);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.category.toLowerCase().includes(activeFilter.toLowerCase())
      ));
    }
  }, [activeFilter, projects]);

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🌟' },
    { id: 'web', label: 'Web Dev', icon: '🌐' },
    { id: 'full stack', label: 'Full Stack', icon: '⚡' },
    { id: 'game', label: 'Games', icon: '🎮' },
    { id: 'data', label: 'Data Viz', icon: '📊' },
    { id: 'backend', label: 'Backend', icon: '🔧' }
  ];

  const ProjectCard = ({ project }) => (
    <div className="project-card cosmic-card animate-slideInUp">
      <div className="project-header">
        <div className="project-image">
          <img src={project.image} alt={project.title} />
          <div className="project-overlay">
            <div className="project-actions">
              <a 
                href={project.liveUrl} 
                className="action-btn primary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a 
                href={project.githubUrl} 
                className="action-btn secondary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        {project.featured && (
          <div className="featured-badge">
            <span>⭐ Featured</span>
          </div>
        )}
      </div>
      
      <div className="project-body">
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
          <span className="project-year">{project.completion}</span>
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="projects-page">
      <section className="section projects-hero">
        <div className="container">
          <div className="hero-content animate-slideInUp">
            <h1 className="page-title gradient-text">My Projects</h1>
            <p className="page-subtitle">
              Explore the digital galaxies I've created across the cosmos of technology
            </p>
          </div>
        </div>
      </section>

      <section className="section projects-content">
        <div className="container">
          {/* Filter Navigation */}
          <div className="filter-nav">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-label">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <div className="no-projects-icon">🔍</div>
              <h3>No Projects Found</h3>
              <p>Try selecting a different category to explore more cosmic creations!</p>
            </div>
          )}

          {/* Stats Section */}
          <div className="projects-stats">
            <div className="stats-grid">
              <div className="stat-item cosmic-card">
                <div className="stat-icon">🚀</div>
                <div className="stat-number">{projects.length}</div>
                <div className="stat-label">Total Projects</div>
              </div>
              <div className="stat-item cosmic-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-number">{projects.filter(p => p.featured).length}</div>
                <div className="stat-label">Featured Works</div>
              </div>
              <div className="stat-item cosmic-card">
                <div className="stat-icon">🛠️</div>
                <div className="stat-number">
                  {[...new Set(projects.flatMap(p => p.technologies))].length}
                </div>
                <div className="stat-label">Technologies Used</div>
              </div>
              <div className="stat-item cosmic-card">
                <div className="stat-icon">🌟</div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Cosmic Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
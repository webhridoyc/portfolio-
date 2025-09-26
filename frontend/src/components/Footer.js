import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/mockData';
import '../styles/Footer.css';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: personal.social.github, icon: '🔗' },
    { name: 'LinkedIn', url: personal.social.linkedin, icon: '💼' },
    { name: 'Twitter', url: personal.social.twitter, icon: '🐦' },
    { name: 'Instagram', url: personal.social.instagram, icon: '📸' },
    { name: 'Dribbble', url: personal.social.dribbble, icon: '🎨' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="cosmic-footer">
      <div className="footer-stars"></div>
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-logo gradient-text">{personal.name}</h3>
            <p className="footer-tagline">{personal.tagline}</p>
            <p className="footer-location">{personal.location}</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4 className="footer-title">Connect</h4>
            <div className="social-grid">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-title">Reach Out</h4>
            <div className="contact-info">
              <a href={`mailto:${personal.email}`} className="contact-link">
                <span className="contact-icon">📧</span>
                {personal.email}
              </a>
              <a href={`tel:${personal.phone}`} className="contact-link">
                <span className="contact-icon">📞</span>
                {personal.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} {personal.name}. Crafted with cosmic energy across the galaxy.
            </p>
            <div className="footer-badges">
              <span className="badge">Made with 💫</span>
              <span className="badge">Powered by ⚡</span>
              <span className="badge">Built for 🚀</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/mockData';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const { personal } = portfolioData;

  useEffect(() => {
    document.title = `Contact - ${personal.name}`;
  }, [personal.name]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: personal.email,
      action: `mailto:${personal.email}`,
      description: 'Send me a message anytime'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: personal.phone,
      action: `tel:${personal.phone}`,
      description: 'Call for urgent inquiries'
    },
    {
      icon: '📍',
      label: 'Location',
      value: personal.location,
      action: '#',
      description: 'Based across the galaxy'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Professional Network',
      action: personal.social.linkedin,
      description: 'Connect professionally'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', url: personal.social.github, icon: '🔗', color: '#64ffda' },
    { name: 'LinkedIn', url: personal.social.linkedin, icon: '💼', color: '#0077b5' },
    { name: 'Twitter', url: personal.social.twitter, icon: '🐦', color: '#1da1f2' },
    { name: 'Instagram', url: personal.social.instagram, icon: '📸', color: '#e4405f' },
    { name: 'Dribbble', url: personal.social.dribbble, icon: '🎨', color: '#ea4c89' }
  ];

  return (
    <div className="contact-page">
      <section className="section contact-hero">
        <div className="container">
          <div className="hero-content animate-slideInUp">
            <h1 className="page-title gradient-text">Let's Connect</h1>
            <p className="page-subtitle">
              Ready to launch your next cosmic project? Let's explore the possibilities together.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="form-title">Send a Message</h2>
              <p className="form-subtitle">
                Tell me about your project and let's create something stellar together.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Your cosmic name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="your.email@galaxy.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="What's this mission about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Tell me about your cosmic vision..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`submit-btn cosmic-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>🚀 Launching Message...</span>
                  ) : (
                    <span>Launch Message</span>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <span className="success-icon">✨</span>
                    Message launched successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2 className="info-title">Get in Touch</h2>
              <p className="info-subtitle">
                Choose your preferred method to connect across the digital cosmos.
              </p>

              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="contact-method cosmic-card"
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="method-icon">{method.icon}</div>
                    <div className="method-content">
                      <div className="method-label">{method.label}</div>
                      <div className="method-value">{method.value}</div>
                      <div className="method-description">{method.description}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h3 className="social-title">Follow the Journey</h3>
                <div className="social-links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ '--social-color': social.color }}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <div className="resume-section">
                <h3 className="resume-title">Professional Profile</h3>
                <p className="resume-description">
                  Download my cosmic resume for a complete overview of my journey through the tech galaxy.
                </p>
                <a
                  href={personal.resume}
                  className="resume-btn cosmic-button"
                  download
                >
                  <span>📄</span>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
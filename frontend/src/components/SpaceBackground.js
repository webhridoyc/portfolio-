import React, { useEffect, useCallback } from 'react';
import '../styles/SpaceBackground.css';

const SpaceBackground = () => {
  // Enhanced star creation with better distribution
  const createStars = useCallback(() => {
    const starfield = document.querySelector('.starfield-dynamic');
    if (!starfield) return;
    
    const starCount = 200;
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 1}px;
        height: ${Math.random() * 4 + 1}px;
        background: ${getRandomStarColor()};
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate;
        opacity: ${Math.random() * 0.8 + 0.3};
        box-shadow: 0 0 ${Math.random() * 20 + 5}px currentColor;
      `;
      fragment.appendChild(star);
    }
    
    starfield.appendChild(fragment);
  }, []);

  const getRandomStarColor = () => {
    const colors = ['#fff', '#64ffda', '#ff6b9d', '#ffd700', '#8a2be2', '#00ff7f', '#ff4500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Enhanced shooting star with better trail effects
  const createShootingStar = useCallback(() => {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star-dynamic';
    
    const startY = Math.random() * 60;
    const duration = Math.random() * 2000 + 1500;
    const trailLength = Math.random() * 150 + 100;
    
    shootingStar.style.cssText = `
      position: fixed;
      width: 3px;
      height: 3px;
      background: #fff;
      border-radius: 50%;
      top: ${startY}%;
      right: 0;
      z-index: 1;
      pointer-events: none;
      box-shadow: 0 0 15px #64ffda, 0 0 30px #64ffda;
    `;

    const trail = document.createElement('div');
    trail.style.cssText = `
      position: absolute;
      width: ${trailLength}px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #64ffda 20%, #fff 50%, #ff6b9d 80%, transparent);
      top: 0;
      right: 0;
      border-radius: 2px;
      filter: blur(0.5px);
    `;

    shootingStar.appendChild(trail);
    document.body.appendChild(shootingStar);

    const endX = window.innerWidth + 300;
    const endY = Math.random() * 300 + 200;
    
    shootingStar.animate([
      { 
        transform: 'translateX(0) translateY(0)', 
        opacity: 1,
        filter: 'brightness(1)'
      },
      { 
        transform: `translateX(-${endX}px) translateY(${endY}px)`, 
        opacity: 0,
        filter: 'brightness(2)'
      }
    ], {
      duration: duration,
      easing: 'cubic-bezier(0.2, 0, 0.8, 1)'
    }).onfinish = () => {
      shootingStar.remove();
    };
  }, []);

  // Add cosmic dust effect
  const createCosmicDust = useCallback(() => {
    const dust = document.createElement('div');
    dust.className = 'cosmic-dust';
    
    dust.style.cssText = `
      position: fixed;
      width: ${Math.random() * 2 + 1}px;
      height: ${Math.random() * 2 + 1}px;
      background: ${getRandomStarColor()};
      border-radius: 50%;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      z-index: 1;
      pointer-events: none;
      opacity: ${Math.random() * 0.5 + 0.2};
      animation: floatDust ${Math.random() * 20 + 15}s linear infinite;
    `;
    
    document.body.appendChild(dust);
    
    setTimeout(() => {
      dust.remove();
    }, 25000);
  }, []);

  // Enhanced mouse interaction with debouncing
  const handleMouseMove = useCallback((e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    requestAnimationFrame(() => {
      const planets = document.querySelectorAll('.space-planet');
      planets.forEach((planet, index) => {
        const speed = (index + 1) * 0.02;
        const x = (mouseX - window.innerWidth / 2) * speed;
        const y = (mouseY - window.innerHeight / 2) * speed;
        planet.style.transform = `translate(${x}px, ${y}px)`;
      });

      // Add parallax effect to particles
      const particles = document.querySelectorAll('.particle');
      particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.01;
        const x = (mouseX - window.innerWidth / 2) * speed;
        const y = (mouseY - window.innerHeight / 2) * speed;
        particle.style.transform += ` translate(${x}px, ${y}px)`;
      });
    });
  }, []);

  useEffect(() => {
    // Initialize stars with delay to ensure DOM is ready
    const starTimer = setTimeout(createStars, 100);
    
    // Add mouse listener
    document.addEventListener('mousemove', handleMouseMove);
    
    // Create shooting stars periodically
    const shootingStarInterval = setInterval(createShootingStar, Math.random() * 3000 + 2000);
    
    // Create cosmic dust periodically
    const cosmicDustInterval = setInterval(createCosmicDust, Math.random() * 1000 + 500);

    return () => {
      clearTimeout(starTimer);
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(shootingStarInterval);
      clearInterval(cosmicDustInterval);
    };
  }, [createStars, handleMouseMove, createShootingStar, createCosmicDust]);

  return (
    <div className="space-background">
      {/* Infinite scrolling starfield layers */}
      <div className="starfield starfield-1"></div>
      <div className="starfield starfield-2"></div>
      <div className="starfield starfield-3"></div>
      
      {/* Dynamic starfield */}
      <div className="starfield-dynamic"></div>
      
      {/* Animated planets with enhanced effects */}
      <div className="space-planets">
        <div className="space-planet planet-1"></div>
        <div className="space-planet planet-2"></div>
        <div className="space-planet planet-3"></div>
        <div className="space-planet planet-4"></div>
      </div>
      
      {/* Enhanced floating particles */}
      <div className="space-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
      </div>
    </div>
  );
};

export default SpaceBackground;
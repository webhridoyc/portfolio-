import React, { useEffect } from 'react';
import '../styles/SpaceBackground.css';

const SpaceBackground = () => {
  useEffect(() => {
    // Create dynamic stars
    const createStars = () => {
      const starfield = document.querySelector('.starfield-dynamic');
      if (!starfield) return;
      
      const starCount = 150;
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
          position: absolute;
          width: ${Math.random() * 3 + 1}px;
          height: ${Math.random() * 3 + 1}px;
          background: ${getRandomStarColor()};
          border-radius: 50%;
          top: ${Math.random() * 100}%;
          left: ${Math.random() * 100}%;
          animation: twinkle ${Math.random() * 5 + 2}s ease-in-out infinite alternate;
          opacity: ${Math.random() * 0.8 + 0.3};
        `;
        starfield.appendChild(star);
      }
    };

    const getRandomStarColor = () => {
      const colors = ['#fff', '#64ffda', '#ff6b9d', '#ffd700', '#8a2be2'];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Create shooting stars periodically
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star-dynamic';
      shootingStar.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: #fff;
        border-radius: 50%;
        top: ${Math.random() * 50}%;
        right: 0;
        z-index: 1;
        pointer-events: none;
      `;

      const trail = document.createElement('div');
      trail.style.cssText = `
        position: absolute;
        width: ${Math.random() * 100 + 50}px;
        height: 1px;
        background: linear-gradient(90deg, transparent, #64ffda, transparent);
        top: 0;
        right: 0;
      `;

      shootingStar.appendChild(trail);
      document.body.appendChild(shootingStar);

      const duration = Math.random() * 2000 + 1500;
      shootingStar.animate([
        { transform: 'translateX(0) translateY(0)', opacity: 1 },
        { transform: `translateX(-${window.innerWidth + 200}px) translateY(${Math.random() * 200 + 100}px)`, opacity: 0 }
      ], {
        duration: duration,
        easing: 'linear'
      }).onfinish = () => {
        shootingStar.remove();
      };
    };

    // Mouse interaction
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      const planets = document.querySelectorAll('.space-planet');
      planets.forEach((planet, index) => {
        const speed = (index + 1) * 0.015;
        const x = (mouseX - window.innerWidth / 2) * speed;
        const y = (mouseY - window.innerHeight / 2) * speed;
        planet.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    // Initialize
    setTimeout(createStars, 100);
    
    // Add mouse listener
    document.addEventListener('mousemove', handleMouseMove);
    
    // Create shooting stars periodically
    const shootingStarInterval = setInterval(createShootingStar, Math.random() * 4000 + 3000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <div className="space-background">
      {/* Static starfield layers */}
      <div className="starfield starfield-1"></div>
      <div className="starfield starfield-2"></div>
      <div className="starfield starfield-3"></div>
      
      {/* Dynamic starfield */}
      <div className="starfield-dynamic"></div>
      
      {/* Animated planets */}
      <div className="space-planets">
        <div className="space-planet planet-1"></div>
        <div className="space-planet planet-2"></div>
        <div className="space-planet planet-3"></div>
        <div className="space-planet planet-4"></div>
      </div>
      
      {/* Floating particles */}
      <div className="space-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>
    </div>
  );
};

export default SpaceBackground;
// Enhanced space animation with dynamic effects
document.addEventListener('DOMContentLoaded', function() {
    const spaceContainer = document.querySelector('.space-container');
    
    // Create additional dynamic stars
    function createDynamicStars() {
        const starCount = 100;
        const starsContainer = document.createElement('div');
        starsContainer.className = 'dynamic-stars';
        starsContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        `;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'dynamic-star';
            star.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: ${getRandomStarColor()};
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: twinkleDynamic ${Math.random() * 5 + 2}s ease-in-out infinite alternate;
                opacity: ${Math.random() * 0.8 + 0.2};
            `;
            starsContainer.appendChild(star);
        }
        
        spaceContainer.appendChild(starsContainer);
    }
    
    function getRandomStarColor() {
        const colors = ['#fff', '#64ffda', '#ff6b9d', '#ffd700', '#8a2be2'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Create dynamic comet trails
    function createCometTrail() {
        const comet = document.createElement('div');
        comet.className = 'dynamic-comet';
        comet.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: #fff;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: 100%;
            box-shadow: 0 0 10px #64ffda;
        `;
        
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: absolute;
            width: ${Math.random() * 150 + 50}px;
            height: 1px;
            background: linear-gradient(90deg, transparent, #64ffda, transparent);
            top: 50%;
            right: 0;
            transform: translateY(-50%);
        `;
        
        comet.appendChild(trail);
        spaceContainer.appendChild(comet);
        
        // Animate comet
        const duration = Math.random() * 3000 + 2000;
        comet.animate([
            { transform: 'translateX(0) translateY(0)', opacity: 1 },
            { transform: `translateX(-${window.innerWidth + 200}px) translateY(${Math.random() * 100 - 50}px)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'linear'
        }).onfinish = () => {
            comet.remove();
        };
    }
    
    // Mouse interaction effects
    function addMouseEffects() {
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Parallax effect for planets
            const planets = document.querySelectorAll('.planet');
            planets.forEach((planet, index) => {
                const speed = (index + 1) * 0.02;
                const x = (mouseX - window.innerWidth / 2) * speed;
                const y = (mouseY - window.innerHeight / 2) * speed;
                planet.style.transform += ` translate(${x}px, ${y}px)`;
            });
        });
        
        // Click effect
        document.addEventListener('click', (e) => {
            createClickEffect(e.clientX, e.clientY);
        });
    }
    
    function createClickEffect(x, y) {
        const effect = document.createElement('div');
        effect.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 20px;
            height: 20px;
            border: 2px solid #64ffda;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            transform: translate(-50%, -50%);
        `;
        
        document.body.appendChild(effect);
        
        effect.animate([
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
            { transform: 'translate(-50%, -50%) scale(3)', opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out'
        }).onfinish = () => {
            effect.remove();
        };
    }
    
    // Add CSS for dynamic animations
    const dynamicStyles = document.createElement('style');
    dynamicStyles.textContent = `
        @keyframes twinkleDynamic {
            0% { opacity: 0.2; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.2); }
        }
        
        .dynamic-comet {
            animation: cometGlow 0.5s ease-in-out infinite alternate;
        }
        
        @keyframes cometGlow {
            0% { box-shadow: 0 0 10px #64ffda; }
            100% { box-shadow: 0 0 20px #64ffda, 0 0 30px #64ffda; }
        }
    `;
    document.head.appendChild(dynamicStyles);
    
    // Initialize all effects
    createDynamicStars();
    addMouseEffects();
    
    // Create periodic comet trails
    setInterval(createCometTrail, Math.random() * 3000 + 2000);
    
    // Add performance monitoring
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            } else {
                entry.target.style.animationPlayState = 'paused';
            }
        });
    });
    
    // Observe animated elements for performance
    document.querySelectorAll('.planet, .asteroid, .particle').forEach(el => {
        observer.observe(el);
    });
    
    // Button interaction
    const spaceButton = document.querySelector('.space-button');
    if (spaceButton) {
        spaceButton.addEventListener('click', () => {
            // Create explosion effect
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    createCometTrail();
                }, i * 100);
            }
        });
    }
});

// Resize handler for responsive adjustments
window.addEventListener('resize', () => {
    // Recalculate positions if needed
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        planet.style.transform = '';
    });
});
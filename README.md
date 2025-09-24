# Modern Portfolio Website

A modern, responsive portfolio website built with pure HTML5, CSS3, and vanilla JavaScript. Features a clean design, dark/light theme toggle, and full mobile responsiveness.

## 🌟 Features

### Design & User Experience
- **Modern, Clean Design**: Professional layout with contemporary styling
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle**: Seamless theme switching with persistent user preference
- **Smooth Animations**: CSS transitions and JavaScript-powered scroll animations
- **Interactive Elements**: Hover effects, button animations, and dynamic content

### Technical Features
- **Pure HTML5/CSS3/JavaScript**: No frameworks or dependencies required
- **CSS Grid & Flexbox**: Modern layout techniques for responsive design
- **CSS Variables**: Consistent theming and easy customization
- **Semantic HTML**: Proper HTML5 structure for accessibility and SEO
- **Mobile-First Design**: Optimized for mobile devices with progressive enhancement

### Sections
1. **Hero Section**: Professional introduction with call-to-action buttons
2. **About Section**: Personal bio with key highlights and statistics
3. **Skills Section**: Technology stack organized by category
4. **Projects Section**: Featured project showcases with hover effects
5. **Contact Section**: Interactive contact form with validation
6. **Footer**: Quick navigation and social media links

### JavaScript Functionality
- **Smooth Scrolling Navigation**: Seamless section-to-section navigation
- **Mobile Menu Toggle**: Collapsible mobile navigation
- **Theme Switcher**: Dark/light mode with localStorage persistence
- **Form Validation**: Real-time form validation with error handling
- **Scroll Animations**: Reveal animations on scroll
- **Interactive Project Cards**: Hover effects and overlay interactions

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, but recommended for full functionality)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/webhridoyc/portfolio-.git
   cd portfolio-
   ```

2. Serve the files using a local web server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser and navigate to `http://localhost:8000`

### Direct File Access
For basic viewing, you can also open `index.html` directly in your browser, though some features may be limited due to CORS restrictions.

## 📁 Project Structure

```
portfolio-/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet with CSS variables and responsive design
│   ├── js/
│   │   └── script.js      # JavaScript functionality and interactions
│   └── images/
│       ├── profile-placeholder.jpg     # Profile image placeholder
│       ├── project1-placeholder.jpg    # Project image placeholders
│       ├── project2-placeholder.jpg
│       ├── project3-placeholder.jpg
│       └── project4-placeholder.jpg
├── README.md              # Project documentation
└── .gitignore            # Git ignore file
```

## 🎨 Customization

### Updating Content
1. **Personal Information**: Edit the hero section in `index.html`
2. **About Section**: Update the bio and statistics
3. **Skills**: Modify the skills categories and items
4. **Projects**: Replace project cards with your own work
5. **Contact Info**: Update contact details and social links

### Styling
- **Colors**: Modify CSS variables in `:root` and `[data-theme="dark"]` selectors
- **Typography**: Update font families and sizes in CSS variables
- **Layout**: Adjust spacing, grid layouts, and responsive breakpoints
- **Animations**: Customize transition timings and effects

### Images
Replace placeholder images in the `assets/images/` directory:
- `profile-placeholder.jpg`: Your profile photo
- `project*-placeholder.jpg`: Screenshots of your projects

## 🌐 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly navigation
- Optimized typography and spacing
- Efficient mobile menu system
- Fast loading on mobile networks

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast mode support
- Reduced motion preferences respected
- Screen reader friendly

## 🔧 Performance Features

- Minimal dependencies (no external frameworks)
- Optimized CSS and JavaScript
- Efficient image handling
- Fast loading times
- Progressive enhancement

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or issues, please feel free to reach out or open an issue in the repository.

---

**Built with ❤️ and modern web technologies**
# 🚀 Cosmic Portfolio Website

A stunning space-themed portfolio website built with React and FastAPI, featuring immersive animations and cosmic visual effects.

## ✨ Features

- **Cosmic Theme**: Animated starfields, floating planets, and space particles
- **Interactive Animations**: Typewriter effects, hover animations, and glowing elements  
- **Modern Design**: Glassmorphism cards, gradient text, and smooth transitions
- **Fully Responsive**: Works perfectly on all devices
- **5 Complete Pages**: Home, About, Projects, Skills, Contact

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router DOM
- Custom CSS with animations
- Responsive design

### Backend (Ready for development)
- FastAPI
- MongoDB with Motor
- Pydantic models
- CORS enabled

## 🎨 Design Inspiration

This portfolio follows a space/cosmic theme with:
- **Color Palette**: Cyan (#64ffda) and Pink (#ff6b9d) accents on dark cosmic background
- **Typography**: Courier New monospace for futuristic feel
- **Animations**: Floating elements, glowing effects, and smooth transitions
- **Interactive**: Mouse parallax effects and dynamic particles

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8+
- MongoDB (for backend)

### Frontend Setup
```bash
cd frontend
yarn install
yarn start
```

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

## 📁 Project Structure

```
portfolio/
├── frontend/                 # React application
│   ├── public/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── styles/          # CSS stylesheets
│   │   └── data/           # Mock data
│   └── package.json
├── backend/                 # FastAPI application
│   ├── server.py           # Main server file
│   └── requirements.txt
└── README.md
```

## 🌟 Key Components

- **SpaceBackground**: Animated cosmic background with particles
- **Header**: Navigation with smooth transitions
- **Home**: Hero section with typewriter effect and floating orbs
- **About**: Interactive tabs with rotating cosmic avatar
- **Projects**: Filterable project gallery with hover effects
- **Skills**: Animated progress bars and service cards
- **Contact**: Functional contact form with cosmic styling
- **Footer**: Links and cosmic-themed footer design

## 🎭 Mock Data

The portfolio comes with comprehensive mock data including:
- Personal information and bio
- 6 sample projects with technologies and links
- Technical and creative skills with progress levels
- Professional experience timeline
- Testimonials and achievements
- Service offerings with pricing

## 🔧 Customization

To customize for your own use:

1. **Update Personal Info**: Edit `/frontend/src/data/mockData.js`
2. **Replace Projects**: Add your own project data and images
3. **Modify Skills**: Update technical and creative skills
4. **Change Colors**: Adjust CSS custom properties in `/frontend/src/App.css`
5. **Add Content**: Replace mock data with your real information

## 📱 Responsive Design

- **Desktop**: Full layout with animations and effects
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Optimized single-column layouts and navigation

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)
```bash
cd frontend
yarn build
# Upload build folder to your hosting service
```

### Full-Stack Deployment
- Frontend: Deploy to Netlify, Vercel, or GitHub Pages
- Backend: Deploy to Railway, Render, or Heroku
- Database: MongoDB Atlas for cloud database

## 📄 License

This project is open source and available under the MIT License.

## 🌟 Credits

Created with cosmic energy and modern web technologies. Features custom animations and space-themed design elements.

---

**Made with 💫 by Hridoy**

*Exploring the digital cosmos one line of code at a time* 🚀

export const portfolioData = {
  personal: {
    name: "Alex Nova",
    title: "Cosmic Digital Artist & Developer",
    tagline: "Crafting digital experiences from the depths of space",
    bio: "A passionate creator who blends the mysteries of the cosmos with cutting-edge technology. I specialize in creating immersive digital experiences that transport users to otherworldly realms. With expertise in both creative design and technical development, I bring celestial visions to life through code and artistry.",
    location: "Earth • Milky Way Galaxy",
    email: "contact@alexnova.space",
    phone: "+1 (555) COSMIC-1",
    resume: "/assets/resume-alex-nova.pdf",
    social: {
      github: "https://github.com/alexnova",
      linkedin: "https://linkedin.com/in/alexnova",
      twitter: "https://twitter.com/alexnova_space",
      instagram: "https://instagram.com/cosmic_alex",
      dribbble: "https://dribbble.com/alexnova"
    }
  },
  
  projects: [
    {
      id: 1,
      title: "Nebula Interactive Experience",
      category: "Web Development",
      description: "An immersive 3D space exploration platform that allows users to navigate through procedurally generated nebulae and star systems. Built with WebGL and Three.js for stunning visual effects.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Three.js", "WebGL", "Node.js", "MongoDB"],
      liveUrl: "https://nebula-experience.space",
      githubUrl: "https://github.com/alexnova/nebula-experience",
      featured: true,
      completion: "2024"
    },
    {
      id: 2,
      title: "Stellar Portfolio CMS",
      category: "Full Stack",
      description: "A cosmic-themed content management system for creative professionals. Features dynamic animations, particle effects, and seamless content editing capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Canvas API"],
      liveUrl: "https://stellar-cms.dev",
      githubUrl: "https://github.com/alexnova/stellar-cms",
      featured: true,
      completion: "2024"
    },
    {
      id: 3,
      title: "Cosmic Data Visualizer",
      category: "Data Visualization",
      description: "Transform complex datasets into beautiful space-themed visualizations. Interactive charts and graphs with asteroid belt animations and cosmic particle effects.",
      image: "/api/placeholder/600/400",
      technologies: ["D3.js", "Python", "Flask", "Chart.js"],
      liveUrl: "https://cosmic-data.viz",
      githubUrl: "https://github.com/alexnova/cosmic-data-viz",
      featured: false,
      completion: "2023"
    },
    {
      id: 4,
      title: "Galactic E-Commerce Platform",
      category: "E-Commerce",
      description: "A futuristic online marketplace with space-age design and smooth animations. Features include real-time inventory, cosmic checkout flow, and stellar user experience.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Stripe", "Prisma", "Tailwind CSS"],
      liveUrl: "https://galactic-store.com",
      githubUrl: "https://github.com/alexnova/galactic-store",
      featured: false,
      completion: "2023"
    },
    {
      id: 5,
      title: "Asteroid Mining Simulator",
      category: "Game Development",
      description: "An educational space mining game that teaches players about orbital mechanics and resource management while exploring the asteroid belt.",
      image: "/api/placeholder/600/400",
      technologies: ["Unity", "C#", "Blender", "Photon"],
      liveUrl: "https://asteroid-miner.game",
      githubUrl: "https://github.com/alexnova/asteroid-miner",
      featured: true,
      completion: "2023"
    },
    {
      id: 6,
      title: "Deep Space API",
      category: "Backend",
      description: "A comprehensive RESTful API for space exploration data, including real-time satellite tracking, astronomical events, and celestial object information.",
      image: "/api/placeholder/600/400",
      technologies: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
      liveUrl: "https://api.deepspace.dev",
      githubUrl: "https://github.com/alexnova/deepspace-api",
      featured: false,
      completion: "2022"
    }
  ],
  
  skills: {
    technical: [
      { name: "JavaScript/TypeScript", level: 95, category: "Frontend" },
      { name: "React/Next.js", level: 92, category: "Frontend" },
      { name: "Three.js/WebGL", level: 88, category: "3D Graphics" },
      { name: "Node.js/Express", level: 90, category: "Backend" },
      { name: "Python/FastAPI", level: 85, category: "Backend" },
      { name: "MongoDB/PostgreSQL", level: 87, category: "Database" },
      { name: "Canvas API", level: 89, category: "Graphics" },
      { name: "Docker/DevOps", level: 82, category: "Infrastructure" }
    ],
    creative: [
      { name: "UI/UX Design", level: 90, category: "Design" },
      { name: "3D Modeling", level: 85, category: "3D" },
      { name: "Animation", level: 88, category: "Motion" },
      { name: "Digital Art", level: 92, category: "Art" },
      { name: "Graphic Design", level: 87, category: "Design" },
      { name: "Video Editing", level: 80, category: "Media" }
    ]
  },
  
  services: [
    {
      title: "Cosmic Web Development",
      description: "Create stunning, interactive websites with space-age animations and stellar user experiences.",
      icon: "🌐",
      price: "Starting at $2,500"
    },
    {
      title: "3D Space Visualization",
      description: "Build immersive 3D experiences and visualizations that transport users to other worlds.",
      icon: "🎮",
      price: "Starting at $3,500"
    },
    {
      title: "Digital Art & Design",
      description: "Craft beautiful cosmic-themed designs, illustrations, and brand identities.",
      icon: "🎨",
      price: "Starting at $1,200"
    },
    {
      title: "Technical Consultation",
      description: "Get expert guidance on complex projects and cutting-edge web technologies.",
      icon: "💡",
      price: "$150/hour"
    }
  ],
  
  testimonials: [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Creative Director at Stellar Studios",
      company: "Stellar Studios",
      text: "Alex's work is absolutely otherworldly! The cosmic theme and attention to detail in every animation brought our vision to life beyond our wildest dreams.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "CTO at NebulaTech",
      company: "NebulaTech",
      text: "Working with Alex was like having a genius from the future on our team. The technical expertise combined with artistic vision is unmatched.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "Luna Blackwood",
      role: "Founder of Cosmic Ventures",
      company: "Cosmic Ventures",
      text: "Alex transformed our simple idea into a space-age masterpiece. The project exceeded all expectations and launched us into a new orbit of success.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    }
  ],
  
  experience: [
    {
      title: "Senior Cosmic Developer",
      company: "Galactic Innovations Inc.",
      period: "2022 - Present",
      description: "Lead development of space-themed applications and immersive web experiences. Specialized in WebGL implementations and real-time 3D rendering."
    },
    {
      title: "Creative Technologist",
      company: "Stellar Design Agency",
      period: "2020 - 2022",
      description: "Bridged the gap between design and development, creating innovative digital experiences with focus on animation and interactivity."
    },
    {
      title: "Frontend Space Engineer",
      company: "Nebula Dynamics",
      period: "2018 - 2020",
      description: "Developed responsive, animated websites and applications. Pioneered the integration of space-themed design elements with modern web technologies."
    }
  ],
  
  achievements: [
    "🏆 Winner - Cosmic Web Design Awards 2024",
    "🌟 Featured in Space Tech Magazine as 'Developer to Watch'",
    "🚀 Launched 50+ stellar projects across the galaxy",
    "💫 10,000+ hours of space-age development experience",
    "🌍 Collaborated with teams across multiple star systems"
  ]
};
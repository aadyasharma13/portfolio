export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'BLU - Medical Recommendation System',
    desc: 'This is a Flask-based Disease Prediction Web App that utilizes multiple machine learning algorithms to predict diseases based on user-reported symptoms. It provides precautions, medications, diet recommendations, and workouts to help manage the predicted condition effectively.',
    subdesc:
      '',
    href: 'https://github.com/aadyasharma13/BLU-Medical-Assistant',
    texture: 'public/textures/project/blu.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Jupyter',
        path: 'public/assets/jupyter.png',
      },
      {
        id: 3,
        name: 'Python',
        path: 'public/assets/python.png',
      },
      {
        id: 4,
        name: 'Flask',
        path: 'public/assets/flask.jpeg',
      },
    ],
  },
  {
    title: 'AI Career Coach – Smart Resume Analyzer',
    desc: 'AI Career Coach is a Flask-based web application that leverages advanced language models (Claude or OpenAI) to automatically analyze resumes and provide professional summaries. It extracts key information such as career objectives, skills, experience, education, and achievements to help job seekers optimize their resumes for career success.',
    subdesc:
      '',
    href: 'https://github.com/aadyasharma13/AI-Career-Coach',
    texture: 'public/textures/project/comingsoon.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'public/assets/hugginface.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'public/assets/langchain.png',
      },
      {
        id: 3,
        
        name: 'TypeScript',
        path: 'public/assets/claude.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: 'public/assets/python.png',
      },
    ],
  },
  {
    title: 'BrickChain',
    desc: 'A decentralized platform that enables fractional ownership of real estate using blockchain technology. Designed smart contracts for property tokenization to enhance liquidity and remove traditional barriers such as high capital requirements and complex paperwork, making real estate investment smarter, scalable, and more accessible.',
    subdesc:
      'Won 1st place at the Web3 BUIDL-a-thon organized by MU Blockchain Club, sponsored by Kalki Labs, Hyderabad DAO, Aleph Zero, and Hashira',
    href: 'https://github.com/aadyasharma13/brick-chain.git',
    texture: 'public/textures/project/WhatsApp Video 2025-05-18 at 20.16.08.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: 'public/assets/javaaa.png',
      },
      {
        id: 4,
        name: 'Solidity',
        path: 'public/assets/solidity.png',
      },
    ],
  },
    
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'I-Win',
    pos: 'Founder',
    duration: 'Jan 2025 - Present',
    title: "We are a community of patients, caregivers and medical professionals that come together to share their journey and experiences",
    icon: 'public 2/textures/desk/image.jpg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Monitra Healthcare',
    pos: 'Devops Intern',
    duration: 'June 2024 - August 2024',
    title: "Redesigned the Arrhythmia Templates Generator by modularizing the Python code and transitioning core components to Go, resulting in faster output. Integrated AWS for efficient data handling and developed visualization tools (sales, heart rate, battery levels) using Go, Python, and D3.js. Improved UX with intuitive, color-coded graphics and documented the clinical reporting dashboard in collaboration with a senior engineer.",
    icon: 'public/assets/monitra.jpeg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Mahindra Alumni Relations Committee',
    pos: 'Media and Content Coordinator',
    duration: 'November 2024 - Present',
    title: "Designed and strategized alumni engagement content for social media, leveraging creative writing and design skills to develop impactful posts. Utilized tools like Canva and AI-based platforms to create compelling visuals and narratives that fostered stronger alumni connections.",
    icon: 'public/assets/marc.jpeg',
    animation: 'salute',
  },
];


export const myArtworksVertical = [
  {
    title: 'Artwork Title 1',
    description: 'This is a brief description of what this artwork represents or how it was created.',
    image: 'public/paintings /art1.jpeg',
  },
  {
    title: 'Artwork Title 2',
    description: 'This is a brief description of what this artwork represents or how it was created.',
    image: 'public/paintings /art13.jpeg',
  },
  {
    title: 'Artwork Title 3',
    description: 'This is a brief description of what this artwork represents or how it was created.',
    image: 'public/paintings /art2.jpeg',
  },
  {
    title: 'Artwork Title 4',
    description: 'This is a brief description of what this artwork represents or how it was created.',
    image: 'public/paintings /art9.jpeg',
  },
  {
    title: 'Artwork Title 5',
    description: 'This is a brief description of what this artwork represents or how it was created.',
    image: 'public/paintings /art8.jpeg',
  },
  {
    title: 'Artwork Title 2',
    description: 'This is a brief description of what this artwork represents or how it was created.',
    image: 'public/paintings /art4.jpeg',
  },
  {
    title: 'Artwork Title 5',
    description: 'This is a brief description of what this artwork represents or how it was created.',
    image: 'public/paintings /art5.jpeg',
  },
];

export const myArtworksHorizontal = [
  {
    title: 'Artwork Title 1',
    description: 'This is a brief description of what this artwork represents or how it was created.',
    image: 'public/paintings /art6.jpeg',
  },
  {
    title: 'Artwork Title 2',
    description: 'This is a brief description of what this artwork represents or how it was created.',
    image: 'public/paintings /art3.jpeg',
  },
  
  {
    title: 'Artwork Title 3',
    description: 'This is a brief description of what this artwork represents or how it was created.',
    image: 'public/paintings /art10.jpeg',
  },
  {
    title: 'Artwork Title 4',
    description: 'This is a brief description of what this artwork represents or how it was created.',
    image: 'public/paintings /art11.jpeg',
  },
  {
    title: 'Artwork Title 5',
    description: 'This is a brief description of what this artwork represents or how it was created.',
    image: 'public/paintings /art12.jpeg',
  },
];
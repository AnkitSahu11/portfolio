import { Home, UserRound, BriefcaseBusiness, Code2, GraduationCap, Award, Mail, MessageCircle, Terminal } from 'lucide-react';

export const profile = {
  name: 'Ankit Sahu',
  title: 'MERN Stack Developer',
  location: 'Jabalpur, Madhya Pradesh',
  email: 'ankitsahu41190@gmail.com',
  phone: '+91 9171899810',
  linkedin: 'https://www.linkedin.com/in/ankit-sahu-b40b0a337',
  github: 'https://github.com/AnkitSahu11',
};

export const navigation = [
  ['Home', 'home', Home], ['About', 'about', UserRound],
  ['Projects', 'projects', BriefcaseBusiness], ['Skills', 'skills', Code2],
  ['Experience', 'experience', Terminal], ['Education', 'education', GraduationCap],
  ['Certifications', 'certifications', Award], ['Contact', 'contact', Mail],
  ['Connect', 'connect', MessageCircle],
];

export const projects = [
  {
    number: '01', name: 'PixSort', subtitle: 'Intelligent Photo Culling & Shortlisting Web App',
    description: 'A full-stack photo culling application designed to streamline high-volume photography workflows through automated image analysis and a fast contact-sheet review experience.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Jimp', 'face-api.js', 'TensorFlow.js'],
    bullets: [
      'Blur detection using Variance of Laplacian with adaptive mean–standard deviation thresholding.',
      'Near-duplicate grouping using hashing, Hamming Distance and Union-Find.',
      'Browser-based facial landmark and Eye Aspect Ratio analysis to flag closed eyes.',
      'Darkroom-style review with keyboard actions, duplicate resolution and ZIP/CSV exports.',
    ],
    github: 'https://github.com/AnkitSahu11/pix-sort',
  },
  {
    number: '02', name: 'URL Shortener', subtitle: 'MERN Stack Application',
    description: 'A full-stack application that converts long URLs into compact, shareable links with persistent URL mapping and backend-powered redirection.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    bullets: [
      'Built REST APIs for URL creation, storage, retrieval and redirection.',
      'Used MongoDB for persistent URL mapping and data management.',
      'Connected a React frontend to Express and Node.js backend services.',
    ],
    github: 'https://github.com/AnkitSahu11/URL_Shortner',
  },
];

export const skillGroups = [
  { title: 'Languages', items: ['Java', 'Python', 'JavaScript (ES6+)', 'SQL'] },
  { title: 'Frontend', items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Bootstrap'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'EJS', 'RESTful APIs', 'JWT Authentication'] },
  { title: 'Database', items: ['MongoDB', 'Mongoose'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Cursor'] },
  { title: 'Core Concepts', items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Computer Networks'] },
];

export const internships = [
  {
    company: 'Cisco AICTE Virtual Internship Program', role: 'Artificial Intelligence', date: 'Jun 2026 — Aug 2026',
    points: [
      'Completed a virtual AI internship and developed NetSage AI, an AI-based network troubleshooting project.',
      'Explored AI-assisted root cause analysis, networking fault detection and Python-based rule checking.',
      'Studied VLAN, DHCP, DNS, routing, ACL, NAT and responsible AI practices.',
    ],
  },
  {
    company: 'Cognifyz Technologies', role: 'Web Development Intern', date: 'Nov 2025 — Dec 2025',
    points: [
      'Developed server-side web applications using Node.js, Express.js and EJS templates.',
      'Implemented JWT-based authentication and authorization to secure API endpoints.',
      'Built responsive interfaces using CSS3 and Bootstrap, with dynamic DOM interactions.',
    ],
  },
];

export const education = [
  { date: '2023 — 2027', degree: 'B.Tech — Computer Science and Engineering', institute: 'Shri Ram Group of Institutes, Jabalpur', score: 'CGPA · 7.36 / 10' },
  { date: '2022', degree: 'Senior Secondary — Class XII', institute: 'Govt. Higher Secondary School, Imaliya · NCERT', score: '77.4%' },
  { date: '2020', degree: 'Secondary — Class X', institute: 'Govt. Higher Secondary School, Imaliya · NCERT', score: '84.0%' },
];

export const certifications = [
  'NPTEL — Fundamentals of Machine Learning',
  'IBM — Artificial Intelligence Fundamentals',
  'Cisco Networking Academy — Introduction to Cybersecurity',
  'AWS Academy — Cloud Foundations',
  'Hack SRIT 2025 — Participant, Shri Ram Institute of Technology, Jabalpur',
];

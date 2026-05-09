// ─── Portfolio Data ────────────────────────────────────────────────────────────

export const personalInfo = {
  name: 'Sylvia M',
  title: 'Aspiring Software Developer',
  subtitle: 'Computer Science Student',
  tagline: 'Ambitious CS Graduate with Strong Programming Skills and a Passion for Technology',
  bio: `I'm a first-year Computer Science student at Karunya Institute of Technology and Sciences,
driven by a deep curiosity for how technology shapes the world. With a solid foundation in
programming and a passion for building meaningful software, I aim to craft elegant, impactful
solutions that bridge innovation and real-world needs.`,
  phone: '+91 9677888987',
  email: 'm.sylvia212418@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sylvia-m-255033379',
  github: 'https://github.com/msylvia212418-coder',
  resumeUrl: 'https://drive.google.com/drive/folders/1fX6ornYSGzTa2V3PrSG8R4YbI14Wq-S-?usp=sharing',
};

export const education = {
  institution: 'Karunya Institute of Technology and Sciences',
  degree: 'BTech — Computer Science Engineering',
  duration: '2025 – 2029',
  cgpa: '8.5 / 10',
  status: 'First Year Student',
};

export const skillCategories = [
  {
    category: 'Programming Languages',
    icon: '⌨️',
    skills: [
      { name: 'Python',      level: 88 },
      { name: 'C',           level: 80 },
      { name: 'C++',         level: 75 },
      { name: 'JavaScript',  level: 82 },
    ],
  },
  {
    category: 'Backend & Databases',
    icon: '🗄️',
    skills: [
      { name: 'Node.js',  level: 76 },
      { name: 'Express',  level: 72 },
      { name: 'MySQL',    level: 70 },
      { name: 'MongoDB',  level: 68 },
    ],
  },
  {
    category: 'Web Development',
    icon: '🌐',
    skills: [
      { name: 'HTML',  level: 95 },
      { name: 'CSS',   level: 90 },
      { name: 'React', level: 83 },
    ],
  },
  {
    category: 'Tools & Concepts',
    icon: '🛠️',
    skills: [
      { name: 'Git',       level: 80 },
      { name: 'VS Code',   level: 92 },
      { name: 'Linux',     level: 70 },
      { name: 'Flutter',   level: 60 },
      { name: 'OOP',       level: 85 },
      { name: 'REST APIs', level: 78 },
      { name: 'IoT',       level: 65 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'CoreWars',
    subtitle: 'Gamified CPU Scheduling Simulator',
    description:
      'An interactive, gamified CPU scheduling simulator that visualises process scheduling algorithms in real time. Features live Gantt charts, performance metrics, and a competitive leaderboard — turning OS theory into an engaging hands-on experience.',
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Firebase', 'Recharts'],
    github: 'https://github.com/msylvia212418-coder/CoreWars.git',
    demo: '#',
    color: '#7C3AED',
  },
  {
    id: 2,
    title: 'PrepTitan',
    subtitle: 'AI Mock Interview Platform',
    description:
      'An AI-powered mock interview platform offering personalised question sets, real-time feedback, and post-session performance analytics. Integrates Gemini and LLaMA for natural conversation flow and actionable coaching.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini', 'LLaMA', 'JWT'],
    github: 'https://github.com/msylvia212418-coder/PrepTitan.git',
    demo: '#',
    color: '#9D6FE8',
  },
  {
    id: 3,
    title: 'Quicko',
    subtitle: 'Smart IoT Retail Kiosk',
    description:
      'A voice-controlled smart retail kiosk powered by Arduino and IoT sensors. Features contactless interaction, real-time inventory sync, and cloud-based analytics — reimagining the modern retail checkout experience.',
    tech: ['Kotlin', 'Jetpack Compose', 'Arduino', 'IoT Sensors', 'Cloud Integration'],
    github: 'https://github.com/msylvia212418-coder/smart_kiosk.git',
    demo: '#',
    color: '#C084FC',
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Red Hat Certified Training',
    issuer: 'Red Hat',
    icon: '🎓',
    color: '#EE0000',
  },
  {
    id: 2,
    title: 'HTML, CSS & JavaScript',
    issuer: 'CISCO',
    icon: '🌐',
    color: '#1BA0D7',
  },
  {
    id: 3,
    title: 'MATLAB Certification',
    issuer: 'MathWorks',
    icon: '📊',
    color: '#E9D8A6',
  },
  {
    id: 4,
    title: 'Internet of Things (IoT)',
    issuer: 'CISCO',
    icon: '📡',
    color: '#7C3AED',
  },
];

export const achievements = [
  {
    id: 1,
    title: 'Hackathon Participant',
    description:
      'Competed in national-level hackathons, collaborating in cross-functional teams to design and prototype innovative solutions under tight time constraints.',
    icon: '🏆',
    year: '2025',
  },
];

// ════════════════════════════════════════════════════════════════════
//  EDIT YOUR PORTFOLIO HERE  —  this one file controls all the text.
//  After saving, the site updates automatically (if `npm run dev` is running).
//   • Profile picture → replace  client/public/images/sat.png  (keep the name)
//   • Resume PDF      → replace  client/public/resume.pdf
//  Full guide: see  EDIT-YOUR-PORTFOLIO.md  in the project root.
// ════════════════════════════════════════════════════════════════════

// ── 1. BASIC INFO ────────────────────────────────────────────────────
export const profile = {
  name: 'Satyam Aggarwal',
  title: 'Software Developer',
  roles: ['Software Developer', 'Full-Stack (MERN) Developer', 'MCA Student', 'Problem Solver'],
  tagline:
    'Motivated MCA student and full-stack developer who turns real-world problems into clean, innovative software with Java, React, Node.js and SQL.',
  location: 'Greater Noida, India',
  email: 'satyam.aggarwal1t2@gmail.com',
  phone: '+91 7817991391',
  resumeUrl: '/resume.pdf',
  avatar: '/images/sat.png',
}

// ── 2. SOCIAL LINKS ──  icon: 'github' | 'linkedin' | 'mail'
export const socials = [
  { label: 'GitHub', url: 'https://github.com/Satyam123324', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/satyam-web222', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:satyam.aggarwal1t2@gmail.com', icon: 'mail' },
]

// ── 3. ABOUT ──  each string is one paragraph
export const about = [
  'I’m Satyam Aggarwal, a Software Developer and MCA student based in Greater Noida, India. I have a strong foundation in Java, SQL, and full-stack web development with React.js, Node.js and MySQL, and I love solving real-world problems through clean, innovative software.',
  'Backed by hands-on experience building full-stack applications and an industry-oriented internship, I enjoy taking a problem from a rough idea to a working product — and I’m always eager to keep learning and growing as a developer.',
]

export const stats = [
  { value: '2', label: 'Internships\ncompleted' },
  { value: '6', label: 'Full-stack\nprojects' },
  { value: '7.98', label: 'MCA CGPA\n(Sem 1 & 2)' },
]

// ── 4. SKILLS ──  level 0–100; icon path or null for a letter badge
export const skills = [
  { name: 'Java', level: 82, icon: null, group: 'Languages' },
  { name: 'C', level: 72, icon: '/images/c.png', group: 'Languages' },
  { name: 'JavaScript', level: 82, icon: '/images/js.png', group: 'Languages' },
  { name: 'React.js', level: 80, icon: null, group: 'Frontend' },
  { name: 'HTML5', level: 90, icon: '/images/html.png', group: 'Frontend' },
  { name: 'CSS3', level: 85, icon: '/images/css.png', group: 'Frontend' },
  { name: 'Node.js', level: 75, icon: null, group: 'Backend' },
  { name: 'Express', level: 72, icon: null, group: 'Backend' },
  { name: 'MySQL', level: 78, icon: null, group: 'Database' },
  { name: 'MongoDB', level: 70, icon: null, group: 'Database' },
  { name: 'DSA / OOP / DBMS', level: 74, icon: '/images/dsa.png', group: 'Core CS' },
  { name: 'Git & GitHub', level: 80, icon: null, group: 'Tools' },
]

export const softSkills = ['Leadership', 'Team Collaboration', 'Time Management', 'Analytical & Logical Thinking']

// ── 5. EDUCATION ──
export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    period: '2025 — 2027',
    status: 'Pursuing',
    institution: 'G.L. Bajaj Institute of Technology & Management, Greater Noida',
    score: 'CGPA 7.98 (Sem 1: 7.74 · Sem 2: 8.22)',
    detail: 'Focusing on full-stack development, data structures, and software engineering fundamentals.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2022 — 2025',
    status: 'Completed',
    institution: 'Silver Bells Institute for Higher Education, Shamli',
    score: '70.83%',
    detail: 'Built a strong foundation in programming, web development, databases, and core computer science.',
  },
]

// ── 6. EXPERIENCE (internships) ──
export const experience = [
  {
    role: 'Virtual Intern — Springboard 7.0',
    company: 'Infosys Springboard',
    period: 'Jun 2026 — Aug 2026',
    current: true,
    points: [
      'Selected for the 8-week industry-oriented internship focused on real-world software development.',
      'Developed the Organizational Knowledge Gap Intelligence Platform to identify and bridge team knowledge gaps.',
      'Built intelligent modules to map employee skills, detect missing competencies, and recommend targeted learning.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Unified Mentor',
    period: 'Jul 2024 — Aug 2024',
    current: false,
    points: [
      'Developed a Personal Portfolio Website to showcase profile, skills, projects, and contact details.',
      'Built a Gym Management System with member registration, attendance tracking, and subscription management.',
    ],
  },
]

// ── 7. CERTIFICATIONS ──
export const certifications = [
  { title: 'Building LLM Applications with Prompt Engineering', issuer: 'NVIDIA · Jul 2026', icon: '🧠' },
  { title: 'Java Foundation', issuer: 'Infosys Springboard', icon: '☕' },
  { title: 'Be10x AI Workshop', issuer: 'Hands-on with AI tools', icon: '🤖' },
]

// ── 8. PROJECTS ──  featured:true makes a card wider; use '#' for missing links
export const projects = [
  {
    title: 'GiftSoul — Emotion-Based Gifting Marketplace',
    description:
      'A full-stack gifting marketplace connecting gift creators with buyers, with an AI-powered gift finder, pool-funded group gifting, reviews, and Razorpay payments. Built with Next.js + Supabase and a 3D animated gift-box hero. Live and deployed.',
    tags: ['Next.js', 'Supabase', 'AI (Groq)', 'Razorpay'],
    github: 'https://github.com/Satyam123324/GiftSoul-Emotion-based-gifting-',
    demo: 'https://gift-soul-emotion-based-gifting-fw6.vercel.app/',
    featured: true,
  },
  {
    title: 'PhotoConnect — Photography Booking Platform',
    description:
      'MERN-stack platform to discover and book photographers, with JWT authentication, Cloudinary photo uploads, portfolios, and a booking dashboard. Crafted an “Editorial Noir” UI with 3D scroll and lens-zoom animations.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary'],
    github: 'https://github.com/Satyam123324/Photography-website',
    demo: '#',
    featured: true,
  },
  {
    title: 'Knowledge Gap Intelligence Platform',
    description:
      'A full-stack platform (Infosys Springboard) that maps employee skills, detects missing competencies across teams, and recommends targeted learning. Spring Boot + React with JWT and Google/GitHub OAuth login, containerised with Docker.',
    tags: ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'OAuth', 'Docker'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'AI Review Analyzer',
    description:
      'An NLP web app that takes any text or review and returns sentiment, a concise summary, and detected emotions using pre-trained models — no training required. Built with Python and Flask.',
    tags: ['Python', 'Flask', 'NLP', 'Transformers'],
    github: 'https://github.com/Satyam123324/investai-analyst',
    demo: '#',
    featured: false,
  },
  {
    title: 'Gym Management System',
    description:
      'A management system with member registration, attendance tracking, subscription management, and clean data handling, built during my Unified Mentor internship.',
    tags: ['React', 'Node.js', 'MySQL'],
    github: 'https://github.com/Satyam123324/Gym-Management-System',
    demo: '#',
    featured: false,
  },
  {
    title: '3D Developer Portfolio',
    description:
      'This website — a 3D-animated portfolio with a live WebGL background, glassmorphism UI, an AI assistant, and an Express + MongoDB contact backend.',
    tags: ['React', 'Three.js', 'Node', 'MongoDB'],
    github: 'https://github.com/Satyam123324/Portfolio-project',
    demo: '#',
    featured: false,
  },
]

// ════════════════════════════════════════════════════════════════════
//  EDIT YOUR PORTFOLIO HERE  —  this one file controls all the text.
//  After saving, the site updates automatically (if `npm run dev` is running).
//
//  Quick guide:
//   • Profile picture → replace  client/public/images/sat.png  (keep the name)
//   • Resume PDF      → put your file at  client/public/resume.pdf
//   • Everything else → just edit the text between the quotes below.
//  Full step-by-step: see  EDIT-YOUR-PORTFOLIO.md  in the project root.
// ════════════════════════════════════════════════════════════════════

// ── 1. BASIC INFO ────────────────────────────────────────────────────
export const profile = {
  name: 'Satyam Aggarwal',
  // The rotating job titles that type out in the hero. Add/remove freely.
  roles: ['Full-Stack Developer', 'MERN Stack Developer', 'MCA Student', 'Problem Solver'],
  tagline:
    'BCA graduate and MCA student who loves turning ideas into clean, fast web applications.',
  location: 'India',
  email: 'satyam.aggarwal1t2@gmail.com',
  resumeUrl: '/resume.pdf',      // put your resume at client/public/resume.pdf
  avatar: '/images/sat.png',     // replace client/public/images/sat.png with your photo
}

// ── 2. SOCIAL LINKS ──────────────────────────────────────────────────
// icon can be: 'github', 'linkedin', or 'mail'
export const socials = [
  { label: 'GitHub', url: 'https://github.com/Satyam123324', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:satyam.aggarwal1t2@gmail.com', icon: 'mail' },
]

// ── 3. ABOUT SECTION ─────────────────────────────────────────────────
// Each string is one paragraph. Add or remove paragraphs as you like.
export const about = [
  'I’m Satyam Aggarwal, a full-stack developer based in India. I completed my BCA (2020–2025) and I’m currently pursuing my MCA (2025–2027), where I focus on the MERN stack, data structures, and building software that’s clean, responsive, and genuinely useful.',
  'I enjoy taking a problem from a rough idea all the way to a working product — writing the frontend, wiring up the backend and database, and polishing the details in between. I’m always learning something new and looking for opportunities to grow as a developer.',
]

// The three little stats shown under the About text.
export const stats = [
  { value: '2', label: 'Degrees\nBCA + MCA' },
  { value: '10+', label: 'Technologies\n& tools' },
  { value: '∞', label: 'Curiosity to\nkeep building' },
]

// ── 4. SKILLS ────────────────────────────────────────────────────────
// level = 0–100 (the progress bar). icon = image path, or null for a letter badge.
export const skills = [
  { name: 'HTML5', level: 90, icon: '/images/html.png', group: 'Frontend' },
  { name: 'CSS3', level: 85, icon: '/images/css.png', group: 'Frontend' },
  { name: 'JavaScript', level: 82, icon: '/images/js.png', group: 'Frontend' },
  { name: 'React', level: 75, icon: null, group: 'Frontend' },
  { name: 'Node.js', level: 70, icon: null, group: 'Backend' },
  { name: 'Express', level: 70, icon: null, group: 'Backend' },
  { name: 'MongoDB', level: 68, icon: null, group: 'Backend' },
  { name: 'Python', level: 72, icon: '/images/python.png', group: 'Languages' },
  { name: 'C', level: 70, icon: '/images/c.png', group: 'Languages' },
  { name: 'DSA', level: 65, icon: '/images/dsa.png', group: 'Core CS' },
  { name: 'Git & GitHub', level: 78, icon: null, group: 'Tools' },
]

// ── 5. EDUCATION ─────────────────────────────────────────────────────
// status: use 'Pursuing' for the current one (shows a highlighted badge).
export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    period: '2025 — 2027',
    status: 'Pursuing',
    detail:
      'Deepening full-stack development, data structures, and software engineering fundamentals.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2020 — 2025',
    status: 'Completed',
    detail:
      'Built a strong foundation in programming, web development, databases, and computer science core concepts.',
  },
]

// ── 6. PROJECTS ──────────────────────────────────────────────────────
// featured: true makes a card span wider. Use '#' for a link you don't have yet.
export const projects = [
  {
    title: 'Developer Portfolio (MERN)',
    description:
      'This very website — a full-stack portfolio with a React frontend and an Express + MongoDB backend that stores contact messages.',
    tags: ['React', 'Node', 'Express', 'MongoDB'],
    github: 'https://github.com/Satyam123324/Portfolio-project',
    demo: '#',
    featured: true,
  },
  {
    title: 'Task Manager App',
    description:
      'A CRUD web app to create, track, and complete tasks with priorities and due dates. (Replace with your real project.)',
    tags: ['JavaScript', 'Node', 'MongoDB'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description:
      'Responsive dashboard that fetches live weather from a public API and shows forecasts. (Replace with your real project.)',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    github: '#',
    demo: '#',
    featured: false,
  },
]

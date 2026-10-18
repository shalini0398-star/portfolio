// All portfolio content lives here. Edit this file to personalise the site.
export const profile = {
  name: "Shalini Jha",
  role: "Full-Stack Developer",
  tagline: "I build fast, accessible and responsive web apps with React.",
  email: "shalini.jha@example.com",
  location: "Mumbai, India",
  github: "https://github.com/shalini0398-star",
  linkedin: "https://www.linkedin.com/in/shalinijha",
  about: [
    "I am a fullstack developer who enjoys turning ideas into clean, usable interfaces. I focus on React, component-driven design and performance.",
    "Recently I have built a movie search app, a themed UI using the Context API and a shopping cart managed with Context and reducers. I like learning by shipping small, well-tested projects.",
  ],
  facts: [
    { label: "Projects", value: "5+" },
    { label: "Technologies", value: "10" },
    { label: "Cups of coffee", value: "∞" },
  ],
};

export const projects = [
  { title: "Movie Search", image: "images/project-movies.svg", tags: ["React", "JavaScript", "CSS"],
    description: "Search movies by title, actor or genre and open a detail view with cast, rating and plot.",
    demo: "#", code: "https://github.com/your-username/movie-search" },
  { title: "Shopping Cart", image: "images/project-cart.svg", tags: ["React", "Context API", "useReducer"],
    description: "E-commerce cart with add, remove and quantity updates managed by a reducer and shared via Context.",
    demo: "#", code: "https://github.com/your-username/shopping-cart" },
  { title: "Theme Switcher", image: "images/project-theme.svg", tags: ["React", "Context API", "CSS Variables"],
    description: "Light and dark themes toggled through a ThemeProvider, remembered between visits.",
    demo: "#", code: "https://github.com/your-username/theme-switcher" },
  { title: "Task Manager", image: "images/project-tasks.svg", tags: ["React", "Hooks", "LocalStorage"],
    description: "Plan your day with add, complete and filter features. Data is saved in the browser.",
    demo: "#", code: "https://github.com/your-username/task-manager" },
];

export const skills = [
  { group: "Frontend", items: [
    { name: "React", level: 90 }, { name: "JavaScript (ES6+)", level: 88 },
    { name: "HTML5 & CSS3", level: 92 }, { name: "Responsive Design", level: 90 } ] },
  { group: "Tools", items: [
    { name: "Git & GitHub", level: 85 }, { name: "Vite / npm", level: 80 },
    { name: "Netlify / Vercel", level: 78 }, { name: "Testing & Debugging", level: 72 } ] },
];

export const resume = {
  file: "resume.pdf",
  experience: [
    { title: "Front-End Developer Intern", place: "Example Tech Pvt. Ltd.", period: "2025 - Present",
      points: ["Built reusable React components used across 3 internal dashboards.", "Cut page load time by 35% using code splitting and image optimisation."] },
    {
      points: ["Delivered responsive websites for small local businesses.", "Handled hosting, domains and SSL setup for clients."] },
  ],
  education: [
    { title: "B.Sc. Information Technology", place: "University of Mumbai", period: "2022 - 2025" },
  ],
};

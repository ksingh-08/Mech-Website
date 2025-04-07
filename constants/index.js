import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  research,
  industry,
  facilities,
  welding,
  future,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Why Welding Research Matters",
    icon: welding,
    iconBg: "white",
    points: [
      "<strong>Welding is the backbone</strong> of modern infrastructure—powering sectors like <strong>aerospace, shipbuilding, railways, and defense</strong>. At <strong>LNMIIT</strong>, our research ensures <strong>structural integrity, improved efficiency</strong>, and <strong>cutting-edge innovations</strong> to meet the growing industrial demands of the 21st century."
    ],
  },
  {
    title: "Our Research Focus Areas",
    icon: research,
    iconBg: "white",
    points: [
      "We work at the <strong>intersection of innovation and practicality</strong>, tackling real-world challenges across domains like:",
      "<strong>Advanced Welding Techniques</strong>: Friction Stir Welding, Laser Welding, Hybrid Welding.",
      "<strong>AI-Powered Welding Automation</strong> for unmatched <strong>precision and productivity</strong>.",
      "<strong>Failure Analysis & Material Testing</strong> to ensure safety in high-stakes applications.",
      "<strong>Thermal Modelling & Simulation</strong> for predicting weld behavior and optimizing processes.",
    ],
  },
  {
    title: "Collaboration with Industry Leaders",
    icon: industry,
    iconBg: "white",
    points: [
      "We collaborate with <strong>DRDO, HAL, Indian Railways, and major Shipyards</strong> to develop <strong>next-generation welding technologies</strong>.",
      "<strong>Outcome-driven innovation</strong> has led to the creation of <strong>stronger, lighter</strong>, and <strong>more reliable structures</strong>, enhancing safety and cost-effectiveness across sectors.",
    ],
  },
  {
    title: "World-Class Infrastructure at LNMIIT",
    icon: facilities,
    iconBg: "white",
    points: [
      "<strong>LNMIIT boasts state-of-the-art labs</strong> equipped with:",
      "<strong>Robotic Welding Arms</strong>",
      "<strong>High-Precision Laser Systems</strong>",
      "<strong>Thermal Imaging for Real-Time Monitoring</strong>",
      "<strong>Advanced Material Characterization Tools</strong>",
      "Our setup supports <strong>industrial-grade testing, training, and prototyping</strong>, bridging the gap between research and real-world application.",
    ],
  },
  {
    title: "Shaping the Future of Welding",
    icon: future,
    iconBg: "white",
    points: [
      "We are pioneering in areas like:",
      "<strong>Green Welding Technologies</strong> for a sustainable future",
      "<strong>Smart Sensors</strong> for live defect detection and process control",
      "<strong>AI & Machine Learning</strong> for predictive maintenance and quality assurance",
      "At LNMIIT, we offer <strong>industrial consultancy, sponsored research, and hands-on training</strong>, empowering the next generation of welding innovators.",
    ],
  },
];



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

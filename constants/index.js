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
    title: "Why Welding Research at LNMIIT?",
    icon: welding,
    iconBg: "white",
    points: [
      "Welding is critical to sectors that demand <strong>durability, reliability, and precision</strong>. At LNMIIT, our research is geared toward supporting applications where <strong>structural integrity and process consistency</strong> are non-negotiable.",
      "Our goal is to deliver insights and solutions that contribute to <strong>safer, stronger, and more efficient fabrication techniques</strong>—especially in demanding operational environments.",
    ],
  },
  {
    title: "Research & Development Focus",
    icon: research,
    iconBg: "white",
    points: [
      "Our welding research is grounded in a blend of <strong>experimental validation</strong> and <strong>process optimization</strong>, aimed at improving the performance and reliability of welded components.",
      "We explore how <strong>welding parameters affect material behavior</strong>—including dilution, microstructure, and joint strength—especially in stainless steels, aluminum alloys, and low-carbon steels.",
      "Our studies include <strong>dissimilar metal welding</strong>, with a focus on maintaining integrity across ferritic and austenitic interfaces, a key challenge in advanced engineering systems.",
      "We utilize <strong>statistical and analytical methods</strong> to fine-tune welding processes, ensuring optimal weld bead geometry, mechanical properties, and process efficiency.",
      "All research is geared toward <strong>high-integrity applications</strong> in environments where performance under stress and long-term durability are critical.",
    ],
  },
  {
    title: "Lab Infrastructure & Facilities",
    icon: facilities,
    iconBg: "white",
    points: [
      "LNMIIT's workshop is equipped for <strong>industrial-scale research and prototyping</strong>.",
      "<strong>Welding Techniques</strong>: SAW, SMAW, GTAW, GMAW (with consumable development), Oxy-fuel welding.",
      "<strong>Automation & Tools</strong>: 3-axis welding manipulator, robotic arm welding station, plasma arc cutting setup.",
      "Our labs support everything from <strong>hands-on training</strong> to <strong>prototype-level validation</strong> for collaborators.",
    ],
  },
  {
    title: "Collaboration Opportunities",
    icon: future,
    iconBg: "white",
    points: [
      "We are actively seeking to <strong>partner with organizations</strong> that rely on welding for high-integrity fabrication and precision manufacturing.",
      "Our team offers capabilities in <strong>process development, material evaluation, and customized training modules</strong> tailored to industry needs.",
      "Whether it's for <strong>new material weldability studies</strong>, <strong>automated welding trials</strong>, or <strong>fabrication optimization</strong>, we are equipped to contribute to mission-driven engineering challenges.",
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

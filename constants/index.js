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
    title: "Importance of Welding Research",
    // company_name: "Starbucks",
    icon: welding,
    iconBg: "white",
    //date: "March 2020 - April 2021",
    points: [
      "Welding is the backbone of industries like aerospace, shipbuilding, railways, and defense, ensuring structural integrity and long-term durability. Our advanced research at LNMIIT focuses on enhancing welding techniques, improving material strength, and optimizing cost-effective solutions for industrial applications."
    ],
  },
  {
    title: "Cutting-Edge Research Areas",
    //company_name: "Tesla",
    icon: research,
    iconBg: "white",
    //date: "Jan 2021 - Feb 2022",
    points: [
      "Our work spans across multiple domains, including:Developing and maintaining web applications using React.js and other related technologies.",
      "Advanced Welding Processes (Friction Stir Welding, Laser Welding, Hybrid Welding)",
      "Automated & AI-driven Welding for precision and efficiency",
      "Failure Analysis & Testing to ensure reliability in critical applications",
    ],
  },
  {
    title: "Industry Collaboration & Impact",
    //company_name: "Shopify",
    icon: industry,
    iconBg: "white",
    //date: "Jan 2022 - Jan 2023",
    points: [
      "We collaborate with leading organizations like DRDO, HAL, Metro Railway, and Shipyards to develop next-gen welding techniques. Our research has led to stronger, lightweight structures, reduced defects, and enhanced safety, driving innovation across sectors.",
    ],
  },
  {
    title: "State-of-the-Art Facilities",
    //company_name: "Meta",
    icon: facilities,
    iconBg:"white",
    //date: "Jan 2023 - Present",
    points: [
      "LNMIIT houses dedicated welding labs equipped with robotic welders, high-precision lasers, and thermal imaging systems. Our research infrastructure enables real-world simulations, ensuring solutions that meet industry standards and regulatory requirements.",
    ],
  },
  {
    title: "Future Innovations & Opportunities",
    //company_name: "Meta",
    icon: future,
    iconBg: "white",
    //date: "Jan 2023 - Present",
    points: [
      "We are pioneering research in green welding technologies, smart sensors for real-time quality monitoring, and AI-powered defect detection. Companies and researchers can partner with us for funded projects, industrial consultancy, and workforce training to push the boundaries of welding technology.",
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

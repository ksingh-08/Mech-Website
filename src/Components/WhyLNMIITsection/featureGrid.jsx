import React from "react";
import FeatureCard from "./featureCard";
import { FaUserTie, FaTools, FaRocket, FaFlask, FaCode, FaLaptopCode, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const features = [
  { title: "Top Talent Selection", description: "We recruit only the best professionals through a rigorous process.", Icon: <FaUserTie /> },
  { title: "Industry-Relevant Skills", description: "Our training programs align with current industry demands.", Icon: <FaTools /> },
  { title: "Innovation & Creativity", description: "Fostering a mindset that encourages innovative problem-solving.", Icon: <FaRocket /> },
  { title: "Strong Research Focus", description: "Dedicated to cutting-edge research and technological advancements.", Icon: <FaFlask /> },
  { title: "Technical Expertise", description: "Highly skilled individuals proficient in modern technologies.", Icon: <FaCode /> },
  { title: "Hands-on Experience", description: "Practical exposure through real-world projects and internships.", Icon: <FaLaptopCode /> },
  { title: "Expert Mentorship", description: "Guided by experienced professionals in various domains.", Icon: <FaChalkboardTeacher /> },
  { title: "Global Alumni Network", description: "A strong professional network across leading organizations.", Icon: <FaUsers /> },
];

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} title={feature.title} description={feature.description} Icon={feature.Icon} />
      ))}
    </div>
  );
};

export default FeatureGrid;

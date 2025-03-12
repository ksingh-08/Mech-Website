import React from "react";
import FeatureCard from "./featureCard";
import { FaUserCheck, FaTools, FaRocket, FaFlask, FaUserTie, FaChalkboardTeacher, FaIndustry } from "react-icons/fa";

const features = [
  { title: "Rigorous Student Selection", description: "Our competitive JEE Mains Cutoff process ensures a diverse and talented student body, free from reservation or management quotas.", Icon: <FaUserCheck /> },
  { title: "Industry-Aligned Curriculum", description: "Industry experts collaborate with us to shape a curriculum that equips students with relevant competencies and skills for the real world.", Icon: <FaIndustry /> },
  { title: "Cultivating Entrepreneurship", description: "We nurture an entrepreneurial mindset, empowering students to launch successful start-ups and innovate in various industries.", Icon: <FaRocket /> },
  { title: "Research Culture", description: "At LNMIIT, a thriving research ecosystem fosters excellence, encouraging students to explore new frontiers and drive impactful breakthroughs.", Icon: <FaFlask /> },
  { title: "Robust Facilities available", description: "Highly skilled individuals proficient in modern technologies.", Icon: < FaTools  /> },
  { title: "Distinguised Faculty", description: "Practical exposure through real-world projects.", Icon: <FaTools /> },
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

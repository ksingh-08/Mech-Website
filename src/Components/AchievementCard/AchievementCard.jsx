import React from "react";
import hpvc from "../../assets/robofest.jpg"
const achievements = [
  {
    title: "Universal Electrode Holder’ for Universal Shielded Metal Arc Welding",
    description: "A specially designed electrode holder compatible with a wide range of electrodes, enhancing the versatility and safety of the USMAW process. Its ergonomic and insulated design ensures ease of use and optimal current transfer, making it ideal for diverse welding environments.",
    image: "https://www.competitionsciences.org/wp-content/uploads/2017/07/download.png",
  },
  {
    title: "Welding torch ‘for Advanced Gas Metal Arc Welding (AGMAW).",
    description: "An advanced torch tailored for high-efficiency AGMAW operations, offering precise wire feeding, controlled gas shielding, and minimal spatter. Designed for continuous, automated, or semi-automated welding in industrial applications, it ensures clean welds and increased productivity.",
    image:hpvc,
  },
  {
    title: "Welding torch for Advanced Submerged Arc Welding Process (ASAW).",
    description:
      "A robust and high-performance torch engineered for the ASAW process, enabling deep penetration welds with high deposition rates. Ideal for heavy-duty applications, it features efficient flux delivery and cooling systems for extended welding cycles and superior weld quality.",
    image: "https://lnmiit.ac.in/wp-content/uploads/2024/07/unnamed.png",
  },
 
];

const AchievementCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-300 ease-in-out hover:scale-105">
      {/* <img src={image} alt={title} className="h-24 mx-auto mb-4" /> */}
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 text-md mt-2">{description}</p>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="bg-gray-100 py-10 text-center">
      <h2 className="text-3xl font-bold text-red-900 mb-6">Innovative Welding Tools & Technologies</h2>
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 px-4">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;

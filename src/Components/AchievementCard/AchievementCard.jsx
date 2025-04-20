import React from "react";
import hpvc from "../../assets/robofest.jpg"
const achievements = [
  {
    title: "Electric Human Powered Vehicle Challenge",
    description: "ASME X SAE LNMIIT’s eHPVC team is designing a hybrid eco-vehicle powered by electricity and human effort. Focused on innovation and sustainability, the project highlights LNMIIT’s drive for technical excellence and teamwork.",
    image: "https://www.competitionsciences.org/wp-content/uploads/2017/07/download.png",
  },
  {
    title: "Robofest 4.0",
    description: "A five-member LNMIIT team, won ₹2.5 Lakhs and advanced to the grand finale at Robofest Gujarat 4.0 for their PoC Rover project.",
    image:hpvc,
  },
  {
    title: "ASME LNMIIT Student Section",
    description:
      "The ASME LNMIIT Student Section has been honoured with the ASME Student Section Recognition Program’s Outstanding Community Engagement Award for India.",
    image: "https://lnmiit.ac.in/wp-content/uploads/2024/07/unnamed.png",
  },
 
];

const AchievementCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-300 ease-in-out hover:scale-105">
      <img src={image} alt={title} className="h-24 mx-auto mb-4" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="bg-gray-100 py-10 text-center">
      <h2 className="text-3xl font-bold text-red-900 mb-6">Achievements</h2>
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 px-4">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;

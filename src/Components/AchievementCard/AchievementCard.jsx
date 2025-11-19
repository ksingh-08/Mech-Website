import React from "react";
import { useTranslation } from 'react-i18next';
import hpvc from "../../assets/robofest.jpg"

const Achievements = () => {
  const { t } = useTranslation();
  
  const achievements = [
    {
      title: t('scope.universalElectrode'),
      description: t('scope.universalElectrodeDesc'),
      image: "https://www.competitionsciences.org/wp-content/uploads/2017/07/download.png",
    },
    {
      title: t('scope.agmawTorch'),
      description: t('scope.agmawTorchDesc'),
      image: hpvc,
    },
    {
      title: t('scope.asawTorch'),
      description: t('scope.asawTorchDesc'),
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

  return (
    <div className="bg-gray-100 py-10 text-center">
      <h2 className="text-3xl font-bold text-red-900 mb-6">{t('scope.innovativeTools')}</h2>
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 px-4">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;

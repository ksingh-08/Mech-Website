import React from "react";
import { useTranslation } from 'react-i18next';
import FeatureCard from "./featureCard";
import { FaUserCheck, FaTools, FaRocket, FaFlask, FaUserTie, FaChalkboardTeacher, FaIndustry } from "react-icons/fa";

const FeatureGrid = () => {
  const { t } = useTranslation();
  
  const features = [
    { title: t('scope.feature1Title'), description: t('scope.feature1Desc'), Icon: <FaUserCheck /> },
    { title: t('scope.feature2Title'), description: t('scope.feature2Desc'), Icon: <FaIndustry /> },
    { title: t('scope.feature3Title'), description: t('scope.feature3Desc'), Icon: <FaRocket /> },
    { title: t('scope.feature4Title'), description: t('scope.feature4Desc'), Icon: <FaFlask /> },
    { title: t('scope.feature5Title'), description: t('scope.feature5Desc'), Icon: < FaTools  /> },
    { title: t('scope.feature6Title'), description: t('scope.feature6Desc'), Icon: <FaTools /> },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} title={feature.title} description={feature.description} Icon={feature.Icon} />
      ))}
    </div>
  );
};

export default FeatureGrid;

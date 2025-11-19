import React from "react";
import { useTranslation } from 'react-i18next';
import FeatureGrid from "./featureGrid";

const WhyLNMIITSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 bg-gray-100 text-center">
      <section className="py-12 bg-gray-100 text-center"></section>
      <h1 className="text-3xl font-bold text-red-900 mb-6">{t('scope.whyUs')}</h1>
      <FeatureGrid />
    </section>
  );
};

export default WhyLNMIITSection;

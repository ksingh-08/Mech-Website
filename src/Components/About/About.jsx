import React from "react";
import aboutimg from "../../assets/gal2.jpeg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 md:p-auto pt-32 md:pl-0 md:pr-0 pl-4 pr-4 pb-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="rounded-3xl bg-white/30 backdrop-blur-lg border border-gray-200 shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full"
      >
        {/* Image */}
        <img
          src={aboutimg}
          alt="About Welding"
          className="w-full md:w-[400px] h-[600px] rounded-2xl object-cover shadow-md"
        />

        {/* Text Content */}
        <div className="text-gray-800 text-[18px]">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('about.title')} <span className="text-[#212ea0]">LNMIIT</span>
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            {t('about.paragraph1')}
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            {t('about.paragraph2')}
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            {t('about.paragraph3')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t('about.paragraph4')}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

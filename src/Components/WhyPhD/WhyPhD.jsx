import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { FiAward, FiUsers, FiLayers, FiBriefcase, FiTarget, FiPhone } from 'react-icons/fi';
import Title from '../Title/Title';

const WhyPhD = () => {
  const { t } = useTranslation();

  const focusAreas = [
    t('whyPhD.focusArea1'),
    t('whyPhD.focusArea2'),
    t('whyPhD.focusArea3'),
    t('whyPhD.focusArea4'),
    t('whyPhD.focusArea5'),
    t('whyPhD.focusArea6')
  ];

  const facilities = [
    t('whyPhD.facility1'),
    t('whyPhD.facility2'),
    t('whyPhD.facility3'),
    t('whyPhD.facility4')
  ];

  const mentors = [
    "Dr. Sunil Pandey",
    "Dr. Manoj Kumar",
    "Dr. Deepak Unune"
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-36 pb-16 md:pl-0 md:pr-0 pl-4 pr-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {t('whyPhD.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('whyPhD.subtitle')}
          </p>
        </motion.div>

        {/* A Research-Driven Ecosystem Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-red-800 flex items-center justify-center">
                <FiAward className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{t('whyPhD.researchEcosystemTitle')}</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t('whyPhD.researchEcosystemDesc')}
            </p>
          </motion.div>
        </section>

        {/* World-Class Mentorship Section */}
        <section className="mb-20">
          <Title subTitle={t('whyPhD.mentorshipSubtitle')} title={t('whyPhD.mentorshipSectionTitle')} />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-red-800 flex items-center justify-center">
                <FiUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('whyPhD.mentorshipTitle')}</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('whyPhD.mentorshipDesc', { mentors: mentors.join(', ') })}
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-red-800">
              <h4 className="font-semibold text-gray-900 mb-3">{t('whyPhD.expertiseAreas')}:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                <li>• {t('whyPhD.expertise1')}</li>
                <li>• {t('whyPhD.expertise2')}</li>
                <li>• {t('whyPhD.expertise3')}</li>
                <li>• {t('whyPhD.expertise4')}</li>
                <li>• {t('whyPhD.expertise5')}</li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Advanced Research Infrastructure Section */}
        <section className="mb-20">
          <Title subTitle={t('whyPhD.infrastructureSubtitle')} title={t('whyPhD.infrastructureSectionTitle')} />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-red-800 flex items-center justify-center">
                <FiLayers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('whyPhD.infrastructureTitle')}</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('whyPhD.infrastructureDesc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-5 border border-gray-200"
                >
                  <p className="text-gray-700">{facility}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Collaboration and Industry Integration Section */}
        <section className="mb-20">
          <Title subTitle={t('whyPhD.collaborationSubtitle')} title={t('whyPhD.collaborationSectionTitle')} />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-800 to-red-900 rounded-xl shadow-lg p-8 md:p-12 text-white"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <FiBriefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">{t('whyPhD.collaborationTitle')}</h3>
            </div>
            <p className="text-lg leading-relaxed mb-6 opacity-95">
              {t('whyPhD.collaborationDesc')}
            </p>
            <p className="text-lg leading-relaxed opacity-95">
              {t('whyPhD.collaborationDesc2')}
            </p>
          </motion.div>
        </section>

        {/* Focus Areas Section */}
        <section className="mb-20">
          <Title subTitle={t('whyPhD.focusAreasSubtitle')} title={t('whyPhD.focusAreasTitle')} />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t('whyPhD.focusAreasIntro')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-5 border-l-4 border-red-800 hover:shadow-md transition-shadow"
                >
                  <p className="text-gray-800 font-medium">{area}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mt-8">
              {t('whyPhD.focusAreasConclusion')}
            </p>
          </motion.div>
        </section>

        {/* Outcomes Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-red-800 flex items-center justify-center">
                <FiTarget className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('whyPhD.outcomesTitle')}</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t('whyPhD.outcomesDesc1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t('whyPhD.outcomesDesc2')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('whyPhD.outcomesDesc3')}
            </p>
          </motion.div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-800 to-red-900 rounded-2xl shadow-xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">{t('whyPhD.ctaTitle')}</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            {t('whyPhD.ctaDesc')}
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <FiPhone className="w-5 h-5" />
            {t('whyPhD.contactUs')}
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyPhD;

import React, { useState } from 'react';
import './Research.css';
import { Link } from 'react-router-dom';
import res1 from '../../assets/1new.jpg';
import res2 from '../../assets/2new.jpg';
import res3 from '../../assets/3new.jpg';
import res4 from '../../assets/4new.jpg';
import res5 from '../../assets/5new.png';
import Title from '../Title/Title';
import StarBorder from './StarBorder';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiSearch } from 'react-icons/fi';

const ResearchUpdate = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const researchItems = [
    {
      image: res1,
      title:
        'Modelling of the effects of welding conditions on dilution of stainless steel claddings produced by gas metal arc welding procedures:',
      link: '/page1',
    },
    {
      image: res2,
      title:
        'Experimental analysis of dissimilar metal weld joint: Ferritic to austenitic stainless steel',
      link: '/page2',
    },
    {
      image: res3,
      title:
        'Effect of process parameters on friction stir welding of aluminum alloy 2219-T87',
      link: '/page3',
    },
    {
      image: res4,
      title:
        'Experimental investigation and optimization of weld bead characteristics during submerged arc welding of AISI 1023 steel.',
      link: '/page4',
    },
    {
      image: res5,
      title:
        'A robust Taguchi combined AHP approach for optimizing AISI 1023 low carbon steel weldments in the SAW process',
      link: '/page5',
    },
  ];

  // Group patent processes by type
  const patentProcesses = {
    'Plasma Enhanced Processes': [
      'Plasma Enhanced Shielded Metal Arc Welding (PESMAW)',
      'Plasma Enhanced Oxygen Arc Cutting (PEOAC)',
      'Plasma Enhanced Oxygen Arc Piercing (PEOAP)',
      'Plasma Enhanced Oxygen Arc Lancing (PEOAL)',
      'Plasma Enhanced Oxygen Arc Gouging (PEOAG)',
      'Plasma Enhanced Shielded Metal Arc Surfacing (PESMAS)',
      'Plasma Enhanced Oxygen Arc Scarfing (PEOAS)',
    ],
    'Advanced Welding Techniques': [
      'Universal Shielded Metal Arc Welding (USMAW)',
      'Advanced Submerged Arc Welding (ASAW)',
      'Advanced Gas Metal Arc Welding (AGMAW)',
      'Moving Contact Shielded Metal Arc Welding (MCSMAW)',
    ],
    'Design Innovations': [
      'Design of Underwater welding electrodes',
      'Welding of cross-country pipe lines with E-6013 and E-7018 electrodes',
      'Design of welding fluxes',
      'Design of \'Spin Welding Machine\' for welding of polymers',
    ],
  };

  return (
    <div className="pt-3 px-4 mt-10 bg-gray-50 pb-12">
      <Title subTitle={t('research.subtitle')} title={t('research.title')} />
      
      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto mb-12 bg-white p-8 rounded-xl shadow-md border border-gray-100">
        <p className="text-xl leading-relaxed">
          {t('research.intro')}
        </p>
      </div>

      {/* Patents & Innovations Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-16"
      >
        <div className="relative bg-white rounded-xl shadow-lg p-8 border border-gray-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-red-700 opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-700 opacity-5 rounded-full transform -translate-x-24 translate-y-24"></div>
          
          <h2 className="text-2xl font-bold mb-6 text-gray-800 relative">
            <span className="border-b-4 border-red-700 pb-1">{t('research.patentedInnovations')}</span>
          </h2>
          
          <p className="text-lg mb-8">
            {t('research.patentedDescription')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(patentProcesses).map(([category, processes], idx) => (
              <motion.div 
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-red-700 mb-4">{category}</h3>
                <ul className="space-y-2">
                  {processes.map((process, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-medium mr-2">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{process}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Research Items Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          <span className="border-b-4 border-red-700 pb-1">{t('research.featuredResearch')}</span>
        </h2>
        
        {/* Search/Filter Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder={t('research.searchPlaceholder') || "Search research papers..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-lg focus:border-red-800 focus:outline-none text-lg"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-sm text-gray-600 mt-2 text-center">
              {researchItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              ).length} {t('research.resultsFound') || 'result(s) found'}
            </p>
          )}
        </div>
      </div>
      
      {researchItems
        .filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((item, index) => (
        <div className="mb-6" key={index}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeIn' }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center bg-white shadow-md p-6 rounded-xl max-w-5xl mx-auto"
          >
            <div className="w-full md:w-[350px] h-[200px] mb-4 md:mb-0 flex-shrink-0">
              <img
                src={item.image}
                alt={`Research ${index + 1}`}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h3 className="text-base md:text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <Link to={item.link}>
                  <StarBorder
                  as="button"
                  className="mt-4 text-white"
                  color="white"
                  speed="5s"
                >
                  {t('research.seeMore')}
                </StarBorder>
              </Link>
            </div>
          </motion.div>
        </div>
      ))}

      <div className="mb-10" />
    </div>
  );
};

export default ResearchUpdate;
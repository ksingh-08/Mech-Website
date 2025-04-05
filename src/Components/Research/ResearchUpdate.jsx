import React from 'react';
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

const ResearchUpdate = () => {
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

  return (
    <div className="pt-3 px-4">
      <Title subTitle="Research" title="Explore. Discover. Innovate." />

      {researchItems.map((item, index) => (
        <div className="mb-6" key={index}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeIn' }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center bg-white shadow-md p-6 rounded-xl max-w-6xl mx-auto"
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
                  color="cyan"
                  speed="5s"
                >
                  See More
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

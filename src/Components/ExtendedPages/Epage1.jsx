import React from "react";
import { useTranslation } from 'react-i18next';
import provide1 from "../../assets/IC.jpg";
import sunilPandeyImg from "../../assets/profpandey.png";
import manoj from "../../assets/manoj.png";
import deepak from "../../assets/deepak.png";
import { motion } from "framer-motion";

const Epage1 = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-50 flex flex-col justify-center items-center min-h-screen mt-14 pt-20 px-4 pb-20">
      {/* Industrial Consultancy Section */}
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-2xl overflow-hidden mb-16">
        <h2 className="text-4xl font-bold text-center text-red-800 pt-8 pb-4">
          {t('extended.industrialConsultancyTitle')}
        </h2>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 flex justify-center items-center">
            <img
              src={provide1}
              alt="Industrial Consultancy"
              className="rounded-xl object-cover w-full h-auto max-h-[500px] shadow-md"
            />
          </div>
          
          <div className="md:w-1/2 p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
            {t('extended.industrialConsultancyContent')}


            </p>
            
            <h3 className="text-xl font-semibold text-red-800 mb-4">Areas of Expertise:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex">
                <span className="font-semibold mr-2">1.</span>
                <span><span className="font-medium">Welding Consumables Development:</span> Specialized in the formulation
                and modification of welding fluxes and the in-house manufacturing of
                welding wires.</span>
              </li>
              <li className="flex">
                <span className="font-semibold mr-2">2.</span>
                <span><span className="font-medium">Manpower Training & Workshops:</span> Hands-on training sessions and
                knowledge-building workshops for industry partners.</span>
              </li>
              <li className="flex">
                <span className="font-semibold mr-2">3.</span>
                <span><span className="font-medium">Process Optimization:</span> Fine-tuning welding parameters and machining
                workflows to increase productivity and quality.</span>
              </li>
              <li className="flex">
                <span className="font-semibold mr-2">4.</span>
                <span><span className="font-medium">Industrial Safety & Hazard Mitigation:</span> Assessment of potential hazards
                and implementation of safety protocols.</span>
              </li>
              <li className="flex">
                <span className="font-semibold mr-2">5.</span>
                <span><span className="font-medium">Equipment Selection & Maintenance:</span> We guide the choice of welding tools and recommend maintenance practices to maximize efficiency and lifespan.</span>
              </li>
              <li className="flex">
                <span className="font-semibold mr-2">6.</span>
                <span><span className="font-medium">Alternative Process Planning:</span>When standard methods don’t work, we design innovative alternatives aligned with your production goals.</span>
              </li>
              <li className="flex">
                <span className="font-semibold mr-2">7.</span>
                <span><span className="font-medium">Welding Defects: Causes & Solutions:</span>We identify welding defects, trace their root causes, and implement solutions to ensure structural strength and reliability.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Faculty Consultants Section */}
      <div className="max-w-6xl w-full mb-12">
        <h3 className="text-3xl font-bold text-center text-red-800 mb-12">
          Faculty Consultants
        </h3>

        <div className="space-y-10">
          {/* 1. Sunil Pandey */}
          <motion.div
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-1/4 flex justify-center">
              <img
                src={sunilPandeyImg}
                alt="Sunil Pandey"
                className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-gray-100"
              />
            </div>
            <div className="md:w-3/4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-2xl font-bold text-gray-800">
                  Sunil Pandey
                </h4>
                <a
                  href="mailto:sunil.pandey@lnmiit.ac.in"
                  className="text-blue-600 hover:underline"
                >
                  sunil.pandey@lnmiit.ac.in
                </a>
              </div>
              <p className="text-gray-600 mb-3">
                Ph.D. (Welding), M. Tech. (Prod. Engg.), B.E. (Mech.)
                <br />
                Professor of Mechanical Engineering at Jawaharlal Nehru University
              </p>
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <h5 className="font-medium text-gray-800 mb-1">Areas of Expertise:</h5>
                <p className="text-gray-700">
                  Welding and Joining Technology, Manufacturing Technology, Industrial Safety, 
                  Process Planning, Unconventional Machining.
                </p>
              </div>
              <a
                href="https://www.researchgate.net/profile/Sunil-Pandey-15"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-white bg-red-800 hover:bg-red-700 rounded-md transition duration-300 text-sm font-medium"
              >
                View ResearchGate Profile
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* 2. Manoj Kumar */}
          <motion.div
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:w-1/4 flex justify-center">
              <img
                src={manoj}
                alt="Manoj Kumar"
                className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-gray-100"
              />
            </div>
            <div className="md:w-3/4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-2xl font-bold text-gray-800">
                  Manoj Kumar
                </h4>
                <a
                  href="mailto:manojkumar@lnmiit.ac.in"
                  className="text-blue-600 hover:underline"
                >
                  manojkumar@lnmiit.ac.in
                </a>
              </div>
              <p className="text-gray-600 mb-3">
                Ph.D. (Mechanical Engineering), M.Tech. (Production Technology), 
                B.Tech. (Industrial and Production Technology)
                <br />
                Associate Professor at LNMIIT
              </p>
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <h5 className="font-medium text-gray-800 mb-1">Areas of Expertise:</h5>
                <p className="text-gray-700">
                  Manufacturing Technology, Processes and Consumables for Welding, Cutting and Gouging, 
                  Welding Metallurgy, Metal 3D Printing, Welding Fluxes, Wear Resistant Alloy Fluxes.
                </p>
              </div>
              <a
                href="https://www.researchgate.net/profile/Manoj-Kumar-343"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-white bg-red-800 hover:bg-red-700 rounded-md transition duration-300 text-sm font-medium"
              >
                View ResearchGate Profile
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* 3. Deepak Unune */}
          <motion.div
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="md:w-1/4 flex justify-center">
              <img
                src={deepak}
                alt="Deepak Unune"
                className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-gray-100"
              />
            </div>
            <div className="md:w-3/4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-2xl font-bold text-gray-800">
                  Deepak Unune
                </h4>
                <a
                  href="mailto:deepak.unune@lnmiit.ac.in"
                  className="text-blue-600 hover:underline"
                >
                  deepak.unune@lnmiit.ac.in
                </a>
              </div>
              <p className="text-gray-600 mb-3">
                Postdoctoral Research (University of Sheffield, UK),
                Ph.D. (MNIT Jaipur), M. Tech. (Govt. College of Engineering, Karad)
                <br />
                Assistant Professor at LNMIIT
              </p>
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <h5 className="font-medium text-gray-800 mb-1">Areas of Expertise:</h5>
                <p className="text-gray-700">
                  Electrical Discharge Machining, CNC Machining, Hybrid Machining, Sustainable Machining.
                </p>
              </div>
              <a
                href="https://www.researchgate.net/profile/Deepak-Unune"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-white bg-red-800 hover:bg-red-700 rounded-md transition duration-300 text-sm font-medium"
              >
                View ResearchGate Profile
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Epage1;
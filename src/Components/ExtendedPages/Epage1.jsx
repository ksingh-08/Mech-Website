import React from "react";
import provide1 from "../../assets/IC.jpg";
import sunilPandeyImg from "../../assets/profpandey.png"; // Add the image file for faculty
import manoj from "../../assets/manoj.png";
import deepak from "../../assets/deepak.png";
import { motion } from 'framer-motion';
const Epage1 = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center min-h-screen pt-32 px-4 pb-20">
      {/* Industrial Consultancy Section */}
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200 flex flex-col md:flex-row mb-16">
        <div className="md:w-1/2 flex justify-center items-center p-6 bg-gray-100">
          <img
            src={provide1}
            alt="Industrial Consultancy"
            className="rounded-2xl object-cover w-full h-full max-h-[400px]"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Industrial Consultancy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our industrial consultancy services help businesses improve welding
            processes and boost productivity. We assist with inspections,
            troubleshooting, and process optimization tailored to client needs.
            <br />
            <br />
            We aim to bridge academic insights and real-world demands, ensuring
            quality, standards compliance, and innovative welding solutions
            backed by research and field expertise.
          </p>
        </div>
      </div>

      {/* Faculty Consultants Section */}
      <div className="max-w-8xl w-full">
        <h3 className="text-4xl flex items-center justify-center font-bold text-red-800 mb-8">
          Faculty Consultants
        </h3>

        <div className="gap-8 flex flex-col items-center md:h-auto">
          {/* 1. Sunil Pandey */}
          <motion.div
          className="bg-white border border-gray-200 rounded-3xl shadow-lg p-6 flex flex-col justify-center md:flex-row items-center max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={sunilPandeyImg}
            alt="Sunil Pandey"
            className="w-60 h-60 rounded-2xl object-cover mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h4 className="text-4xl font-semibold text-gray-800">Sunil Pandey</h4>
            <p className="text-gray-600 text-sm mt-1 mb-2">
              Ph.D. (Welding), M. Tech. (Prod. Engg.), <br />
              B.E. (Mech.) Professor of Mechanical Engineering at Jawaharlal
              Nehru University
            </p>
            <p className="text-sm text-gray-700">
              Welding and Joining Technology, Manufacturing Technology,
              Industrial Safety, Process Planning, Unconventional Machining.
            </p>
            <p className="text-sm text-blue-600 mt-2">sunil.pandey@lnmiit.ac.in</p>
            <a
              href="https://www.researchgate.net/profile/Sunil-Pandey-15"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-2 text-white bg-red-800 hover:bg-red-700 rounded-md transition duration-300 text-sm font-medium shadow-md"
            >
              View ResearchGate Profile
            </a>
          </div>
        </motion.div>

        {/* 2. Manoj Kumar */}
        <motion.div
          className="bg-white border border-gray-200 rounded-3xl shadow-lg p-6 flex flex-col justify-center md:flex-row items-center max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={manoj}
            alt="Manoj Kumar"
            className="w-60 h-60 rounded-2xl object-cover mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h4 className="text-4xl font-semibold text-gray-800">Manoj Kumar</h4>
            <p className="text-gray-600 text-sm mt-1 mb-2">
              Ph.D., (Mechanical Engineering) M.Tech., (Production Technology)
              B.Tech., (Industrial and Production Technology)
              <br />
              Associate Professor at LNMIIT
            </p>
            <p className="text-sm text-gray-700">
              Manufacturing Technology, Processes and Consumables for Welding,
              Cutting and Gouging, Welding Metallurgy, Metal 3D Printing,
              Welding Fluxes, Wear Resistant Alloy Fluxes, Tubular Welding
              Electrodes, Swet on Paste, Recycling.
            </p>
            <p className="text-sm text-blue-600 mt-2">manojkumar@lnmiit.ac.in</p>
            <a
              href="https://www.researchgate.net/profile/Manoj-Kumar-343"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-2 text-white bg-red-800 hover:bg-red-700 rounded-md transition duration-300 text-sm font-medium shadow-md"
            >
              View ResearchGate Profile
            </a>
          </div>
        </motion.div>

        {/* 3. Deepak Unune */}
        <motion.div
          className="bg-white border border-gray-200 rounded-3xl shadow-lg p-6 flex flex-col justify-center md:flex-row items-center max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={deepak}
            alt="Deepak Unune"
            className="w-60 h-60 rounded-2xl object-cover mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h4 className="text-4xl font-semibold text-gray-800">Deepak Unune</h4>
            <p className="text-gray-600 text-sm mt-1 mb-2">
              Postdoctoral Research (University of Sheffield, UK), <br />
              Ph.D. (MNIT Jaipur), M. Tech. (Govt. College of Engineering,
              Karad), B. Tech. (Rajarambapu Institute of Technology)
              <br />
              Assistant Professor at LNMIIT
            </p>
            <p className="text-sm text-gray-700">
              Electrical Discharge Machining, CNC Machining, Hybrid Machining,
              Sustainable Machining.
            </p>
            <p className="text-sm text-blue-600 mt-2">deepak.unune@lnmiit.ac.in</p>
            <a
              href="https://www.researchgate.net/profile/Deepak-Unune"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-2 text-white bg-red-800 hover:bg-red-700 rounded-md transition duration-300 text-sm font-medium shadow-md"
            >
              View ResearchGate Profile
            </a>
          </div>
        </motion.div>

          {/* Add more cards below if needed */}
        </div>
      </div>
    </div>
  );
};

export default Epage1;

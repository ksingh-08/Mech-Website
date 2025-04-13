import React from 'react';
import asaw from '../../assets/Asaw.jpg';
//import manipulatorImage from '../../newpics/3axis.jpeg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Fac10Updated = () => {
  return (
    <>
      {/* Background Section */}
      <div className="relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={asaw}
            className="w-full h-full object-cover opacity-20 filter grayscale"
            alt="3-Axis Welding Manipulator Background"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
        </div>

        <div className="relative text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto pb-2">
            Advanced Submerged Arc Welding (ASAW) Process
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center -mt-20 z-0">
        <img
          src={asaw}
          className="h-80 border-4 border-gray-700 shadow-xl rounded-lg"
          alt="3-Axis Welding Manipulator"
        />
      </div>

      {/* Overview Section */}
      <div className="px-6 md:px-12 lg:px-24 my-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview of ASAW Process</h2>
        <p className="text-gray-700 leading-relaxed">
          The Advanced Submerged Arc Welding (ASAW) process is a specialized variant of submerged arc welding (SAW), developed at IIT Delhi. 
          It features a unique welding torch design with two contact tips (upper and lower) separated by a dielectric medium. Additionally, 
          the process uses an auxiliary secondary power source to preheat the welding wire using Joule heating. This two-step current supply 
          method optimizes the welding process, offering better control over heat input and metal deposition.
        </p>
      </div>

      {/* Accordion Section for Importance and Applications */}
      <div className="px-6 md:px-12 lg:px-24 my-8">
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">Importance and Applications of ASAW</p>
          </AccordionSummary>
          <AccordionDetails>
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Increased Metal Deposition and Reduced Heat Input</h3>
            <p className="text-gray-700 leading-relaxed">
              By using lower current, ASAW enables a higher deposition rate while minimizing heat input.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Improved Alloy Recovery</h3>
            <p className="text-gray-700 leading-relaxed">
              The reduced heat input prevents excessive evaporation of alloying elements, leading to better alloy recovery in the weld metal.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Reduced Distortion and Residual Stress</h3>
            <p className="text-gray-700 leading-relaxed">
              Lower heat input minimizes distortion and residual stresses in the welded assembly, eliminating the need for heavy jigs and fixtures.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Enhanced Mechanical and Metallurgical Properties</h3>
            <p className="text-gray-700 leading-relaxed">
              ASAW improves the grain structure, leading to superior mechanical and metallurgical properties of the weld metal. Post-weld heat 
              treatment is not necessary.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Wide Range of Applications</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Automobiles</li>
              <li>Pressure vessels</li>
              <li>Aircrafts</li>
              <li>Bridges and buildings</li>
              <li>Structural components</li>
              <li>Surfacing and thin plate joining</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Accordion Section for Economics of ASAW Process */}
      <div className="px-6 md:px-12 lg:px-24 my-8">
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">Economics of ASAW Process with Mild Steel</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700 leading-relaxed">
              The ASAW process is significantly more efficient than conventional SAW. Below is a comparison based on power consumption for the same welding conditions:
            </p>

            <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-left">Process</th>
                  <th className="border px-4 py-2 text-left">SAW</th>
                  <th className="border px-4 py-2 text-left">ASAW</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Main Power Source Voltage (V)</td>
                  <td className="border px-4 py-2">40</td>
                  <td className="border px-4 py-2">40</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Current (I)</td>
                  <td className="border px-4 py-2">600</td>
                  <td className="border px-4 py-2">400</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Auxiliary Power Source (kW)</td>
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">240</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Water Pump Energy Consumption (kW)</td>
                  <td className="border px-4 py-2">0.48</td>
                  <td className="border px-4 py-2">0.02</td>
                </tr>
              </tbody>
            </table>

            <p className="text-gray-700 mt-4">
              Total Power Consumed by ASAW: 16 KW (main) + 0.48 KW (auxiliary) + 0.02 KW (water pump) = 16.5 KW
            </p>
            <p className="text-gray-700 mt-4">
              Power Saved by ASAW: 24 KW (SAW) - 16.5 KW (ASAW) = 7.5 KW
            </p>
            <p className="text-gray-700 mt-4">
              This demonstrates that ASAW is 31% more efficient than SAW for the same welding conditions, highlighting its economic advantages.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Learn More Button */}
      <div className="flex justify-center my-8">
        <Button
          variant="contained"
          color="primary"
          href="https://cubuilt.com/3-axis-welding-manipulator/"
          target="_blank"
          size="large"
        >
          Learn More About Welding Manipulators
        </Button>
      </div>
    </>
  );
};

export default Fac10Updated;

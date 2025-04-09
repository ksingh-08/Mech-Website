import React from 'react';
import fl2 from '../../newpics/SAW.jpeg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Fac2Updated = () => {
  return (
    <>
      {/* Background Section */}
      <div className="relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={fl2}
            className="w-full h-full object-cover opacity-20 filter grayscale"
            alt="Background"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
        </div>

        <div className="relative text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto pb-2">
            Submerged Arc Welding (SAW)
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center -mt-20 z-0">
        <img
          src={fl2}
          className="h-80 border-4 border-gray-700 shadow-xl rounded-lg"
          alt="SAW Machine"
        />
      </div>

      {/* Introduction Section */}
      <div className="px-6 md:px-12 lg:px-24 my-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction to SAW</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Submerged Arc Welding (SAW)</strong> is a highly productive, <strong>automatic or semi-automatic</strong> welding method known for its <strong>deep penetration</strong> and <strong>high deposition rates</strong>. It uses a <strong>granular flux</strong> layer that fully submerges the arc, leading to <strong>spatter-free and clean welds</strong>. Widely used in <strong>structural fabrication</strong>, <strong>pipeline welding</strong>, and <strong>heavy manufacturing</strong>, SAW ensures strong, efficient weld joints with minimal human intervention.
        </p>
      </div>

      {/* Accordion Section */}
      <div className="px-6 md:px-12 lg:px-24">
        {/* Working */}
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">1. How SAW Works</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              <strong>SAW</strong> creates an <strong>electric arc</strong> between a <strong>consumable wire electrode</strong> and the <strong>metal workpiece</strong>. This arc is completely covered under a blanket of <strong>granular flux</strong>, which melts due to the heat and forms a protective layer of <strong>molten slag</strong> and <strong>shielding gas</strong>. This prevents contamination and maintains arc stability. <br /><br />
              The <strong>electrode and base metal melt together</strong>, forming a high-quality weld. SAW is primarily used in <strong>flat or horizontal positions</strong> and is extremely effective for <strong>long, continuous welds</strong> due to its automation compatibility.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Applications */}
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">2. Applications</p>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Shipbuilding</strong> – Welding of hull structures</li>
              <li><strong>Pipeline construction</strong> – Longitudinal and spiral seam welds</li>
              <li><strong>Pressure vessel manufacturing</strong> – Tanks and boilers</li>
              <li><strong>Heavy structural fabrication</strong> – Beams and columns</li>
              <li><strong>Railway equipment</strong> – Frames, bogies</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* Usage in Industries */}
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">3. Usage in Industries</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              <strong>SAW</strong> is preferred in industries demanding <strong>high efficiency and strong weld integrity</strong>. It’s widely used in:
              <br /><br />
              • <strong>Oil and Gas</strong>: For high-pressure pipeline joints<br />
              • <strong>Shipbuilding</strong>: To handle large steel sections<br />
              • <strong>Power plants</strong>: For pressure vessels and turbines<br />
              • <strong>Steel structures</strong>: In bridges and construction frameworks
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Defects & Challenges */}
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">4. Defects and Challenges</p>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Positional Limitation</strong>: Effective only in flat or horizontal positions</li>
              <li><strong>Heat Distortion</strong>: High heat input may deform the base metal</li>
              <li><strong>Flux Handling</strong>: Requires storage, drying, and recycling processes</li>
              <li><strong>Post-Weld Cleaning</strong>: Slag needs to be removed</li>
              <li><strong>Material Thickness</strong>: Not suitable for thin sheets</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* Cost Effectiveness */}
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">5. Cost Effectiveness</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              Though initial investment in <strong>SAW equipment</strong> is high, the process becomes cost-efficient due to:
              <br /><br />
              • <strong>High deposition rate</strong><br />
              • <strong>Reduced labor involvement</strong> due to automation<br />
              • <strong>Minimal rework</strong> from clean, consistent welds<br />
              • <strong>Efficient use of consumables</strong> like flux and wire
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Best Practices */}
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">6. Best Practices</p>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Clean surfaces</strong> before welding to avoid contamination</li>
              <li><strong>Select appropriate flux and wire combination</strong></li>
              <li><strong>Monitor travel speed</strong> and maintain correct arc voltage</li>
              <li><strong>Use automated systems</strong> for long, repetitive welds</li>
              <li><strong>Proper slag removal</strong> ensures better finish and quality</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Learn More Button */}
      <div className="flex justify-center my-8">
        <Button
          variant="contained"
          color="primary"
          href="https://en.wikipedia.org/wiki/Submerged_arc_welding"
          target="_blank"
          size="large"
        >
          Learn More About SAW
        </Button>
      </div>
    </>
  );
};

export default Fac2Updated;

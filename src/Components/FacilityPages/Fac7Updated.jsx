import React from 'react';
import fl7 from '../../newpics/Plasma.jpeg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Fac7Updated = () => {
  return (
    <>
      {/* Background Section */}
      <div className="relative flex items-center justify-center bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={fl7}
            className="w-full h-full object-cover opacity-20 filter grayscale"
            alt="Background"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-20"></div> {/* Red Tint */}
        </div>

        <div className="relative text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto pb-2">
            Plasma Cutting
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center -mt-20 z-0">
        <img
          src={fl7}
          className="h-80 border-4 border-gray-700 shadow-xl rounded-lg"
          alt="Plasma Cutting Machine"
        />
      </div>

      {/* Introduction Section */}
      <div className="px-6 md:px-12 lg:px-24 my-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction to Plasma Cutting</h2>

        <p className="text-gray-700 leading-relaxed">
          <strong>Plasma Cutting</strong> is a high-precision metal cutting process that uses a jet 
          of ionized gas (plasma) to cut through electrically conductive materials. It is widely 
          used in <strong>industrial fabrication, automotive repair, and metal recycling</strong> due 
          to its <em>speed, accuracy</em>, and ability to cut through thick materials efficiently.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          Plasma Cutting is particularly useful for cutting <strong>steel, stainless steel, 
          aluminum, copper, and brass</strong>. It offers a clean, fast, and cost-effective alternative 
          to traditional metal cutting methods.
        </p>
      </div>

      {/* Accordion Section */}
      <div className="px-6 md:px-12 lg:px-24 my-10">
        {/* How Plasma Cutting Works */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            <p className="font-semibold text-lg">1. How Plasma Cutting Works</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              Plasma Cutting works by generating an <strong>electric arc</strong> between an electrode 
              and the workpiece. This arc ionizes the gas, turning it into plasma, which reaches 
              extremely high temperatures and melts the metal. A high-velocity stream of gas then 
              blows away the molten metal, creating a precise cut.
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Key Components of Plasma Cutting:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Plasma Cutter:</strong> Generates the plasma arc for cutting.</li>
              <li><strong>Power Supply:</strong> Provides energy for ionization.</li>
              <li><strong>Cutting Torch:</strong> Directs the plasma onto the workpiece.</li>
              <li><strong>Gas Supply:</strong> Uses compressed air, nitrogen, or argon for plasma formation.</li>
              <li><strong>CNC System (Optional):</strong> Automates the cutting process for precision.</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* Applications of Plasma Cutting */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
            <p className="font-semibold text-lg">2. Applications of Plasma Cutting</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              Plasma Cutting is widely used in:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Metal Fabrication:</strong> Cutting and shaping metal sheets.</li>
              <li><strong>Automotive Repair:</strong> Cutting chassis and exhaust components.</li>
              <li><strong>Shipbuilding:</strong> Creating precise structural components.</li>
              <li><strong>Aerospace Industry:</strong> Manufacturing high-precision metal parts.</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* Advantages of Plasma Cutting */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
            <p className="font-semibold text-lg">3. Advantages of Plasma Cutting</p>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>High Speed:</strong> Cuts metal faster than traditional oxy-fuel cutting.</li>
              <li><strong>Precision:</strong> Produces clean and accurate cuts.</li>
              <li><strong>Versatility:</strong> Works with various conductive metals.</li>
              <li><strong>Lower Operating Costs:</strong> Uses compressed air instead of expensive gases.</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* Challenges and Limitations */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content" id="panel4-header">
            <p className="font-semibold text-lg">4. Challenges and Limitations</p>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Limited to Conductive Metals:</strong> Cannot cut non-conductive materials like plastic or wood.</li>
              <li><strong>Heat Distortion:</strong> High temperatures can cause minor warping in thin metals.</li>
              <li><strong>Consumable Costs:</strong> Electrodes and nozzles wear out over time.</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* Cost Effectiveness */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5-content" id="panel5-header">
            <p className="font-semibold text-lg">5. Cost Effectiveness</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              Plasma Cutting is a cost-effective solution for industrial cutting, offering:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Lower Gas Costs:</strong> Uses air instead of expensive oxy-fuel gases.</li>
              <li><strong>Reduced Waste:</strong> Precise cuts reduce material loss.</li>
              <li><strong>Minimal Post-Processing:</strong> Requires less grinding and finishing.</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* Best Practices */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6-content" id="panel6-header">
            <p className="font-semibold text-lg">6. Best Practices</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              To maximize efficiency and precision:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Use the correct nozzle size for the material thickness.</li>
              <li>Maintain a steady hand or use a CNC system for accuracy.</li>
              <li>Regularly check and replace worn electrodes.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Additional Resources */}
      <div className="flex justify-center my-8">
        <Button
          variant="contained"
          color="primary"
          href="https://en.wikipedia.org/wiki/Plasma_cutting"
          target="_blank"
          size="large"
        >
          Learn More About Plasma Cutting
        </Button>
      </div>
    </>
  );
};

export default Fac7Updated;

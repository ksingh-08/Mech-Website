import React from 'react';
import manipulatorImage from '../../newpics/3axis.jpeg'; // Replace with actual image
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Fac9Updated = () => {
  return (
    <>
      {/* Background Section */}
      <div className="relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={manipulatorImage}
            className="w-full h-full object-cover opacity-20 filter grayscale"
            alt="3-Axis Welding Manipulator Background"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
        </div>

        <div className="relative text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto pb-2">
            3-Axis Welding Manipulator
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center -mt-20 z-0">
        <img
          src={manipulatorImage}
          className="h-80 border-4 border-gray-700 shadow-xl rounded-lg"
          alt="3-Axis Welding Manipulator"
        />
      </div>

      {/* Introduction Section */}
      <div className="px-6 md:px-12 lg:px-24 my-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction to 3-Axis Welding Manipulator</h2>
        <p className="text-gray-700 leading-relaxed">
          The <strong>3-Axis Welding Manipulator</strong> is an advanced mechanized welding system offering precise control 
          of the welding torch across three dimensions: <strong>vertical, horizontal, and radial</strong>. It is widely used 
          to automate large-scale welding operations, offering improved accuracy, reduced fatigue, and consistent weld quality. 
          Equipped with motorized movement and programmable paths, the manipulator plays a crucial role in modern fabrication and manufacturing industries.
        </p>
      </div>

      {/* Accordion Section */}
      <div className="px-6 md:px-12 lg:px-24">
        {/* Working */}
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">1. How it Works</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              The manipulator consists of a <strong>column, boom, carriage, and rotating base</strong>. It moves the welding torch in three directions:
              <br /><br />
              • <strong>X-axis</strong> – Horizontal movement of the boom<br />
              • <strong>Y-axis</strong> – Radial or rotational movement<br />
              • <strong>Z-axis</strong> – Vertical movement along the column<br /><br />
              Modes of operation include:
              <br />
              • <strong>Manual Mode</strong> – Used for setup and fine adjustments<br />
              • <strong>Programmable Mode</strong> – Controlled by CNC or PLC for high precision<br />
              • <strong>Automated Integration</strong> – Works with <strong>rotators, positioners, and seam tracking systems</strong> for continuous operation
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
              <li><strong>Pressure vessel</strong> and pipeline welding</li>
              <li><strong>Boiler and heat exchanger</strong> fabrication</li>
              <li><strong>Wind turbine tower</strong> and pole manufacturing</li>
              <li><strong>Shipbuilding</strong> and offshore structure welding</li>
              <li><strong>Automotive chassis</strong> and structural beam welding</li>
              <li><strong>Large cylindrical tanks</strong> and storage containers</li>
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
              Widely adopted in industries such as <strong>oil & gas, power generation, shipbuilding, and heavy machinery</strong>. 
              These manipulators are ideal for:
              <br /><br />
              • Performing <strong>long, continuous welds</strong> on large components<br />
              • Ensuring <strong>operator safety</strong> by remote-control operation<br />
              • Reducing <strong>repetitive strain injuries</strong> during manual welding<br />
              • Integrating with robotic arms for <strong>fully autonomous systems</strong>
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
              <li><strong>High capital cost</strong> and infrastructure requirements</li>
              <li>Requires <strong>skilled technicians</strong> for programming and maintenance</li>
              <li><strong>Space limitations</strong> in smaller workshops or mobile setups</li>
              <li><strong>Mechanical wear and tear</strong> on moving parts</li>
              <li>Limited adaptability to <strong>irregular or small-scale components</strong></li>
              <li><strong>Downtime</strong> due to motor or control system failures</li>
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
              While initial investment is significant, the manipulator delivers:
              <br /><br />
              • <strong>Reduced labor costs</strong> by automating welding operations<br />
              • <strong>Higher production rates</strong> due to faster cycle times<br />
              • <strong>Lower defect rates</strong> leading to less rework and scrap<br />
              • <strong>Consistent weld quality</strong> with minimal supervision<br />
              • <strong>ROI</strong> achieved quickly in high-volume production environments
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
              <li>Perform <strong>pre-operation checks</strong> on mechanical and electrical components</li>
              <li>Ensure <strong>axis calibration</strong> before each welding cycle</li>
              <li>Use <strong>appropriate welding parameters</strong> for each material type</li>
              <li>Integrate with <strong>rotators</strong> for circumferential welding tasks</li>
              <li><strong>Schedule regular maintenance</strong> and update software/firmware</li>
              <li>Maintain a <strong>clean, obstacle-free workspace</strong> for full range motion</li>
            </ul>
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

export default Fac9Updated;

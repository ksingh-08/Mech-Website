import React from 'react';
import manipulatorImage from '../../newpics/3axis.jpeg';
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
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          The Welding Research Laboratory at the Department of Mechanical Mechatronics Engineering, LNMIIT, hosts a
          <strong> state-of-the-art 3-axis welding manipulator</strong>, engineered to support high-precision welding,
          advanced fabrication, and additive manufacturing applications.
        </p>
      </div>

      {/* Accordion Section */}
      <div className="px-6 md:px-12 lg:px-24">
        {/* Key Capabilities */}
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">1. Key Capabilities</p>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Mechanized Welding</li>
              <li>Underwater Wet Welding</li>
              <li>3D Metallic Printing</li>
            </ul>
            <p className="text-gray-700 mt-2">These capabilities make the manipulator suitable for a wide range of research and industrial scenarios.</p>
          </AccordionDetails>
        </Accordion>

        {/* Process Compatibility */}
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">2. Welding Process Compatibility</p>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="list-disc pl-6 text-gray-700">
              <li>SMAW – Shielded Metal Arc Welding</li>
              <li>SAW – Submerged Arc Welding</li>
              <li>GTAW – Gas Tungsten Arc Welding</li>
              <li>GMAW – Gas Metal Arc Welding</li>
              <li>PAW – Plasma Arc Welding</li>
              <li>Arc Surfacing, Cladding, Buttering, Arc Cutting</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* Specifications */}
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">3. Technical Specifications</p>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Load Capacity: Up to 500 kg</li>
              <li>Axis Range: 500 mm along each axis</li>
              <li>3D Printing Mode: Up to 100 passes</li>
              <li>Control: Simultaneous 3-axis movement</li>
              <li>Safety: Compliant with stringent electrical and mechanical standards</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* Precision & Safety */}
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">4. Precision and Safety</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              The system’s precise simultaneous control over three axes enables accurate profile welding. Its design
              adheres to strict safety regulations, ensuring a secure working environment for researchers and students.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Research Impact */}
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">5. Impact on Research</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              The integration of this manipulator has significantly enhanced the research capabilities of the Welding
              Research Laboratory, enabling advanced investigations in materials joining, cladding, and additive
              manufacturing.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Contact Info */}
        <Accordion className="!my-0 !rounded-none !border-b border-gray-300">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p className="font-semibold text-lg">6. Contact Information</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              <strong>Prof. Sunil Pandey</strong><br />
              Distinguished Professor<br />
              Department of Mechanical Mechatronics Engineering<br />
              LNMIIT, Jaipur<br />
              📞 +91 98681 13636
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

export default Fac9Updated;

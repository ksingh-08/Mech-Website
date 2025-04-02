import fl1 from '../../assets/fl1.png';
import smaw from '../../newpics/SMAW.jpeg';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Fac1Updated = () => {
  return (
    <>
      {/* Background Section */}
      <div className="relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={smaw}
            className="w-full h-full object-cover opacity-20 filter grayscale"
            alt="Background"
          />
          <div className="absolute inset-0 bg-red-500 opacity-20"></div> {/* Red Tint */}
        </div>

        <div className="relative text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2">
            Shielded Metal Arc Welding (SMAW)
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center -mt-20 z-0">
        <img
          src={smaw}
          className="h-80 border-4 border-gray-700 shadow-xl rounded-lg"
          alt="SMAW Machine"
        />
      </div>

      {/* Introduction Section */}
      <div className="px-6 md:px-12 lg:px-24 my-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction to SMAW</h2>

        <p className="text-gray-700 leading-relaxed">
          <strong>Shielded Metal Arc Welding (SMAW)</strong>, also known as <em>stick welding</em>, 
          is one of the most widely used and versatile welding processes. It involves the use of a 
          <strong>consumable electrode</strong> coated in flux to create an electric arc between 
          the electrode and the base material. The <em>flux coating</em> produces a <strong>shielding gas</strong> 
          to protect the weld from contaminants.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          SMAW is known for its <strong>simplicity, portability</strong>, and ability to weld 
          in <em>various positions</em>, making it a preferred choice in <strong>construction, maintenance, 
          and repair industries</strong>.
        </p>
      </div>

      {/* Accordion Section */}
      <div className="px-6 md:px-12 lg:px-24 my-10">
        {/* Working of SMAW */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            <p className="font-semibold text-lg">1. Working of SMAW (Including Components of SMAW)</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              Shielded Metal Arc Welding (SMAW) operates by creating an electric arc between a 
              flux-coated consumable electrode and the workpiece. The heat generated melts both 
              the electrode and the base material, forming a strong bond. The flux coating on 
              the electrode decomposes to create a shielding gas, preventing contamination.
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Key Components of SMAW:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Welding Power Source:</strong> Provides the necessary electrical energy.</li>
              <li><strong>Electrode Holder:</strong> Holds the electrode and conducts current.</li>
              <li><strong>Welding Cables:</strong> Connect power to the electrode and workpiece.</li>
              <li><strong>Electrodes:</strong> Supply filler material and shielding flux.</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* Application of SMAW */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
            <p className="font-semibold text-lg">2. Application of SMAW</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              SMAW is widely used in construction, pipeline welding, shipbuilding, and structural 
              fabrication. Its versatility allows welding in multiple positions and different 
              environments, including outdoor conditions.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Usage in Industry */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
            <p className="font-semibold text-lg">3. Usage in Industry</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              Industries such as automotive, aerospace, and oil & gas heavily rely on SMAW for 
              its durability and adaptability. It is also a go-to method for welding steel 
              structures and heavy machinery repairs.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Defects and Challenges */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content" id="panel4-header">
            <p className="font-semibold text-lg">4. Defects and Challenges</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              While SMAW is effective, it is prone to defects such as porosity, slag inclusion, 
              and lack of fusion. Challenges include high skill dependency and the need for 
              frequent electrode replacement.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Cost Effectiveness */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5-content" id="panel5-header">
            <p className="font-semibold text-lg">5. Cost Effectiveness</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              SMAW is a cost-effective welding process due to its low equipment costs and minimal 
              setup requirements. However, labor costs can increase due to manual operation.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Best Practices */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6-content" id="panel6-header">
            <p className="font-semibold text-lg">6. Best Practices</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-700">
              To ensure high-quality welds, welders should use the correct electrode type, 
              maintain proper arc length, and clean the workpiece thoroughly before welding.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Additional Resources */}
      <div className="flex justify-center my-8">
        <Button
          variant="contained"
          color="primary"
          href="https://en.wikipedia.org/wiki/Shielded_metal_arc_welding"
          target="_blank"
          size="large"
        >
          Learn More About SMAW
        </Button>
      </div>
    </>
  );
};

export default Fac1Updated;

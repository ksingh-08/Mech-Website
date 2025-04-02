import React from 'react';
import fl8 from '../../assets/fl8.jpg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Fac8Updated = () => {
  return (
    <>
      {/* Background Section */}
      <div className="relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={fl8} 
            className="w-full h-full object-cover opacity-20 filter grayscale"
            alt="Background"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-20"></div> {/* Blue Tint */}
        </div>

        <div className="relative text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto pb-2">
            Consumable Development in Welding
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center -mt-20 z-0">
        <img
          src={fl8} // ✅ Fixed: Use the imported image
          className="h-80 border-4 border-gray-700 shadow-xl rounded-lg"
          alt="Welding Consumables"
        />
      </div>

      {/* Introduction Section */}
      <div className="px-6 md:px-12 lg:px-24 my-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction to Welding Consumables</h2>

        <p className="text-gray-700 leading-relaxed">
          <strong>Welding consumables</strong> play a crucial role in welding processes by 
          providing the filler material required to join metal parts. These consumables include 
          <strong> electrodes, filler rods, and fluxes</strong>, which impact the weld quality, 
          strength, and efficiency.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          The development of welding consumables focuses on improving material properties, 
          reducing defects, and optimizing performance in <strong>various industrial applications</strong>.
        </p>
      </div>

      {/* Accordion Section */}
      <div className="px-6 md:px-12 lg:px-24 my-10">
        {/* Types of Welding Consumables */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              1. Types of Welding Consumables
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Welding consumables include:
            </Typography>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Electrodes:</strong> Used in SMAW, TIG, and MIG welding.</li>
              <li><strong>Filler Rods:</strong> Provides additional metal for fusion.</li>
              <li><strong>Fluxes:</strong> Protects the weld pool and enhances bonding.</li>
              <li><strong>Shielding Gases:</strong> Used in MIG and TIG processes for contamination prevention.</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* Importance of High-Quality Consumables */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              2. Importance of High-Quality Consumables
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              High-quality consumables ensure strong, defect-free welds. They reduce porosity, 
              improve mechanical properties, and enhance overall efficiency in welding applications.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Industrial Applications */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              3. Industrial Applications
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Welding consumables are essential in industries such as <strong>automotive, 
              construction, aerospace, and shipbuilding</strong>. Their selection depends on the 
              specific requirements of the application, including strength, corrosion resistance, 
              and environmental conditions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Challenges in Consumable Development */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content" id="panel4-header">
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              4. Challenges in Consumable Development
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The development of advanced welding consumables faces challenges such as:
            </Typography>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Ensuring <strong>consistent quality</strong> across batches.</li>
              <li>Developing materials with <strong>high strength and ductility</strong>.</li>
              <li>Reducing <strong>environmental impact</strong> of welding fumes and slag.</li>
              <li>Optimizing cost while maintaining <strong>performance standards</strong>.</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* Cost Considerations */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5-content" id="panel5-header">
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              5. Cost Considerations
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The cost of welding consumables varies based on material composition and 
              manufacturing processes. High-performance alloys may increase costs but provide 
              better durability and weld quality.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Best Practices in Consumable Selection */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6-content" id="panel6-header">
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              6. Best Practices in Consumable Selection
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To achieve optimal welding performance, consider:
            </Typography>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Matching the <strong>consumable material</strong> to the base metal.</li>
              <li>Using appropriate <strong>flux and shielding gases</strong>.</li>
              <li>Storing electrodes and filler materials in <strong>controlled environments</strong> to prevent contamination.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Additional Resources */}
      <div className="flex justify-center my-8">
        <Button
          variant="contained"
          color="primary"
          href="https://en.wikipedia.org/wiki/Welding_consumables"
          target="_blank"
          size="large"
        >
          Learn More About Welding Consumables
        </Button>
      </div>
    </>
  );
};

export default Fac8Updated;

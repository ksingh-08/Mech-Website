// import React from 'react';
// import fl4 from '../../assets/fl4.png';

// const Fac4Updated = () => {
//   return (
//     <>
//       {/* Top Section with Background Image */}
//       <div className='relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28'>
//         {/* Background Image with Red Tint */}
//         <div className='absolute inset-0 w-full h-full overflow-hidden'>
//           <img 
//             src={fl4} 
//             className='w-full h-full object-cover opacity-20 filter grayscale' 
//             alt="Background" 
//           />
//           <div className="absolute inset-0 bg-red-500 opacity-20"></div> {/* Red Tint */}
//         </div>

//         {/* Content on Top */}
//         <div className='relative text-center my-24'>
//           <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
//             Gas Tungsten Arc Welding
//           </h1>
//         </div>
//       </div>

//       {/* Main Image in Foreground */}
//       <div className='relative flex justify-center -mt-20 z-0'>
//         <img 
//           src={fl4} 
//           className='h-80 border-4 border-gray-700 shadow-xl' 
//           alt="GTAW Machine" 
//         />
//       </div>

//       {/* Description Section */}
//       <div className='px-5 md:px-12 lg:px-28 mt-10'>
//         <h1 className='text-[26px] font-semibold'>About GTAW:</h1>
//         <p className='my-3'>Gas Tungsten Arc Welding (GTAW), also known as Tungsten Inert Gas (TIG) welding, is a precise and high-quality welding process commonly used in industries requiring clean and strong welds. It is widely applied in aerospace, automotive, and stainless steel fabrication due to its superior control and minimal spatter.</p>

//         <h3 className='mt-5 text-[18px] font-semibold'>How GTAW Works</h3>
//         <p className='my-3'>GTAW utilizes a non-consumable tungsten electrode to create an electric arc that melts the base metal. An external shielding gas, typically argon or helium, protects the weld pool from atmospheric contamination. Filler metal may be added manually, depending on the application, allowing for precise control over the welding process.</p>

//         <h3 className='mt-5 text-[18px] font-semibold'>Key Features of GTAW</h3>
//         <ul className='list-disc pl-5 my-3'>
//           <li><strong>Welding Power Source:</strong> Provides a stable electrical current (AC or DC) for welding.</li>
//           <li><strong>Tungsten Electrode:</strong> Creates the arc and withstands high temperatures without melting.</li>
//           <li><strong>Welding Torch:</strong> Holds the tungsten electrode and directs shielding gas to the weld zone.</li>
//           <li><strong>Shielding Gas Supply:</strong> Prevents oxidation and contamination of the weld (usually argon or helium).</li>
//           <li><strong>Foot Pedal or Hand Control:</strong> Adjusts the heat input for precise welding control.</li>
//         </ul>

//         <h3 className='mt-5 text-[18px] font-semibold'>Conclusion</h3>
//         <p className='my-3'>GTAW is a highly precise and versatile welding process, ideal for applications requiring superior weld quality and minimal distortion. Its ability to produce clean, high-strength welds makes it essential in industries where precision is critical, such as aerospace, medical equipment, and stainless steel fabrication.</p>

//         <div className='my-8'>
//           <a 
//             href="https://en.wikipedia.org/wiki/Gas_tungsten_arc_welding" 
//             className='text-red-600 font-semibold underline' 
//             target='_blank'
//           >
//             Read More on Wikipedia
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Fac4Updated;

import React from 'react';
import fl4 from '../../assets/fl4.png'; // Replace with actual image
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Fac4Updated = () => {
  return (
    <>
      {/* Background Section */}
      <div className="relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={fl4}
            className="w-full h-full object-cover opacity-20 filter grayscale"
            alt="3-Axis Welding Manipulator Background"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
        </div>

        <div className="relative text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto pb-2">
          Gas Tungsten Arc Welding (GTAW)
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center -mt-20 z-0">
        <img
          src={fl4}
          className="h-80 border-4 border-gray-700 shadow-xl rounded-lg"
          alt="3-Axis Welding Manipulator"
        />
      </div>

     {/* Introduction Section */}
<div className="px-6 md:px-12 lg:px-24 my-8">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction to Gas Tungsten Arc Welding (GTAW)</h2>
  <p className="text-gray-700 leading-relaxed">
    <strong>Gas Tungsten Arc Welding (GTAW)</strong>, also known as <strong>TIG Welding</strong>, is a precise arc welding process that uses a non-consumable tungsten electrode to produce high-quality welds. 
    It is commonly used for thin materials and non-ferrous metals, offering excellent control, clean welds, and minimal spatter. 
    GTAW is essential in industries that demand superior weld integrity and aesthetic finish.
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
        GTAW uses a <strong>non-consumable tungsten electrode</strong> to create an arc that melts the base metal. 
        A <strong>shielding gas</strong>, typically argon or helium, protects the weld pool from atmospheric contamination.
        <br /><br />
        Components of the process:
        <br />
        • <strong>Tungsten Electrode</strong> – Maintains the arc without melting<br />
        • <strong>Shielding Gas</strong> – Prevents oxidation and contamination<br />
        • <strong>Filler Metal (Optional)</strong> – Added separately as needed<br /><br />
        Modes of operation:
        <br />
        • <strong>Manual GTAW</strong> – For precision welds with high operator control<br />
        • <strong>Automated TIG</strong> – CNC or PLC-controlled systems for repeatable accuracy<br />
        • <strong>Pulsed TIG</strong> – Offers better heat control on thin materials
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
        <li><strong>Aerospace</strong> component fabrication</li>
        <li><strong>Nuclear and power plant</strong> piping systems</li>
        <li><strong>Food and beverage</strong> equipment manufacturing</li>
        <li><strong>Medical device</strong> assembly</li>
        <li><strong>Automotive parts</strong>, exhausts, and frames</li>
        <li><strong>Artistic and architectural</strong> metalwork</li>
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
        GTAW is widely used in industries that require <strong>high weld quality</strong>, cleanliness, and precision such as:
        <br /><br />
        • <strong>Aerospace and defense</strong> – For thin and high-strength metals<br />
        • <strong>Pharmaceutical & food</strong> – Sanitary welds with no contamination<br />
        • <strong>Automotive & motorsports</strong> – For performance parts and fine joints<br />
        • <strong>Medical equipment</strong> – Precise and clean weld seams<br />
        • <strong>Custom fabrication</strong> – When appearance and detail matter
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
        <li><strong>Slower welding speed</strong> compared to other processes</li>
        <li>Requires <strong>high operator skill</strong> and coordination</li>
        <li><strong>Contamination</strong> if shielding gas coverage is inadequate</li>
        <li><strong>Not ideal</strong> for thick materials without automation</li>
        <li><strong>Expensive equipment</strong> and training requirements</li>
        <li><strong>Environmental sensitivity</strong> to airflow and drafts</li>
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
        While GTAW is slower and more costly per weld, it offers:
        <br /><br />
        • <strong>Superior weld quality</strong> with minimal rework<br />
        • <strong>Clean finishes</strong> requiring little or no post-processing<br />
        • <strong>Accurate heat control</strong> for thin or sensitive materials<br />
        • <strong>Lower defect rates</strong> in high-value components<br />
        • Long-term <strong>cost savings</strong> in precision-critical applications
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
        <li>Use <strong>pure argon</strong> or argon-helium shielding gas for protection</li>
        <li>Keep <strong>tungsten electrodes clean and sharp</strong></li>
        <li><strong>Clean base metals</strong> thoroughly before welding</li>
        <li>Practice <strong>torch angle and filler rod timing</strong></li>
        <li>Ensure <strong>adequate ventilation</strong> and safety gear</li>
        <li>Employ <strong>pulsed TIG settings</strong> for heat-sensitive applications</li>
      </ul>
    </AccordionDetails>
  </Accordion>
</div>


      {/* Learn More Button */}
      <div className="flex justify-center my-8">
        <Button
          variant="contained"
          color="primary"
          href="https://www.sciencedirect.com/topics/engineering/gas-tungsten-arc-welding"
          target="_blank"
          size="large"
        >
          Learn More About GTAW
        </Button>
      </div>
    </>
  );
};

export default Fac4Updated;

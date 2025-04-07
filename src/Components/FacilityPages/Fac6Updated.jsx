// import React from 'react';
// import fl6 from '../../newpics/Robotic.jpeg';

// const Fac6Updated = () => {
//   return (
//     <>
//       {/* Top Section with Background Image */}
//       <div className='relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28'>
//         {/* Background Image with Red Tint */}
//         <div className='absolute inset-0 w-full h-full overflow-hidden'>
//           <img 
//             src={fl6} 
//             className='w-full h-full object-cover opacity-20 filter grayscale' 
//             alt="Background" 
//           />
//           <div className="absolute inset-0 bg-red-500 opacity-20"></div> {/* Red Tint */}
//         </div>

//         {/* Content on Top */}
//         <div className='relative text-center my-24'>
//           <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
//             Robotic Arm Welding
//           </h1>
//         </div>
//       </div>

//       {/* Main Image in Foreground */}
//       <div className='relative flex justify-center -mt-20 z-0'>
//         <img 
//           src={fl6} 
//           className='h-80 border-4 border-gray-700 shadow-xl' 
//           alt="Robotic Arm Welding" 
//         />
//       </div>

//       {/* Description Section */}
//       <div className='px-5 md:px-12 lg:px-28 mt-10'>
//         <h1 className='text-[26px] font-semibold'>About RAW:</h1>
//         <p className='my-3'>Robotic Arm Welding is an advanced welding process that utilizes automated robotic systems to perform precise and efficient welding operations. It is widely used in automotive, aerospace, and heavy manufacturing industries due to its consistency, speed, and ability to handle complex welding tasks with minimal human intervention.</p>

//         <h3 className='mt-5 text-[18px] font-semibold'>How RAW Works</h3>
//         <p className='my-3'>Robotic welding systems consist of a programmable robotic arm equipped with a welding torch. The arm follows pre-programmed welding paths to create high-quality, repeatable welds. These systems can use various welding processes, such as Gas Metal Arc Welding (GMAW), Gas Tungsten Arc Welding (GTAW), and Plasma Arc Welding (PAW), depending on the application. Sensors and cameras may be integrated for real-time adjustments and precision.</p>

//         <h3 className='mt-5 text-[18px] font-semibold'>Key Features of RAW</h3>
//         <ul className='list-disc pl-5 my-3'>
//           <li><strong>Robotic Arm:</strong> Performs automated welding movements with high precision.</li>
//           <li><strong>Welding Power Source:</strong> Supplies the necessary current for the chosen welding process.</li>
//           <li><strong>Welding Torch:</strong> Mounted on the robotic arm to execute welding operations.</li>
//           <li><strong>Control System:</strong> Programs and directs the robotic arm’s movements.</li>
//           <li><strong>Sensors & Cameras (Optional):</strong> Improve accuracy and adaptability to variations in the workpiece.</li>
//         </ul>

//         <h3 className='mt-5 text-[18px] font-semibold'>Conclusion</h3>
//         <p className='my-3'>Robotic Arm Welding is a highly efficient and reliable process, ideal for mass production and high-precision welding applications. Its automation reduces labor costs, increases production speed, and enhances weld consistency, making it a critical technology in modern manufacturing industries.</p>

//         <div className='my-8'>
//           <a 
//             href="https://en.wikipedia.org/wiki/Robot_welding" 
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

// export default Fac6Updated;


import React from 'react';
import fl6 from '../../newpics/Robotic.jpeg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Fac6Updated = () => {
  return (
    <>
      {/* Background Section */}
      <div className="relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={fl6}
            className="w-full h-full object-cover opacity-20 filter grayscale"
            alt="3-Axis Welding Manipulator Background"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
        </div>

        <div className="relative text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto pb-2">
         Robotic Arm Welding(RAW)
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center -mt-20 z-0">
        <img
          src={fl6}
          className="h-80 border-4 border-gray-700 shadow-xl rounded-lg"
          alt="3-Axis Welding Manipulator"
        />
      </div>

     {/* Introduction Section */}
<div className="px-6 md:px-12 lg:px-24 my-8">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction to Robotic Arc Welding</h2>
  <p className="text-gray-700 leading-relaxed">
    <strong>Robotic Arc Welding</strong> is an advanced automated welding process where industrial robots perform welding tasks using arc-based methods like MIG or TIG.
    It is widely adopted in high-volume production environments for its precision, consistency, and ability to reduce human error. 
    This process enhances productivity while maintaining uniform weld quality across complex geometries.
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
        Robotic arc welding uses a programmable robotic arm equipped with a welding torch to execute precise welding motions.
        These robots operate on predefined paths using coordinate systems and sensors.
        <br /><br />
        Key components:
        <br />
        • <strong>Robotic arm</strong> – Performs consistent and repeatable welding motions<br />
        • <strong>Controller unit</strong> – Manages programming and motion control<br />
        • <strong>Welding power source</strong> – Supplies energy for arc generation<br />
        • <strong>Sensors & vision systems</strong> – Provide real-time feedback for adaptive control<br /><br />
        Welding techniques:
        <br />
        • <strong>MIG/MAG</strong> – Common for robotic applications<br />
        • <strong>TIG</strong> – For high-precision welds (less common)<br />
        • <strong>Laser hybrid welding</strong> – Used in high-end automated setups
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
        <li><strong>Automotive manufacturing</strong> (chassis, exhausts, and body parts)</li>
        <li><strong>Heavy machinery</strong> and agricultural equipment fabrication</li>
        <li><strong>Shipbuilding</strong> and structural assemblies</li>
        <li><strong>Aerospace components</strong> requiring repeatable welds</li>
        <li><strong>Metal furniture</strong> and consumer appliance fabrication</li>
        <li><strong>Railway car and track production</strong></li>
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
        Robotic welding systems are critical in sectors focused on <strong>mass production and consistent quality</strong>:
        <br /><br />
        • <strong>Automotive</strong> – For fast, accurate, and repeatable welds<br />
        • <strong>Defense and aerospace</strong> – Precision on complex alloys<br />
        • <strong>General manufacturing</strong> – High throughput with minimal defects<br />
        • <strong>Heavy fabrication</strong> – Reduces manual workload and increases uptime<br />
        • <strong>Energy and power</strong> – For boiler, pipe, and wind turbine welding
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
        <li><strong>High initial investment</strong> in robots and integration</li>
        <li><strong>Limited flexibility</strong> for low-volume or complex custom jobs</li>
        <li><strong>Programming errors</strong> can lead to repeated defects</li>
        <li><strong>Sensor calibration</strong> and maintenance are critical</li>
        <li><strong>Downtime risks</strong> if robotic systems fail</li>
        <li>Requires <strong>specialized workforce</strong> for operation and troubleshooting</li>
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
        Robotic welding offers long-term savings and high ROI for large-scale operations:
        <br /><br />
        • <strong>Reduces labor costs</strong> and reliance on skilled manual welders<br />
        • <strong>Minimizes defects</strong> and rework time<br />
        • <strong>Boosts production rate</strong> with consistent output<br />
        • <strong>Enhances safety</strong> by removing humans from hazardous zones<br />
        • <strong>Predictable operational costs</strong> due to automation
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
        <li>Use <strong>fixture design</strong> to ensure repeatable part positioning</li>
        <li>Perform <strong>thorough calibration and testing</strong> before deployment</li>
        <li>Regularly maintain <strong>robot arms, torches, and sensors</strong></li>
        <li><strong>Use quality filler wire</strong> and shielding gases as specified</li>
        <li><strong>Train operators</strong> in programming and safety protocols</li>
        <li>Incorporate <strong>real-time monitoring</strong> for adaptive control</li>
      </ul>
    </AccordionDetails>
  </Accordion>
</div>



      {/* Learn More Button */}
      <div className="flex justify-center my-8">
        <Button
          variant="contained"
          color="primary"
          href="https://www.universal-robots.com/in/blog/what-is-robotic-welding/"
          target="_blank"
          size="large"
        >
          Learn More About RAW
        </Button>
      </div>
    </>
  );
};

export default Fac6Updated;

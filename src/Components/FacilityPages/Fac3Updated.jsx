// import React from 'react';
// import fl3 from '../../newpics/GMAW.jpeg';

// const Fac3Updated = () => {
//   return (
//     <>
//       {/* Top Section with Background Image */}
//       <div className='relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28'>
//         {/* Background Image with Red Tint */}
//         <div className='absolute inset-0 w-full h-full overflow-hidden'>
//           <img 
//             src={fl3} 
//             className='w-full h-full object-cover opacity-20 filter grayscale' 
//             alt="Background" 
//           />
//           <div className="absolute inset-0 bg-red-500 opacity-20"></div> {/* Red Tint */}
//         </div>

//         {/* Content on Top */}
//         <div className='relative text-center my-24'>
//           <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
//             Gas Metal Arc Welding (GMAW)
//           </h1>
//         </div>
//       </div>

//       {/* Main Image in Foreground */}
//       <div className='relative flex justify-center -mt-20 z-0'>
//         <img 
//           src={fl3} 
//           className='h-80 border-4 border-gray-700 shadow-xl rounded-lg' 
//           alt="GMAW Machine" 
//         />
//       </div>

//       {/* Description Section */}
//       <div className='px-5 md:px-12 lg:px-28 mt-10'>
//         <h1 className='text-[26px] font-semibold'>About GMAW:</h1>
//         <p className='my-3 text-gray-800'>Gas Metal Arc Welding (GMAW), commonly known as MIG (Metal Inert Gas) welding, is a widely used welding process known for its efficiency, ease of use, and ability to produce high-quality welds. It is commonly applied in automotive, construction, and manufacturing industries due to its versatility and high deposition rates.</p>

//         <h3 className='mt-5 text-[18px] font-semibold'>How GMAW Works</h3>
//         <p className='my-3 text-gray-700'>GMAW utilizes a continuously fed consumable electrode (welding wire) and an external shielding gas to protect the weld pool from atmospheric contamination. An electric arc is established between the electrode and the workpiece, generating the heat needed to melt and fuse the materials, resulting in a strong and clean weld.</p>

//         <h3 className='mt-5 text-[18px] font-semibold'>Key Features of GMAW</h3>
//         <ul className='list-disc pl-5 my-3 text-gray-700'>
//           <li><strong>Welding Power Source:</strong> Provides the electrical current necessary for welding.</li>
//           <li><strong>Wire Feeder:</strong> Feeds the consumable wire electrode into the welding arc.</li>
//           <li><strong>Welding Gun:</strong> Directs the wire electrode and shielding gas to the weld area.</li>
//           <li><strong>Shielding Gas Supply:</strong> Protects the molten weld pool from oxidation (commonly Argon, CO₂, or a mix of both).</li>
//           <li><strong>Ground Clamp:</strong> Completes the electrical circuit for stable welding.</li>
//         </ul>

//         <h3 className='mt-5 text-[18px] font-semibold'>Conclusion</h3>
//         <p className='my-3 text-gray-700'>GMAW is a fast, efficient, and versatile welding process suitable for various industries. Its ability to produce clean, high-quality welds with minimal slag makes it an essential technique in fabrication and repair work. Whether for thin sheet metal or heavy structural components, GMAW continues to be a preferred choice for welders worldwide.</p>

//         <div className='my-8'>
//           <a 
//             href="https://en.wikipedia.org/wiki/Gas_metal_arc_welding" 
//             className='text-red-600 font-semibold underline hover:text-red-800 transition duration-200' 
//             target='_blank'
//           >
//             Read More on Wikipedia
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Fac3Updated;




import React from 'react';
import fl3 from '../../newpics/GMAW.jpeg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Fac3Updated = () => {
  return (
    <>
      {/* Background Section */}
      <div className="relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={fl3}
            className="w-full h-full object-cover opacity-20 filter grayscale"
            alt="3-Axis Welding Manipulator Background"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
        </div>

        <div className="relative text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto pb-2">
          Gas Metal Arc Welding (GMAW)
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center -mt-20 z-0">
        <img
          src={fl3}
          className="h-80 border-4 border-gray-700 shadow-xl rounded-lg"
          alt="3-Axis Welding Manipulator"
        />
      </div>

    {/* Introduction Section */}
<div className="px-6 md:px-12 lg:px-24 my-8">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction to Gas Metal Arc Welding (GMAW)</h2>
  <p className="text-gray-700 leading-relaxed">
    <strong>Gas Metal Arc Welding (GMAW)</strong>, commonly known as <strong>MIG (Metal Inert Gas) Welding</strong>, is a semi-automatic or automatic arc welding process 
    that uses a continuously fed consumable wire electrode and a shielding gas to create the weld. GMAW is widely recognized for its high welding speed, ease of use, and adaptability 
    across a range of materials and thicknesses. It is frequently used in fabrication, automotive, and industrial manufacturing settings.
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
        In GMAW, an electric arc forms between a continuously fed <strong>consumable wire electrode</strong> and the base metal, melting both to form a weld pool.
        A <strong>shielding gas</strong> (typically argon, CO₂, or a mix) protects the weld from atmospheric contamination.
        <br /><br />
        Core components:
        <br />
        • <strong>Welding gun</strong> – Feeds wire and delivers shielding gas<br />
        • <strong>Wire feed unit</strong> – Supplies the consumable electrode<br />
        • <strong>Power source</strong> – Provides constant voltage for stable arc<br />
        • <strong>Shielding gas</strong> – Prevents weld contamination<br /><br />
        Modes of metal transfer:
        <br />
        • <strong>Short-circuiting</strong> – For thinner materials<br />
        • <strong>Globular</strong> – High deposition, but more spatter<br />
        • <strong>Spray</strong> – Smooth, stable arc for thicker sections<br />
        • <strong>Pulsed spray</strong> – Combines spray benefits with better control
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
        <li><strong>Automotive manufacturing</strong> (body panels, frames)</li>
        <li><strong>Sheet metal fabrication</strong></li>
        <li><strong>Structural steel welding</strong> and construction</li>
        <li><strong>Pressure vessels</strong> and piping fabrication</li>
        <li><strong>General maintenance and repair</strong> operations</li>
        <li><strong>Railway, shipbuilding, and agricultural equipment</strong></li>
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
        GMAW is used across a broad spectrum of industries for its speed and automation potential:
        <br /><br />
        • <strong>Automotive and transportation</strong> – For chassis and bodywork<br />
        • <strong>Shipbuilding</strong> – Large metal components and panels<br />
        • <strong>Heavy equipment</strong> – For durable joints in machinery<br />
        • <strong>Construction</strong> – Steel frame fabrication and site welding<br />
        • <strong>Manufacturing</strong> – Batch production of welded components
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
        <li><strong>Porosity</strong> due to inadequate shielding gas coverage</li>
        <li><strong>Spatter</strong> especially in globular transfer mode</li>
        <li><strong>Lack of fusion</strong> if parameters are not optimized</li>
        <li><strong>Wire feeding issues</strong> from poor maintenance or liner damage</li>
        <li><strong>Not ideal for outdoor use</strong> due to wind affecting gas coverage</li>
        <li><strong>Heat distortion</strong> on thinner materials without pulse control</li>
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
        GMAW is considered highly cost-effective, especially for production environments:
        <br /><br />
        • <strong>High deposition rates</strong> mean faster welding<br />
        • <strong>Low training time</strong> compared to TIG or SMAW<br />
        • <strong>Automation ready</strong>  Easily integrated with welding robots<br />
        • <strong>Low consumable costs</strong> with bulk wire spools<br />
        • <strong>Minimal cleanup</strong> required with proper settings<br />
        • <strong>Excellent return on investment</strong> in high-volume operations
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
        <li>Use the <strong>correct shielding gas</strong> for the material (e.g., Ar-CO₂ mix)</li>
        <li><strong>Maintain consistent stick-out</strong> and travel speed</li>
        <li><strong>Clean base metal</strong> to prevent contamination and porosity</li>
        <li>Choose the <strong>right transfer mode</strong> for the application</li>
        <li>Perform <strong>regular maintenance</strong> on the wire feed system</li>
        <li>Use <strong>spatter control techniques</strong> to reduce cleanup time</li>
      </ul>
    </AccordionDetails>
  </Accordion>
</div>



      {/* Learn More Button */}
      <div className="flex justify-center my-8">
        <Button
          variant="contained"
          color="primary"
          href="https://www.sciencedirect.com/topics/engineering/gas-metal-arc-welding#:~:text=Gas%20metal%20arc%20welding%20(GMAW)%20is%20a%20high%2Dspeed,for%20the%20weld%20(2)."
          target="_blank"
          size="large"
        >
          Learn More About GMAW
        </Button>
      </div>
    </>
  );
};

export default Fac3Updated;

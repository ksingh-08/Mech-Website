import React from 'react';
import fl8 from '../../assets/fl8.jpg';

const Fac8Updated = () => {
  return (
    <>
      {/* Top Section with Background Image */}
      <div className='relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28'>
        {/* Background Image with Red Tint */}
        <div className='absolute inset-0 w-full h-full overflow-hidden'>
          <img 
            src={fl8} 
            className='w-full h-full object-cover opacity-20 filter grayscale' 
            alt="Background" 
          />
          <div className="absolute inset-0 bg-red-500 opacity-20"></div> {/* Red Tint */}
        </div>

        {/* Content on Top */}
        <div className='relative text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
            Consumable Development
          </h1>
        </div>
      </div>

      {/* Main Image in Foreground */}
      <div className='relative flex justify-center -mt-20 z-0'>
        <img 
          src={fl8} 
          className='h-80 border-4 border-gray-700 shadow-xl' 
          alt="Consumable Development" 
        />
      </div>

      {/* Description Section */}
      <div className='px-5 md:px-12 lg:px-28 mt-10'>
        <h1 className='text-[26px] font-semibold'>About Consumable Development:</h1>
        <p className='my-3'>Consumable Development refers to the research, design, and enhancement of materials used in welding, cutting, and other industrial processes. These consumables, such as electrodes, wires, flux, and shielding gases, play a critical role in ensuring efficiency, quality, and durability in various applications across industries like automotive, aerospace, and construction.</p>

        <h3 className='mt-5 text-[18px] font-semibold'>How Consumable Development Works</h3>
        <p className='my-3'>The development process involves selecting and formulating materials that optimize performance in specific applications. Engineers and researchers analyze factors such as composition, melting characteristics, and compatibility with different metals to enhance productivity and weld quality. Innovations in consumable development aim to improve efficiency, reduce defects, and adapt to evolving industry demands.</p>

        <h3 className='mt-5 text-[18px] font-semibold'>Key Features of Consumable Development</h3>
        <ul className='list-disc pl-5 my-3'>
          <li><strong>Electrodes & Filler Wires:</strong> Designed for specific welding processes like SMAW, GMAW, and GTAW.</li>
          <li><strong>Flux & Coatings:</strong> Enhance weld penetration, stability, and slag removal.</li>
          <li><strong>Shielding Gases:</strong> Protect the weld pool from contamination and improve arc performance.</li>
          <li><strong>Cutting Consumables:</strong> Such as plasma torch nozzles and oxyfuel tips for precise cutting applications.</li>
          <li><strong>Testing & Research Equipment:</strong> Used for quality control, performance evaluation, and material optimization.</li>
        </ul>

        <h3 className='mt-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>Consumable Development is essential for advancing welding and cutting technologies, ensuring better efficiency, quality, and adaptability to modern manufacturing needs. Continuous research and innovation in consumables lead to improved performance, cost savings, and sustainable solutions in various industrial applications.</p>

        <div className='my-8'>
          <a 
            href="https://www.sciencedirect.com/topics/materials-science/welding-consumables" 
            className='text-red-600 font-semibold underline' 
            target='_blank'
          >
            Read More on ScienceDirect
          </a>
        </div>
      </div>
    </>
  );
};

export default Fac8Updated;

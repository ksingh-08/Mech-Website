import React from 'react';
import fl3 from '../../newpics/GMAW.jpeg';

const Fac3Updated = () => {
  return (
    <>
      {/* Top Section with Background Image */}
      <div className='relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28'>
        {/* Background Image with Red Tint */}
        <div className='absolute inset-0 w-full h-full overflow-hidden'>
          <img 
            src={fl3} 
            className='w-full h-full object-cover opacity-20 filter grayscale' 
            alt="Background" 
          />
          <div className="absolute inset-0 bg-red-500 opacity-20"></div> {/* Red Tint */}
        </div>

        {/* Content on Top */}
        <div className='relative text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
            Gas Metal Arc Welding (GMAW)
          </h1>
        </div>
      </div>

      {/* Main Image in Foreground */}
      <div className='relative flex justify-center -mt-20 z-0'>
        <img 
          src={fl3} 
          className='h-80 border-4 border-gray-700 shadow-xl rounded-lg' 
          alt="GMAW Machine" 
        />
      </div>

      {/* Description Section */}
      <div className='px-5 md:px-12 lg:px-28 mt-10'>
        <h1 className='text-[26px] font-semibold'>About GMAW:</h1>
        <p className='my-3 text-gray-800'>Gas Metal Arc Welding (GMAW), commonly known as MIG (Metal Inert Gas) welding, is a widely used welding process known for its efficiency, ease of use, and ability to produce high-quality welds. It is commonly applied in automotive, construction, and manufacturing industries due to its versatility and high deposition rates.</p>

        <h3 className='mt-5 text-[18px] font-semibold'>How GMAW Works</h3>
        <p className='my-3 text-gray-700'>GMAW utilizes a continuously fed consumable electrode (welding wire) and an external shielding gas to protect the weld pool from atmospheric contamination. An electric arc is established between the electrode and the workpiece, generating the heat needed to melt and fuse the materials, resulting in a strong and clean weld.</p>

        <h3 className='mt-5 text-[18px] font-semibold'>Key Features of GMAW</h3>
        <ul className='list-disc pl-5 my-3 text-gray-700'>
          <li><strong>Welding Power Source:</strong> Provides the electrical current necessary for welding.</li>
          <li><strong>Wire Feeder:</strong> Feeds the consumable wire electrode into the welding arc.</li>
          <li><strong>Welding Gun:</strong> Directs the wire electrode and shielding gas to the weld area.</li>
          <li><strong>Shielding Gas Supply:</strong> Protects the molten weld pool from oxidation (commonly Argon, CO₂, or a mix of both).</li>
          <li><strong>Ground Clamp:</strong> Completes the electrical circuit for stable welding.</li>
        </ul>

        <h3 className='mt-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3 text-gray-700'>GMAW is a fast, efficient, and versatile welding process suitable for various industries. Its ability to produce clean, high-quality welds with minimal slag makes it an essential technique in fabrication and repair work. Whether for thin sheet metal or heavy structural components, GMAW continues to be a preferred choice for welders worldwide.</p>

        <div className='my-8'>
          <a 
            href="https://en.wikipedia.org/wiki/Gas_metal_arc_welding" 
            className='text-red-600 font-semibold underline hover:text-red-800 transition duration-200' 
            target='_blank'
          >
            Read More on Wikipedia
          </a>
        </div>
      </div>
    </>
  );
};

export default Fac3Updated;

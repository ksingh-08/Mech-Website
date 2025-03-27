import React from 'react';
import fl2 from '../../newpics/SAW.jpeg';

const Fac2Updated = () => {
  return (
    <>
      {/* Top Section with Background Image */}
      <div className='relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28'>
        {/* Background Image with Red Tint */}
        <div className='absolute inset-0 w-full h-full overflow-hidden'>
          <img 
            src={fl2} 
            className='w-full h-full object-cover opacity-20 filter grayscale' 
            alt="Background" 
          />
          <div className="absolute inset-0 bg-red-500 opacity-20"></div> {/* Red Tint */}
        </div>

        {/* Content on Top */}
        <div className='relative text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
            Submerged Arc Welding
          </h1>
        </div>
      </div>

      {/* Main Image in Foreground */}
      <div className='relative flex justify-center -mt-20 z-0'>
        <img 
          src={fl2} 
          className='h-80 border-4 border-gray-700 shadow-xl' 
          alt="SAW Machine" 
        />
      </div>

      {/* Description Section */}
      <div className='px-5 md:px-12 lg:px-28 mt-10'>
        <h1 className='text-[26px] font-semibold'>About SAW:</h1>
        <p className='my-3'>Submerged Arc Welding (SAW) is a high-efficiency welding process widely used in heavy industries. It is known for its deep penetration, high deposition rates, and ability to produce high-quality welds with minimal defects. SAW is commonly used in structural fabrication, shipbuilding, and pipeline construction.</p>

        <h3 className='mt-5 text-[18px] font-semibold'>How SAW Works</h3>
        <p className='my-3'>SAW involves creating an electric arc between a continuously fed consumable electrode and the workpiece. The arc is completely submerged under a blanket of granular flux, which protects the weld pool from atmospheric contamination. As the electrode melts, it fuses with the base metal, forming a strong and uniform weld.</p>

        <h3 className='mt-5 text-[18px] font-semibold'>Key Features of SAW</h3>
        <ul className='list-disc pl-5 my-3'>
          <li><strong>Welding Power Source:</strong> Supplies the necessary electrical current for welding.</li>
          <li><strong>Wire Feeder:</strong> Continuously feeds the electrode into the welding zone.</li>
          <li><strong>Flux Delivery System:</strong> Distributes granular flux over the arc to protect the weld pool.</li>
          <li><strong>Welding Head or Torch:</strong> Guides the electrode and controls the welding arc.</li>
          <li><strong>Conveyor or Travel Mechanism:</strong> Moves the welding head along the joint for automated operation.</li>
        </ul>

        <h3 className='mt-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>SAW is a highly efficient and reliable welding process, particularly suited for thick-section welding in heavy industries. Its ability to produce high-quality, defect-free welds with minimal operator intervention makes it an essential technique in structural and mechanical fabrication.</p>

        <div className='my-8'>
          <a 
            href="https://en.wikipedia.org/wiki/Submerged_arc_welding" 
            className='text-red-600 font-semibold underline' 
            target='_blank'
          >
            Read More on Wikipedia
          </a>
        </div>
      </div>
    </>
  );
};

export default Fac2Updated;

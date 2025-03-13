import React from 'react';
import fl1 from '../../assets/fl1.png';

const Fac1Updated = () => {
  return (
    <>
      {/* Top Section with Background Image */}
      <div className='relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28'>
        {/* Background Image */}
        <div className='absolute inset-0 w-full h-full overflow-hidden'>
          <img 
            src={fl1} 
            className='w-full h-full object-cover opacity-10 filter grayscale' 
            alt="Background" 
          />
        </div>
          


        {/* Content on Top */}
        <div className='relative text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
            Shielded Metal Arc Welding
          </h1>
        </div>
      </div>

      {/* Main Image in Foreground */}
      <div className='relative flex justify-center -mt-20 z-0'> {/* Lowered z-index */}
        <img 
          src={fl1} 
          className='h-80 border-4 border-gray-700 shadow-xl' 
          alt="SMAW Machine" 
        />
      </div>

      {/* Description Section */}
      <div className='px-5 md:px-12 lg:px-28 mt-10'>
        <h1 className='text-[26px] font-semibold'>About SMAW:</h1>
        <p className='my-3'>Shielded Metal Arc Welding (SMAW) is one of the most widely used and versatile welding processes in the mechanical industry. It is renowned for its simplicity, portability, and adaptability to various applications.</p>

        <h3 className='mt-5 text-[18px] font-semibold'>How SMAW Works</h3>
        <p className='my-3'>In SMAW, the welding process combines electrical energy with a flux-coated electrode. This generates a controlled arc that creates intense heat, which melts the workpiece and electrode, forming a strong bond between metals.</p>

        <h3 className='mt-5 text-[18px] font-semibold'>Key Features of SMAW</h3>
        <ul className='list-disc pl-5 my-3'>
          <li><strong>Welding Power Source:</strong> Supplies the electric current necessary for welding.</li>
          <li><strong>Electrode Holder:</strong> Holds the electrode securely and conducts current to it.</li>
          <li><strong>Welding Cables:</strong> Connect the power source to the electrode holder and workpiece.</li>
          <li><strong>Electrodes:</strong> Provide the filler material and flux coating required for welding.</li>
        </ul>

        <h3 className='mt-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>SMAW is a versatile and reliable welding process suitable for a wide range of applications. Whether for structural fabrication or repair work, SMAW continues to play a vital role in welding technology.</p>

        <div className='my-8'>
          <a 
            href="https://en.wikipedia.org/wiki/Shielded_metal_arc_welding" 
            className='text-blue-600 font-semibold underline' 
            target='_blank'
          >
            Read More on Wikipedia
          </a>
        </div>
      </div>
    </>
  );
};

export default Fac1Updated;

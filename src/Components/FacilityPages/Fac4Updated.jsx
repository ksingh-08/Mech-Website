import React from 'react';
import fl4 from '../../assets/fl4.png';

const Fac4Updated = () => {
  return (
    <>
      {/* Top Section with Background Image */}
      <div className='relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28'>
        {/* Background Image with Red Tint */}
        <div className='absolute inset-0 w-full h-full overflow-hidden'>
          <img 
            src={fl4} 
            className='w-full h-full object-cover opacity-20 filter grayscale' 
            alt="Background" 
          />
          <div className="absolute inset-0 bg-red-500 opacity-20"></div> {/* Red Tint */}
        </div>

        {/* Content on Top */}
        <div className='relative text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
            Gas Tungsten Arc Welding
          </h1>
        </div>
      </div>

      {/* Main Image in Foreground */}
      <div className='relative flex justify-center -mt-20 z-0'>
        <img 
          src={fl4} 
          className='h-80 border-4 border-gray-700 shadow-xl' 
          alt="GTAW Machine" 
        />
      </div>

      {/* Description Section */}
      <div className='px-5 md:px-12 lg:px-28 mt-10'>
        <h1 className='text-[26px] font-semibold'>About GTAW:</h1>
        <p className='my-3'>Gas Tungsten Arc Welding (GTAW), also known as Tungsten Inert Gas (TIG) welding, is a precise and high-quality welding process commonly used in industries requiring clean and strong welds. It is widely applied in aerospace, automotive, and stainless steel fabrication due to its superior control and minimal spatter.</p>

        <h3 className='mt-5 text-[18px] font-semibold'>How GTAW Works</h3>
        <p className='my-3'>GTAW utilizes a non-consumable tungsten electrode to create an electric arc that melts the base metal. An external shielding gas, typically argon or helium, protects the weld pool from atmospheric contamination. Filler metal may be added manually, depending on the application, allowing for precise control over the welding process.</p>

        <h3 className='mt-5 text-[18px] font-semibold'>Key Features of GTAW</h3>
        <ul className='list-disc pl-5 my-3'>
          <li><strong>Welding Power Source:</strong> Provides a stable electrical current (AC or DC) for welding.</li>
          <li><strong>Tungsten Electrode:</strong> Creates the arc and withstands high temperatures without melting.</li>
          <li><strong>Welding Torch:</strong> Holds the tungsten electrode and directs shielding gas to the weld zone.</li>
          <li><strong>Shielding Gas Supply:</strong> Prevents oxidation and contamination of the weld (usually argon or helium).</li>
          <li><strong>Foot Pedal or Hand Control:</strong> Adjusts the heat input for precise welding control.</li>
        </ul>

        <h3 className='mt-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>GTAW is a highly precise and versatile welding process, ideal for applications requiring superior weld quality and minimal distortion. Its ability to produce clean, high-strength welds makes it essential in industries where precision is critical, such as aerospace, medical equipment, and stainless steel fabrication.</p>

        <div className='my-8'>
          <a 
            href="https://en.wikipedia.org/wiki/Gas_tungsten_arc_welding" 
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

export default Fac4Updated;

import React from 'react';
import fl7 from '../../newpics/Plasma.jpeg';

const Fac7Updated = () => {
  return (
    <>
      {/* Top Section with Background Image */}
      <div className='relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28'>
        {/* Background Image with Red Tint */}
        <div className='absolute inset-0 w-full h-full overflow-hidden'>
          <img 
            src={fl7} 
            className='w-full h-full object-cover opacity-20 filter grayscale' 
            alt="Background" 
          />
          <div className="absolute inset-0 bg-red-500 opacity-20"></div> {/* Red Tint */}
        </div>

        {/* Content on Top */}
        <div className='relative text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
            Plasma Cutting
          </h1>
        </div>
      </div>

      {/* Main Image in Foreground */}
      <div className='relative flex justify-center -mt-20 z-0'>
        <img 
          src={fl7} 
          className='h-80 border-4 border-gray-700 shadow-xl' 
          alt="Plasma Cutting" 
        />
      </div>

      {/* Description Section */}
      <div className='px-5 md:px-12 lg:px-28 mt-10'>
        <h1 className='text-[26px] font-semibold'>About Plasma Cutting :</h1>
        <p className='my-3'>Plasma Cutting is a high-precision metal cutting process that uses a jet of ionized gas (plasma) to cut through electrically conductive materials. It is widely used in industrial fabrication, automotive repair, and metal recycling due to its speed, accuracy, and ability to cut through thick materials efficiently.</p>

        <h3 className='mt-5 text-[18px] font-semibold'>How Plasma Cutting Works</h3>
        <p className='my-3'>Plasma Cutting works by creating an electrical arc between a consumable or non-consumable electrode and the workpiece. This arc ionizes the gas, turning it into plasma, which reaches extremely high temperatures and melts the metal. A high-velocity stream of gas then blows away the molten metal, producing a clean and precise cut.</p>

        <h3 className='mt-5 text-[18px] font-semibold'>Key Features of Plasma Cutting</h3>
        <ul className='list-disc pl-5 my-3'>
          <li><strong>Plasma Cutter:</strong> Generates the plasma arc for cutting.</li>
          <li><strong>Power Source:</strong> Supplies the electrical energy required for ionization.</li>
          <li><strong>Cutting Torch:</strong> Directs the plasma jet onto the workpiece.</li>
          <li><strong>Gas Supply:</strong> Provides compressed air or other gases (such as nitrogen or argon) to form the plasma.</li>
          <li><strong>CNC System (Optional):</strong> Automates cutting paths for high precision and complex designs.</li>
        </ul>

        <h3 className='mt-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>Plasma Cutting is a fast, efficient, and versatile cutting process, ideal for a wide range of industrial and fabrication applications. Its ability to cut through thick metals with precision and minimal heat distortion makes it an essential technology in metalworking industries, from small workshops to large-scale manufacturing.</p>

        <div className='my-8'>
          <a 
            href="https://en.wikipedia.org/wiki/Plasma_cutting" 
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

export default Fac7Updated;

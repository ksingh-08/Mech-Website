import React from 'react';
import fl6 from '../../newpics/Robotic.jpeg';

const Fac6Updated = () => {
  return (
    <>
      {/* Top Section with Background Image */}
      <div className='relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28'>
        {/* Background Image with Red Tint */}
        <div className='absolute inset-0 w-full h-full overflow-hidden'>
          <img 
            src={fl6} 
            className='w-full h-full object-cover opacity-20 filter grayscale' 
            alt="Background" 
          />
          <div className="absolute inset-0 bg-red-500 opacity-20"></div> {/* Red Tint */}
        </div>

        {/* Content on Top */}
        <div className='relative text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
            Robotic Arm Welding
          </h1>
        </div>
      </div>

      {/* Main Image in Foreground */}
      <div className='relative flex justify-center -mt-20 z-0'>
        <img 
          src={fl6} 
          className='h-80 border-4 border-gray-700 shadow-xl' 
          alt="Robotic Arm Welding" 
        />
      </div>

      {/* Description Section */}
      <div className='px-5 md:px-12 lg:px-28 mt-10'>
        <h1 className='text-[26px] font-semibold'>About RAW:</h1>
        <p className='my-3'>Robotic Arm Welding is an advanced welding process that utilizes automated robotic systems to perform precise and efficient welding operations. It is widely used in automotive, aerospace, and heavy manufacturing industries due to its consistency, speed, and ability to handle complex welding tasks with minimal human intervention.</p>

        <h3 className='mt-5 text-[18px] font-semibold'>How RAW Works</h3>
        <p className='my-3'>Robotic welding systems consist of a programmable robotic arm equipped with a welding torch. The arm follows pre-programmed welding paths to create high-quality, repeatable welds. These systems can use various welding processes, such as Gas Metal Arc Welding (GMAW), Gas Tungsten Arc Welding (GTAW), and Plasma Arc Welding (PAW), depending on the application. Sensors and cameras may be integrated for real-time adjustments and precision.</p>

        <h3 className='mt-5 text-[18px] font-semibold'>Key Features of RAW</h3>
        <ul className='list-disc pl-5 my-3'>
          <li><strong>Robotic Arm:</strong> Performs automated welding movements with high precision.</li>
          <li><strong>Welding Power Source:</strong> Supplies the necessary current for the chosen welding process.</li>
          <li><strong>Welding Torch:</strong> Mounted on the robotic arm to execute welding operations.</li>
          <li><strong>Control System:</strong> Programs and directs the robotic arm’s movements.</li>
          <li><strong>Sensors & Cameras (Optional):</strong> Improve accuracy and adaptability to variations in the workpiece.</li>
        </ul>

        <h3 className='mt-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>Robotic Arm Welding is a highly efficient and reliable process, ideal for mass production and high-precision welding applications. Its automation reduces labor costs, increases production speed, and enhances weld consistency, making it a critical technology in modern manufacturing industries.</p>

        <div className='my-8'>
          <a 
            href="https://en.wikipedia.org/wiki/Robot_welding" 
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

export default Fac6Updated;

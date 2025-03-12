import React from 'react'
import fl6 from '../../assets/fl6.png'


const Fac6Updated = () => {
  return (
    <>
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
            Robotic Arm Welding
          </h1>
        </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <img src={fl6} className='h-80 border-4 border-white mx-auto' alt="RAW" />
        <h1 className='my-8 text-[26px] font-semibold'>About RAW:</h1>
        <p>Robotic Arm Welding is an advanced welding process that utilizes automated robotic systems to perform precise and efficient welding operations. It is widely used in automotive, aerospace, and heavy manufacturing industries due to its consistency, speed, and ability to handle complex welding tasks with minimal human intervention.</p>
        <h3 className='my-5 text-[18px] font-semibold'>How RAW Works</h3>
        <p className='my-3'>Robotic welding systems consist of a programmable robotic arm equipped with a welding torch. The arm follows pre-programmed welding paths to create high-quality, repeatable welds. These systems can use various welding processes, such as Gas Metal Arc Welding (GMAW), Gas Tungsten Arc Welding (GTAW), and Plasma Arc Welding (PAW), depending on the application. Sensors and cameras may be integrated for real-time adjustments and precision.</p>
        <h3 className='my-5 text-[18px] font-semibold'>Key Features of RAW</h3>
        <p className='my-3'>1. Equipment</p>
        <p className='my-3'>The primary equipment required for RAW includes:</p>
        <p className='my-3'>Robotic Arm: Performs automated welding movements with high precision.</p>
        <p className='my-3'>Welding Power Source: Supplies the necessary current for the chosen welding process.</p>
        <p className='my-3'>Welding Torch: Mounted on the robotic arm to execute welding operations.</p>
        <p className='my-3'>Control System: Programs and directs the robotic arms movements.</p>
        <p className='my-3'>Sensors & Cameras (Optional): Improve accuracy and adaptability to variations in the workpiece.
        </p>

        <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>Robotic Arm Welding is a highly efficient and reliable process, ideal for mass production and high-precision welding applications. Its automation reduces labor costs, increases production speed, and enhances weld consistency, making it a critical technology in modern manufacturing industries.</p>
        
        <div className='my-24'>
            <a href="https://en.wikipedia.org/wiki/Robot_welding" className='text-black font-semibold my-4 underline' target='_blank'>Link for the whole article </a>
        </div>
      </div>

    </>
  )
}

export default Fac6Updated

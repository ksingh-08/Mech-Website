import React from 'react'
import fl4 from '../../assets/fl4.png'

const Fac4Updated = () => {
  return (
    <>
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
          Gas Tungsten Arc Welding
          </h1>
        </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <img src={fl4} className='h-80 border-4 border-white mx-auto' alt="GMAW" />
        <h1 className='my-8 text-[26px] font-semibold'>About GTAW:</h1>
        <p>Gas Tungsten Arc Welding (GTAW), also known as Tungsten Inert Gas (TIG) welding, is a precise and high-quality welding process commonly used in industries requiring clean and strong welds. It is widely applied in aerospace, automotive, and stainless steel fabrication due to its superior control and minimal spatter.</p>
        <h3 className='my-5 text-[18px] font-semibold'>How GTAW Works</h3>
        <p className='my-3'>GTAW utilizes a non-consumable tungsten electrode to create an electric arc that melts the base metal. An external shielding gas, typically argon or helium, protects the weld pool from atmospheric contamination. Filler metal may be added manually, depending on the application, allowing for precise control over the welding process.</p>
        <h3 className='my-5 text-[18px] font-semibold'>Key Features of GTAW</h3>
        <p className='my-3'>1. Equipment</p>
        <p className='my-3'>The primary equipment required for GTAW includes:</p>
        <p className='my-3'>Welding Power Source: Provides a stable electrical current (AC or DC) for welding.</p>
        <p className='my-3'>Tungsten Electrode: Creates the arc and withstands high temperatures without melting.</p>
        <p className='my-3'>Welding Torch: Holds the tungsten electrode and directs shielding gas to the weld zone.</p>
        <p className='my-3'>Shielding Gas Supply: Prevents oxidation and contamination of the weld (usually argon or helium).</p>
        <p className='my-3'>Foot Pedal or Hand Control: Adjusts the heat input for precise welding control. </p>

        <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>GTAW is a highly precise and versatile welding process, ideal for applications requiring superior weld quality and minimal distortion. Its ability to produce clean, high-strength welds makes it essential in industries where precision is critical, such as aerospace, medical equipment, and stainless steel fabrication.</p>
        
        <div className='my-24'>
            <a href="https://en.wikipedia.org/wiki/Gas_tungsten_arc_welding" className='text-black font-semibold my-4 underline' target='_blank'>Link for the whole article </a>
        </div>
      </div>

    </>
  )
}

export default Fac4Updated

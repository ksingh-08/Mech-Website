import React from 'react'
import fl3 from '../../assets/fl3.jpg'

const Fac3Updated = () => {
  return (
    <>
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
          Gas Metal Arc Welding
          </h1>
        </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <img src={fl3} className='h-80 border-4 border-white mx-auto' alt="GMAW" />
        <h1 className='my-8 text-[26px] font-semibold'>About GMAW:</h1>
        <p>Gas Metal Arc Welding (GMAW), commonly known as MIG (Metal Inert Gas) welding, is a widely used welding process known for its efficiency, ease of use, and ability to produce high-quality welds. It is commonly applied in automotive, construction, and manufacturing industries due to its versatility and high deposition rates.</p>
        <h3 className='my-5 text-[18px] font-semibold'>How GMAW Works</h3>
        <p className='my-3'>GMAW utilizes a continuously fed consumable electrode (welding wire) and an external shielding gas to protect the weld pool from atmospheric contamination. An electric arc is established between the electrode and the workpiece, generating the heat needed to melt and fuse the materials, resulting in a strong and clean weld.</p>
        <h3 className='my-5 text-[18px] font-semibold'>Key Features of GMAW</h3>
        <p className='my-3'>1. Equipment</p>
        <p className='my-3'>The primary equipment required for GMAW includes:</p>
        <p className='my-3'>Welding Power Source: Provides the electrical current necessary for welding.</p>
        <p className='my-3'>Wire Feeder: Feeds the consumable wire electrode into the welding arc.</p>
        <p className='my-3'>Welding Gun: Directs the wire electrode and shielding gas to the weld area.</p>
        <p className='my-3'>Shielding Gas Supply: Protects the molten weld pool from oxidation (commonly Argon, CO₂, or a mix of both).</p>
        <p className='my-3'>Ground Clamp: Completes the electrical circuit for stable welding.</p>

        <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>GMAW is a fast, efficient, and versatile welding process suitable for various industries. Its ability to produce clean, high-quality welds with minimal slag makes it an essential technique in fabrication and repair work. Whether for thin sheet metal or heavy structural components, GMAW continues to be a preferred choice for welders worldwide.</p>
        
        <div className='my-24'>
            <a href="https://en.wikipedia.org/wiki/Gas_metal_arc_welding" className='text-black font-semibold my-4 underline' target='_blank'>Link for the whole article </a>
        </div>
      </div>

    </>
  )
}

export default Fac3Updated

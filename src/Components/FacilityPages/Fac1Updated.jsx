import React from 'react'
import fl1 from '../../assets/fl1.png'

const Fac1Updated = () => {
  return (
    <>
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
             Shielded Metal Arc Welding
          </h1>
        </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <img src={fl1} className='h-80 border-4 border-white mx-auto' alt="SMAW" />
        <h1 className='my-8 text-[26px] font-semibold'>About SMAW:</h1>
        <p>Shielded Metal Arc Welding (SMAW) is one of the most widely used and versatile welding processes in the mechanical industry. It is renowned for its simplicity, portability, and adaptability to various applications. SMAW involves establishing an electric arc between a flux-coated electrode and the workpiece, generating the heat required to melt the base metal and filler material.</p>
        <h3 className='my-5 text-[18px] font-semibold'>How SMAW Works</h3>
        <p className='my-3'>In SMAW, the welding process combines electrical energy with a flux-coated electrode. This generates a controlled arc that creates intense heat, which melts the workpiece and electrode, forming a strong bond between metals.</p>
        
        <h3 className='my-5 text-[18px] font-semibold'>Key Features of SMAW</h3>
        <p className='my-3'>1. Equipment</p>
        <p className='my-3'>The primary equipment required for SMAW includes:</p>
        <p className='my-3'>Welding Power Source: Supplies the electric current necessary for welding.</p>
        <p className='my-3'>Electrode Holder: Holds the electrode securely and conducts current to it.</p>
        <p className='my-3'>Welding Cables: Connect the power source to the electrode holder and workpiece.</p>
        <p className='my-3'>Electrodes: Provide the filler material and flux coating required for welding.</p>

        <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>SMAW is a versatile and reliable welding process suitable for a wide range of applications. Its simplicity, adaptability, and cost-effectiveness make it an essential technique in the mechanical and construction industries. Whether for structural fabrication or repair work, SMAW continues to play a vital role in welding technology.</p>
        
        <div className='my-24'>
            <a href="https://en.wikipedia.org/wiki/Shielded_metal_arc_welding" className='text-black font-semibold my-4 underline' target='_blank'>Link for the whole article </a>
        </div>
      </div>

    </>
  )
}

export default Fac1Updated

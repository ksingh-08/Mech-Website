import React from 'react'
import fl2 from '../../assets/fl2.jpg'

const Fac2Updated = () => {
  return (
    <>
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
          Submerged Arc Welding
          </h1>
        </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <img src={fl2} className='h-80 border-4 border-white mx-auto' alt="SAW" />
        <h1 className='my-8 text-[26px] font-semibold'>About SAW:</h1>
        <p>Submerged Arc Welding (SAW) is a high-efficiency welding process widely used in heavy industries. It is known for its deep penetration, high deposition rates, and ability to produce high-quality welds with minimal defects. SAW is commonly used in structural fabrication, shipbuilding, and pipeline construction.</p>
        <h3 className='my-5 text-[18px] font-semibold'>How SAW Works</h3>
        <p className='my-3'>SAW involves creating an electric arc between a continuously fed consumable electrode and the workpiece. The arc is completely submerged under a blanket of granular flux, which protects the weld pool from atmospheric contamination. As the electrode melts, it fuses with the base metal, forming a strong and uniform weld.</p>
        <h3 className='my-5 text-[18px] font-semibold'>Key Features of SAW</h3>
        <p className='my-3'>1. Equipment</p>
        <p className='my-3'>The primary equipment required for SAW includes:</p>
        <p className='my-3'>Welding Power Source: Supplies the necessary electrical current for welding.</p>
        <p className='my-3'>Wire Feeder: Continuously feeds the electrode into the welding zone.</p>
        <p className='my-3'>Flux Delivery System: Distributes granular flux over the arc to protect the weld pool.</p>
        <p className='my-3'>Welding Head or Torch: Guides the electrode and controls the welding arc.</p>
        <p className='my-3'>Conveyor or Travel Mechanism: Moves the welding head along the joint for automated operation.</p>

        <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>SAW is a highly efficient and reliable welding process, particularly suited for thick-section welding in heavy industries. Its ability to produce high-quality, defect-free welds with minimal operator intervention makes it an essential technique in structural and mechanical fabrication.</p>
        
        <div className='my-24'>
            <a href="https://en.wikipedia.org/wiki/Submerged_arc_welding" className='text-black font-semibold my-4 underline' target='_blank'>Link for the whole article </a>
        </div>
      </div>

    </>
  )
}

export default Fac2Updated

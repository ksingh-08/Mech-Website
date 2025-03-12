import React from 'react'
import fl8 from '../../assets/fl8.jpg'


const Fac8Updated = () => {
  return (
    <>
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
          Consumable Development
          </h1>
        </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <img src={fl8} className='h-80 border-4 border-white mx-auto' alt="CD" />
        <h1 className='my-8 text-[26px] font-semibold'>About Consumable Development :</h1>
        <p>Consumable Development refers to the research, design, and enhancement of materials used in welding, cutting, and other industrial processes. These consumables, such as electrodes, wires, flux, and shielding gases, play a critical role in ensuring efficiency, quality, and durability in various applications across industries like automotive, aerospace, and construction.</p>
        <h3 className='my-5 text-[18px] font-semibold'>How Consumable Development Works</h3>
        <p className='my-3'>The development process involves selecting and formulating materials that optimize performance in specific applications. Engineers and researchers analyze factors such as composition, melting characteristics, and compatibility with different metals to enhance productivity and weld quality. Innovations in consumable development aim to improve efficiency, reduce defects, and adapt to evolving industry demands.</p>
        <h3 className='my-5 text-[18px] font-semibold'>Key Features of Consumable Development</h3>
        <p className='my-3'>1. Equipment</p>
        <p className='my-3'>The primary equipment required for Consumable Development includes:</p>
        <p className='my-3'>Electrodes & Filler Wires: Designed for specific welding processes like SMAW, GMAW, and GTAW.</p>
        <p className='my-3'>Flux & Coatings: Enhance weld penetration, stability, and slag removal.</p>
        <p className='my-3'>Shielding Gases: Protect the weld pool from contamination and improve arc performance.</p>
        <p className='my-3'>Cutting Consumables: Such as plasma torch nozzles and oxyfuel tips for precise cutting applications.</p>
        <p className='my-3'>Testing & Research Equipment: Used for quality control, performance evaluation, and material optimization.
        </p>

        <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>Consumable Development is essential for advancing welding and cutting technologies, ensuring better efficiency, quality, and adaptability to modern manufacturing needs. Continuous research and innovation in consumables lead to improved performance, cost savings, and sustainable solutions in various industrial applications.</p>
        
        <div className='my-24'>
            <a href="https://www.sciencedirect.com/topics/materials-science/welding-consumables" className='text-black font-semibold my-4 underline' target='_blank'>Link for the whole article </a>
        </div>
      </div>

    </>
  )
}

export default Fac8Updated

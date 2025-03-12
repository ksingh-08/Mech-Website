import React from 'react'
import fl7 from '../../assets/fl7.png'


const Fac7Updated = () => {
  return (
    <>
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2'>
          Plasma Cutting
          </h1>
        </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <img src={fl7} className='h-80 border-4 border-white mx-auto' alt="Plasma" />
        <h1 className='my-8 text-[26px] font-semibold'>About Plasma Cutting :</h1>
        <p>Plasma Cutting is a high-precision metal cutting process that uses a jet of ionized gas (plasma) to cut through electrically conductive materials. It is widely used in industrial fabrication, automotive repair, and metal recycling due to its speed, accuracy, and ability to cut through thick materials efficiently.</p>
        <h3 className='my-5 text-[18px] font-semibold'>How Plasma Cutting Works</h3>
        <p className='my-3'>Plasma Cutting works by creating an electrical arc between a consumable or non-consumable electrode and the workpiece. This arc ionizes the gas, turning it into plasma, which reaches extremely high temperatures and melts the metal. A high-velocity stream of gas then blows away the molten metal, producing a clean and precise cut.</p>
        <h3 className='my-5 text-[18px] font-semibold'>Key Features of Plasma Cutting</h3>
        <p className='my-3'>1. Equipment</p>
        <p className='my-3'>The primary equipment required for Plasma Cutting includes:</p>
        <p className='my-3'>Plasma Cutter: Generates the plasma arc for cutting.</p>
        <p className='my-3'>Power Source: Supplies the electrical energy required for ionization.</p>
        <p className='my-3'>Cutting Torch: Directs the plasma jet onto the workpiece.</p>
        <p className='my-3'>Gas Supply: Provides compressed air or other gases (such as nitrogen or argon) to form the plasma.</p>
        <p className='my-3'>CNC System (Optional): Automates cutting paths for high precision and complex designs.</p>

        <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>Plasma Cutting is a fast, efficient, and versatile cutting process, ideal for a wide range of industrial and fabrication applications. Its ability to cut through thick metals with precision and minimal heat distortion makes it an essential technology in metalworking industries, from small workshops to large-scale manufacturing.</p>
        
        <div className='my-24'>
            <a href="https://en.wikipedia.org/wiki/Plasma_cutting" className='text-black font-semibold my-4 underline' target='_blank'>Link for the whole article </a>
        </div>
      </div>

    </>
  )
}

export default Fac7Updated

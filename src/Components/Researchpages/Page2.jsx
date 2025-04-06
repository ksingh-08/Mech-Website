// import React from 'react'
// import './Page2.css'
// import res2 from'../../assets/2new.jpg'
// const Page2 = () => {
//   return (
//     <div>
//     <div class="container1">
//     <img className="fotu" src={res2} alt="Description Image"/>
//     <div class="description1">
//       <h2><u>Experimental analysis of dissimilar metal weld joint: Ferritic to austenitic stainless steel</u></h2>

//       <p> <h3>Description:</h3>The dissimilar metal weld (DMW) joint between SA508Gr.3Cl.1 ferritic steel and SS304LN using Inconel 82/182 consumables was required in the nuclear power plants. The joint integrity assessment of these welds requires mechanical and metallurgical properties evaluation in weldment regions. The joint was subjected to 100% radiography test and bend test and transverse tensile test. Welding and testing were carried out as per the requirements of ASME Sec-IX and acceptance criteria as per ASME Sec-III. The transverse tensile test results indicated the failure from the weld metal although it satisfies the minimum strength requirement of the ASME requirements; therefore, the DMW joint was analyzed in detail. Straight bead deposition technique, fine slag inclusion, less reliable radiograph technique, plastic instability stress, yield strength ratio and metallurgical deteriorations have been contributed to failure of the DMW joint from the weld region. In the present work, the factors contributing to the fracture from weld metal have been discussed and analyzed.
// </p>

// <br />
// <p>Link to full research paper: <a target="_blank" style={{color:'#0716df'}} href="https://sci-hub.se/10.1016/j.msea.2015.05.011
// ">https://sci-hub.se/10.1016/j.msea.2015.05.011
// </a></p>

//     </div>
//   </div>
      
//     </div>
//   )
// }

// export default Page2
import React from "react";

import res2 from'../../assets/2new.jpg'
import { motion } from "framer-motion";

const Page2 = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-b from-white to-gray-100 pt-24 pb-10 md:p-4">

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="rounded-3xl bg-white/30 backdrop-blur-lg border border-gray-200 shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full"
      >
        
        <img
          src={res2}
          alt="About Welding"
          className="w-full md:w-[500px] h-[300px] rounded-2xl  shadow-md"
        />

      
        <div className="text-gray-800">
        <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900">
        Experimental analysis of dissimilar metal weld joint: Ferritic to austenitic stainless steel
</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
          The dissimilar metal weld (DMW) joint between SA508Gr.3Cl.1 ferritic steel and SS304LN using Inconel 82/182 consumables is required in nuclear power plants. Ensuring the integrity of these welds necessitates a thorough evaluation of their mechanical and metallurgical properties in the weldment regions.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
          The joint underwent a 100% radiography test, bend test, and transverse tensile test. Welding and testing were conducted in accordance with ASME Section IX, and the results were evaluated against the acceptance criteria outlined in ASME Section III. The transverse tensile test results showed failure in the weld metal. Although the weld met the minimum strength requirements set by ASME standards, the occurrence of failure prompted a more detailed analysis of the DMW joint.
          </p>
          <p className="text-gray-700 leading-relaxed">
          <p className="mb-4 text-gray-700 leading-relaxed">
          Several factors were identified as contributors to the weld region failure, including the straight bead deposition technique, fine slag inclusions, limitations of the radiographic inspection method, plastic instability stress, an unfavorable yield strength ratio, and metallurgical deteriorations. This work presents a comprehensive discussion and analysis of these contributing factors to better understand the causes of fracture in the weld metal of the DMW joint.
          </p>
          <p>Link to full research paper: <a target="_blank" style={{color:'#0716df'}} href="https://sci-hub.se/10.1016/j.msea.2015.05.011
          ">https://sci-hub.se/10.1016/j.msea.2015.05.011
          </a></p>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Page2;

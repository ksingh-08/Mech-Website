// import React from 'react'
// import './Page3.css'
// import res3 from'../../assets/3new.jpg'
// const Page3 = () => {
//   return (
//     <div>
//     <div class="container1">
//     <img className="fotu" src={res3} alt="Description Image"/>
//     <div class="description1">
//       <h2><u>Effect of process parameters on friction stir welding of aluminum alloy 2219-T87</u></h2>
//       <p><h3>Description:</h3> In this work, successful friction stir welding of aluminum alloy 2219 using an adapted milling machine is reported. The downward or forging force was found to be dependent upon shoulder diameter and rotational speed whereas longitudinal or welding force on welding speed and pin diameter. Tensile strength of welds was significantly affected by welding speed and shoulder diameter whereas welding speed strongly affected percentage elongation. Metallographic studies revealed fine equiaxed grains in weld nugget and microstructural changes in thermo-mechanically affected zone were found to be the result of combined and interactive influences of frictional heat and deformation. A maximum joining efficiency of 75% was obtained for welds with reasonably good percentage elongation. TEM studies indicated coarsening and/or dissolving of precipitates in nugget. For the gas metal arc weld, SEM investigations revealed segregation of copper at grain boundaries in partially melted zone.
// </p>
// <br />
// <p>Link to full research paper: <a target="_blank" style={{color:'#0716df'}} href="https://sci-hub.se/10.1007/s00170-010-2560-3
// ">https://sci-hub.se/10.1007/s00170-010-2560-3
// </a></p>

//     </div>
//   </div>
      
//     </div>
//   )
// }

// export default Page3
import React from "react";
import res3 from'../../assets/3new.jpg'
import { motion } from "framer-motion";

const Page3 = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-b from-white to-gray-100 md:p-auto pt-32 md:pl-0 md:pr-0 pl-4 pr-4 pb-10 ">

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="rounded-3xl bg-white/30 pt-28 backdrop-blur-lg border border-gray-200 shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full  "
      >
        
        <img
          src={res3}
          alt="About Welding"
          className="w-full md:w-[500px] h-[300px] rounded-2xl  shadow-md"
        />

      
        <div className="text-gray-800">
        <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900">
        Effect of process parameters on friction stir welding of aluminum alloy 2219-T87
</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
          In this work, successful friction stir welding of aluminum alloy 2219 using an adapted milling machine is reported. The research found that the downward or forging force was dependent upon shoulder diameter and rotational speed, while the longitudinal or welding force depended on welding speed and pin diameter.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
          The mechanical properties were influenced by welding parameters. Tensile strength was affected by welding speed and shoulder diameter, whereas percentage elongation was strongly influenced by welding speed alone.
          </p>
          <p className="text-gray-700 leading-relaxed">
          <p className="mb-4 text-gray-700 leading-relaxed">
          Metallographic studies revealed fine equiaxed grains in the weld nugget and showed that microstructural changes in the thermo-mechanically affected zone resulted from combined influences of frictional heat and deformation. A maximum joining efficiency of 75% was obtained for welds with good percentage elongation.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
          TEM studies indicated coarsening and/or dissolving of precipitates in the nugget region. For comparison, SEM investigation of a gas metal arc weld revealed segregation of copper at grain boundaries in the partially melted zone.RetryClaude can make mistakes. Please double-check responses.
          </p>
          <p>Link to full research paper: <a target="_blank" style={{color:'#0716df'}} href="https://sci-hub.se/10.1007/s00170-010-2560-3
 ">https://sci-hub.se/10.1007/s00170-010-2560-3
 </a></p>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Page3;

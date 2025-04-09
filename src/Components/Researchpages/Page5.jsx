// import React from 'react'
// import './Page5.css'
// import res5 from'../../assets/5new.png'
// const Page5 = () => {
//   return (
//     <div>
//     <div class="container1">
//     <img style={{ width: '370px', height: '250px' }} className="fotu" src={res5} alt="Description Image"/>
//     <div class="description1">
//       <h2><u>A robust Taguchi combined AHP approach for optimizing AISI 1023 low carbon steel weldments in the SAW process</u>
// </h2>
//       <p><h3>Description:</h3>In this work, the researcher used a robust Taguchi design coupled with the analytic hierarchy process (AHP) approach; the purpose is to obtain optimum welding conditions which can receive effective bead geometry for AISI 1023 low carbon steel weldments in the submerged arc welding (SAW) process. Input process parameters were chosen for welding condition voltage, welding speed, wire feed rate and nozzle to plate distance and experimentally planed with the help of Taguchi’s L16 array for investigation. Responses were chosen bead width, reinforcement, penetration, angle of entry, and angle of convexity. Very few researchers have selected the response parameters such as angle of entry and angle of convexity for bead geometry study to obtain optimum welding conditions using the Taguchi based AHP approach. Optimum welding condition was found as Voltage 44 V, welding speed (WS) 4 mm/s, Wire feed rate(WFR) 28 mm/s and nozzle to plate distance(NPD) 21 mm. Voltage was observed to be the most influenced parameter for penetration, and welding speed was observed to be the most affected parameter for the rest of the responses.</p>
//       <br />
// <p>Link to full research paper: <a target="_blank"style={{color:'#0716df'}} href="https://link.springer.com/article/10.1007/s12008-023-01307-7
// ">https://link.springer.com/article/10.1007/s12008-023-01307-7
// </a></p>


//     </div>
//   </div>
      
//     </div>
//   )
// }

// export default Page5

import React from "react";
import res5 from'../../assets/5new.png'
import { motion } from "framer-motion";

const Page5= () => {
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-b from-white to-gray-100 md:p-auto pt-32 md:pl-0 md:pr-0 pl-4 pr-4 pb-10 ">

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="rounded-3xl bg-white/30 backdrop-blur-lg border border-gray-200 shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full"
      >
        
        <img
          src={res5}
          alt="About Welding"
          className="w-full md:w-[500px] h-[400px] rounded-2xl  shadow-md"
        />

      
        <div className="text-gray-800">
        <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900">
        A robust Taguchi combined AHP approach for optimizing AISI 1023 low carbon steel weldments in the SAW process
</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
          In this study, the researcher employed a robust Taguchi design integrated with the Analytic Hierarchy Process (AHP) to determine the optimal welding conditions that would produce effective bead geometry in AISI 1023 low carbon steel weldments using the submerged arc welding (SAW) process. This combined approach aimed to enhance the precision and reliability of the parameter optimization process by taking into account both experimental data and decision-making hierarchies.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
          The selected input process parameters included welding voltage, welding speed, wire feed rate, and nozzle-to-plate distance. These were systematically varied using Taguchi’s L16 orthogonal array to structure the experimental plan efficiently. The study focused on five bead geometry responses: bead width, reinforcement, penetration, angle of entry, and angle of convexity. Notably, the inclusion of angle of entry and angle of convexity as response variables is relatively rare in SAW research, making this study particularly distinctive in its comprehensive evaluation of weld bead characteristics.
          </p>
          <p className="text-gray-700 leading-relaxed">
          <p className="mb-4 text-gray-700 leading-relaxed">
          Through the Taguchi-based AHP methodology, the optimum welding conditions were determined to be a voltage of 44 V, welding speed of 4 mm/s, wire feed rate of 28 mm/s, and nozzle-to-plate distance of 21 mm. Among all input parameters, voltage was found to have the most significant influence on weld penetration. Meanwhile, welding speed emerged as the most critical factor affecting the remaining response variables, including bead width, reinforcement, and bead angles. This work highlights the effectiveness of combining Taguchi design with AHP for multi-response optimization in welding applications.
          </p>
         
          <p>Link to full research paper: <a target="_blank"style={{color:'#0716df'}} href="https://link.springer.com/article/10.1007/s12008-023-01307-7
 ">https://link.springer.com/article/10.1007/s12008-023-01307-7
 </a></p>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Page5;
// import React from 'react'
// import './Page4.css'
// import res4 from'../../assets/4new.jpg'
// const Page4 = () => {
//   return (
//     <div>
//     <div class="container1">
//     <img className="fotu" src={res4} alt="Description Image"/>
//     <div class="description1">
//       <h2><u>Experimental investigation and optimization of weld bead characteristics during submerged arc welding of AISI 1023 steel</u>
// </h2>
//       <p><h3>Description:</h3>Submerged arc welding (SAW), owing to its high deposition rate and high welding quality, is widely used in the fabrication of pressure vessel, marine vessel, pipelines and offshore structures. However, selection of an optimum combination of welding parameters is critical in achieving high weld quality and productivity. In this work, initially, the SAW experiments were performed using fractional factorial design to analyze the effect of direct and indirect input parameters, namely, welding voltage, wire feed rate, welding speed, nozzle to plate distance, flux condition, and plate thickness on weld bead geometrical responses viz. bead width, reinforcement, and penetration. The bead on plate technique was used to deposit weld metal on AISI 1023 steel plates. The effect of SAW input parameters on response variables were analyzed using main and interaction effects. The linear regression was used to develop the mathematical models for the response variable. Then, the multi-objective optimization of input parameters was carried out using desirability approach, genetic algorithm and Jaya algorithm. The Jaya algorithm offered better optimization results as compared to desirability approach, genetic algorithm.
// </p>
// <br />
// <p>Link to full research paper: <a target="_blank" style={{color:'#0716df'}} href="https://sci-hub.se/10.1016/j.dt.2018.08.004
// ">https://sci-hub.se/10.1016/j.dt.2018.08.004
// </a></p>

//     </div>
//   </div>
      
//     </div>
//   )
// }

// export default Page4

import React from "react";
import res4 from'../../assets/4new.jpg'
import { motion } from "framer-motion";

const Page4= () => {
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-b from-white to-gray-100 md:p-auto pt-32 md:pl-0 md:pr-0 pl-4 pr-4 pb-10">

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="rounded-3xl bg-white/30 backdrop-blur-lg border border-gray-200 shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full"
      >
        
        <img
          src={res4}
          alt="About Welding"
          className="w-full md:w-[500px] h-[500px] rounded-2xl  shadow-md"
        />

      
        <div className="text-gray-800">
        <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900">
        Experimental investigation and optimization of weld bead characteristics during submerged arc welding of AISI 1023 steel
</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
          Submerged arc welding (SAW) is widely recognized for its high deposition rate and exceptional weld quality, making it a preferred choice in the fabrication of pressure vessels, marine vessels, pipelines, and offshore structures. Despite its advantages, achieving optimal weld quality and productivity requires careful selection of the welding parameters. This study focuses on identifying the best combination of welding parameters to enhance weld quality through experimental and optimization techniques.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
          Initially, SAW experiments were conducted using a fractional factorial design to investigate the influence of both direct and indirect input parameters. These parameters included welding voltage, wire feed rate, welding speed, nozzle-to-plate distance, flux condition, and plate thickness. The experiments employed the bead-on-plate technique to deposit weld metal on AISI 1023 steel plates. The main goal was to evaluate how these parameters affected key geometrical characteristics of the weld bead, namely bead width, reinforcement, and penetration.
          </p>
          <p className="text-gray-700 leading-relaxed">
          <p className="mb-4 text-gray-700 leading-relaxed">
          The experimental data were analyzed to determine both the main effects and interaction effects of the input parameters on the weld responses. Linear regression models were developed to mathematically represent the relationship between input parameters and response variables. These models provided a foundation for further optimization efforts.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
          To identify the optimal combination of welding parameters, a multi-objective optimization approach was adopted. Three different techniques—desirability approach, genetic algorithm, and Jaya algorithm—were employed. Among these, the Jaya algorithm demonstrated superior performance in optimizing the input parameters for improved weld quality. This suggests that the Jaya algorithm is a promising tool for optimizing SAW processes to achieve desirable weld characteristics and productivity.
          </p>
          <p>Link to full research paper: <a target="_blank" style={{color:'#0716df'}} href="https://sci-hub.se/10.1016/j.dt.2018.08.004
      ">https://sci-hub.se/10.1016/j.dt.2018.08.004
        </a></p>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Page4;

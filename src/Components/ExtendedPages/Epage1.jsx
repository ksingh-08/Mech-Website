import React from 'react';
import provide1 from '../../assets/IC.jpg';

const Epage1 = () => {
  return (
    
    <div className="bg-white flex justify-center items-center min-h-screen md:p-auto pt-32 md:pl-0 md:pr-0 pl-4 pr-4 pb-10">
       
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200 flex flex-col md:flex-row">
        
        <div className="md:w-1/2 flex justify-center items-center p-6 bg-gray-100">
          <img
            src={provide1}
            alt="Industrial Consultancy"
            className="rounded-2xl object-cover w-full h-full max-h-[400px]"
          />
        </div>
        
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Industrial Consultancy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our industrial consultancy services help businesses improve welding processes and boost productivity. 
            We assist with inspections, troubleshooting, and process optimization tailored to client needs.
            <br /><br />
            We aim to bridge academic insights and real-world demands, ensuring quality, standards compliance, 
            and innovative welding solutions backed by research and field expertise.
          </p>
        </div>
        

      </div>
     
    </div>
   
  );
};

export default Epage1;

// import React from 'react';
// import provide2 from '../../assets/Workshop.jpg';

// const Epage2 = () => {
//   return (
//     <div className="bg-white flex justify-center items-center min-h-screen md:p-auto pt-32 md:pl-0 md:pr-0 pl-4 pr-4 pb-10">
//       <div className="max-w-7xl w-full bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200 flex flex-col md:flex-row">
        
//         <div className="md:w-1/2 flex justify-center items-center p-6 bg-gray-100">
//           <img
//             src={provide2}
//             alt="Welding Training Program"
//             className="rounded-2xl object-cover w-full h-full max-h-[400px]"
//           />
//         </div>
        
//         <div className="md:w-1/2 p-8 flex flex-col justify-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">In-House Training Program</h2>
//           <p className="text-gray-700 leading-relaxed">
//             We offer in-depth in-house training programs for individuals and organizations to build welding expertise. 
//             From safety protocols and hands-on techniques to modern equipment and best practices, our sessions cater to 
//             all skill levels under expert guidance.
//             <br /><br />
//             Whether you're starting your welding journey or seeking advanced insights, our practical and research-driven 
//             curriculum ensures valuable learning outcomes for everyone involved.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };


import React from 'react';
import provide2 from '../../assets/Workshop.jpg'
import mttdPdf from '../../assets/cif/MTTD.pdf';

const Epage2 = () => {
  

  return (
    <div className="bg-white flex justify-center items-center min-h-screen md:p-auto pt-32 md:pl-0 md:pr-0 pl-4 pr-4 pb-10">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200 flex flex-col md:flex-row">
        
        <div className="md:w-1/2 flex justify-center items-center p-6 bg-gray-100">
          <img
            src={provide2}
            alt="Workshop Environment"
            className="rounded-2xl object-cover w-full h-full max-h-[400px]"
          />
        </div>
        
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-4xl flex items-center justify-center font-bold text-red-800 mb-8">In-House Training Program</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We offer in-depth in-house training programs for individuals and organizations to build welding expertise. 
            From safety protocols and hands-on techniques to modern equipment and best practices, our sessions cater to 
            all skill levels under expert guidance.
          </p>
          <p>
            Whether you're starting your welding journey or seeking advanced insights, our practical and research-driven curriculum ensures valuable learning outcomes for everyone involved.
          </p>
          <br/>

          <h3 className="text-4xl flex items-center justify-center font-bold text-red-800 mb-8">Courses Offered</h3>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            <li className="mb-3">
              <a href="../../assets/cif/INDWEL.pdf"  target="_blank" className="text-blue-600 hover:underline">
                Industrial Welding
              </a>
            </li>
            <li className="mb-3">
              <a href="../../assets/cif/NDE.docx" target="_blank" className="text-blue-600 hover:underline">
                Non Destructive Examination
              </a>
            </li>
            <li className="mb-3">
              <a href={mttdPdf}  target="_blank" className="text-blue-600 hover:underline">
                Machine Tools and Tool Design
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Epage2;
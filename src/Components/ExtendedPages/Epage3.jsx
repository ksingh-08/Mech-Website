// import React from 'react';
// import provide3 from '../../assets/Inhouse.jpg';

// const Epage3 = () => {
//   return (
//     <div className="bg-white flex justify-center items-center min-h-screen md:p-auto pt-32 md:pl-0 md:pr-0 pl-4 pr-4 pb-10">
//       <div className="max-w-6xl w-full bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200 flex flex-col md:flex-row">
        
//         <div className="md:w-1/2 flex justify-center items-center p-6 bg-gray-100">
//           <img
//             src={provide3}
//             alt="Workshop Environment"
//             className="rounded-2xl object-cover w-full h-full max-h-[400px]"
//           />
//         </div>
        
//         <div className="md:w-1/2 p-8 flex flex-col justify-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Workshop Facility</h2>
//           <p className="text-gray-700 leading-relaxed">
//             Our advanced workshop is equipped for hands-on training, welding research, and project development. 
//             With cutting-edge tools and safety gear, it simulates real-world welding environments for effective learning.
//             <br /><br />
//             From refining welding techniques to conducting experiments, our space empowers learners to gain practical skills 
//             and industry-ready experience.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Epage3;
import React from 'react';
import provide3 from '../../assets/Workshop.jpg';
import { useNavigate } from 'react-router-dom';

const Epage3 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Perform the redirect to the Facility page
    navigate('/facility');
  };

  const facilities = [
    "SAW",
    "SAW and Advanced SAW (patented)",
    "GMAW and Advanced GMAW (patented)",
    "GTAW",
    "OxyFuel Welding",
    "Robotic Arm Welding",
    "Plasma Cutting",
    "Consumable Development",
    "3-Axis Welding Manipulator",
    "Flux metal arc welding process with modified torch",
    "Tubular developement",
  ];

  return (
    <div className="bg-white flex justify-center items-center min-h-screen md:p-auto pt-32 md:pl-0 md:pr-0 pl-4 pr-4 pb-10">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200 flex flex-col md:flex-row">
        
        <div className="md:w-1/2 flex justify-center items-center p-6 bg-gray-100">
          <img
            src={provide3}
            alt="Workshop Environment"
            className="rounded-2xl object-cover w-full h-full max-h-[400px]"
          />
        </div>
        
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h3 className="text-4xl  flex items-center justify-center font-bold text-red-800 mb-8">WorkShop Facilities</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our advanced workshop is equipped for hands-on training, welding research, and project development. 
            With cutting-edge tools and safety gear, it simulates real-world welding environments for effective learning.
            <br /><br />
            From refining welding techniques to conducting experiments, our space empowers learners to gain practical skills 
            and industry-ready experience.
          </p>
          <h3 className="text-4xl  flex items-center justify-center font-bold text-red-800 mb-8">Our Facilities</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            {facilities.map((item, index) => (
              <li key={index} >{item}</li>
            ))}
          </ul>

          <div>
            {/* Button-based redirect */}
            <button onClick={handleRedirect} className="px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-600">
              Go to the Facility Page
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Epage3;



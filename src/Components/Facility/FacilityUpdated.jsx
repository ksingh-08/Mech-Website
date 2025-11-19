// import { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import './fac.css';
// import Title from '../Title/Title';
// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import { Link } from 'react-router-dom';
// import slide_image1 from '../../newpics/SMAW.jpeg';
// import slide_image2 from '../../newpics/SAW.jpeg';
// import slide_image3 from '../../newpics/GMAW.jpeg';
// import slide_image4 from '../../assets/gtaw.png';
// import slide_image5 from '../../assets/fl5.jpg';
// import slide_image6 from '../../newpics/Robotic.jpeg';
// import slide_image7 from '../../newpics/Plasma.jpeg';
// import slide_image8 from '../../assets/fl8.jpg';
// import slide_image9 from '../../newpics/3axis.jpeg'
// import Particles from '../../UI/Particles';
// import bgImage from '../../assets/twi.png'

// const SLIDES = [
//   {
//     image: slide_image1,
//     link: "/facility1",
//     title: "SMAW",
//     description: "Shielded Metal Arc Welding, a manual arc welding process using a consumable electrode."
//   },
//   {
//     image: slide_image2,
//     link: "/facility2",
//     title: "SAW",
//     description: "Submerged Arc Welding, known for deep weld penetration and high deposition rates."
//   },
//   {
//     image: slide_image3,
//     link: "/facility3",
//     title: "GMAW or MIG",
//     description: "Gas Metal Arc Welding, a semi-automatic or automatic process using a wire electrode."
//   },
//   {
//     image: slide_image4,
//     link: "/facility4",
//     title: "GTAW",
//     description: "Gas Tungsten Arc Welding, also known as TIG, offering precision with non-consumable electrodes."
//   },
//   {
//     image: slide_image5,
//     link: "/facility5",
//     title: "Oxyfuel Welding",
//     description: "Welding process using oxygen and fuel gases to weld or cut metals."
//   },
//   {
//     image: slide_image6,
//     link: "/facility6",
//     title: "Robotic Welding",
//     description: "Automated welding using programmable robots for high efficiency and consistency."
//   },
//   {
//     image: slide_image7,
//     link: "/facility7",
//     title: "Plasma Cutting",
//     description: "Cutting through electrically conductive materials using accelerated hot plasma."
//   },
//   {
//     image: slide_image8,
//     link: "/facility8",
//     title: "Consumable Development",
//     description: "Research and development of high-performance welding consumables and materials."
//   },
//   {
//     image: slide_image9,
//     link: "/facility9",
//     title: "3 Axis Welding Manipulator",
//     description: "A mechanized welding system that allows precise, programmable movement of the welding torch in three dimensions to enhance weld accuracy, consistency, and automation."
//   },
// ];

// const FacilityUpdated = () => {
//   return (
//   //   <div style={{ height: '100vh', position: 'relative' }}>
//   //   <InfiniteMenu items={SLIDES}/>
//   // </div>

//     <div className="facility-container relative w-full min-h-screen pb-20">

//       {/* Particles as Background */}
//       <div className="absolute inset-0 -z-10">
//         <Particles
//           particleColors={['#7f1c1d', '#aa0909']}
//           particleCount={200}
//           particleSpread={10}
//           speed={0.1}
//           particleBaseSize={100}
//           moveParticlesOnHover={true}
//           alphaParticles={false}
//           disableRotation={false}
//         />
//       </div>

//       {/* Title */}
//       <Title title="LAB FACILITIES" className="title2 pt-30" />

//       {/* Preface Section */}
//       <div className="facility-preface px-6 py-6 bg-red-800 bg-opacity-20 shadow-md rounded-md mb-6 max-w-3xl mx-auto relative bg-cover bg-center bg-no-repeat -z-10" style={{ backgroundImage: "url(${bgImage})" }}>
//       <p className="text-white text-lg leading-relaxed">
//       At <strong className='text-red-800 font-semibold'>LNMIIT</strong>, we are at the forefront of <strong className='text-red-800 font-semibold'>welding research and innovation</strong>,
//       providing cutting-edge solutions for industries of all scales. Whether you're a <strong className='text-red-800 font-semibold'>large enterprise </strong>
//       seeking advanced welding techniques or a <strong className='text-red-800 font-semibold'>growing business</strong> looking for expert consultancy,
//       our state-of-the-art <strong className='text-red-800 font-semibold'>welding research lab</strong> is equipped to meet all your needs. <br /><br />
//       <h3><strong className='text-red-800 font-semibold'>Explore our world-class facilities and discover the future of welding technology: </strong></h3>
//     </p>
//   </div>

//        <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         loop={true}
//         coverflowEffect={{
//           rotate: 40,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.next',
//           prevEl: '.prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="mySwiper "
//       >
//         <SwiperSlide className="swiper-slide bg-white shadow-xl rounded-xl p-2 border border-gray-200">
//           <Link to="/facility1">
//             <img src={slide_image1} alt="SMAW" className="rounded-md" />
//             <div className="title1 text-gray-800 font-semibold mt-2">
//               <span>SMAW</span>
//             </div>
//           </Link>
//         </SwiperSlide>

//         <SwiperSlide key={Math.random()} className="swiper-slide bg-white shadow-md rounded-xl p-2">
//   <Link to="/facility2">
//     <img src={slide_image2} alt="SAW" />

//     <div className="title1 flex justify-center mt-2">

//       <div className="border border-black text-black px-6 py-3 rounded-lg shadow-md
//                       transition duration-300 hover:bg-red-800 hover:text-white cursor-pointer">
//         SAW
//       </div>
//     </div>

//   </Link>
// </SwiperSlide>

//         <SwiperSlide className="swiper-slide bg-white shadow-sm rounded-xl p-2 border border-gray-200">
//           <Link to="/facility3">
//             <img src={slide_image3} alt="GMAW or MIG" />
//             <div className="title1">
//               <span>GMAW or MIG</span>
//             </div>
//           </Link>
//         </SwiperSlide>

//         <SwiperSlide className="swiper-slide bg-white shadow-sm rounded-xl p-2 border border-gray-200">
//           <Link to="/facility4">
//             <img src={slide_image4} alt="GTAW" />
//             <div className="title1">
//               <span>GTAW</span>
//             </div>
//           </Link>
//         </SwiperSlide>

//         <SwiperSlide className="swiper-slide bg-white shadow-sm rounded-xl p-2 border border-gray-200">
//           <Link to="/facility5">
//             <img src={slide_image5} alt="Oxyfuel Welding" />
//             <div className="title1">
//               <span>Oxyfuel Welding</span>
//             </div>
//           </Link>
//         </SwiperSlide>

//         <SwiperSlide className="swiper-slide bg-white shadow-sm rounded-xl p-2 border border-gray-200">
//           <Link to="/facility6">
//             <img src={slide_image6} alt="Robotic Welding" />
//             <div className="title1">
//               <span>Robotic Welding</span>
//             </div>
//           </Link>
//         </SwiperSlide>

//         <SwiperSlide className="swiper-slide bg-white shadow-sm rounded-xl p-2 border border-gray-200">
//           <Link to="/facility7">
//             <img src={slide_image7} alt="Plasma Cutting" />
//             <div className="title1">
//               <span>Plasma Cutting</span>
//             </div>
//           </Link>
//         </SwiperSlide>

//         <SwiperSlide className="swiper-slide bg-white shadow-sm rounded-xl p-2 border border-gray-200">
//           <Link to="/facility8">
//             <img src={slide_image8} alt="Consumable Development" />
//             <div className="title1">
//               <span>Consumable Development</span>
//             </div>
//           </Link>
//         </SwiperSlide>
//       </Swiper>

//        <div className="slider-controler">
//         <div className="slider-arrow prev">
//           <ion-icon name="arrow-back-circle-outline" className="prev"></ion-icon>
//         </div>

//         <div className="slider-arrow next">
//           <ion-icon name="arrow-forward-circle-outline" className="next"></ion-icon>
//         </div>

//         <div className="swiper-pagination"></div>
//       </div>
//     </div>
//   );
// };

// export default FacilityUpdated;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from 'react-i18next';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import Title from "../Title/Title";

// Import facility images
import slideImageSMAW from '../../newpics/SMAW.jpeg';
import slideImageSAW from '../../newpics/SAW.jpeg';
import slideImageGMAW from '../../newpics/GMAW.jpeg';
import slideImageGTAW from '../../assets/gtaw.png';
import slideImageOxyfuel from '../../assets/fl5.jpg';
import slideImageRobotic from '../../newpics/Robotic.jpeg';
import slideImagePlasma from '../../newpics/Plasma.jpeg';
import slideImageConsumable from '../../assets/fl8.jpg';
import slideImageAxis from '../../newpics/3axis.jpeg';
import slideImageAsaw from '../../assets/Asaw.jpg';
import {motion} from "framer-motion";

const FACILITIES = [
  {
    id: 1,
    image: slideImageSMAW,
    link: "/facility1",
    title: "SMAW",
    description:
      "Shielded Metal Arc Welding, a manual arc welding process using a consumable electrode.",
  },
  {
    id: 2,
    image: slideImageSAW,
    link: "/facility2",
    title: "SAW",
    description:
      "Submerged Arc Welding, known for deep weld penetration and high deposition rates.",
  },
  {
    id: 3,
    image: slideImageGMAW,
    link: "/facility3",
    title: "GMAW/MIG",
    description:
      "Gas Metal Arc Welding, a semi-automatic process using wire electrode and shielding gas.",
  },
  {
    id: 4,
    image: slideImageGTAW,
    link: "/facility4",
    title: "GTAW/TIG",
    description:
      "Gas Tungsten Arc Welding, offering precision with non-consumable electrodes.",
  },
  {
    id: 5,
    image: slideImageOxyfuel,
    link: "/facility5",
    title: "Oxyfuel Welding",
    description:
      "Versatile process using oxygen and fuel gases for welding and cutting various metals.",
  },
  {
    id: 6,
    image: slideImageRobotic,
    link: "/facility6",
    title: "Robotic Welding",
    description:
      "Automated welding systems for unmatched precision and consistency.",
  },
  {
    id: 7,
    image: slideImagePlasma,
    link: "/facility7",
    title: "Plasma Cutting",
    description:
      "Advanced cutting technology using accelerated hot plasma for precise cuts.",
  },
  {
    id: 8,
    image: slideImageConsumable,
    link: "/facility8",
    title: "Consumable Development",
    description:
      "Research facility for developing high-performance welding consumables.",
  },
  {
    id: 9,
    image: slideImageAxis,
    link: "/facility9",
    title: "3-Axis Welding Manipulator",
    description: "Precision system enabling programmed movement in three dimensions for consistent welding."
  },
  {
    id: 10,
    image: slideImageAsaw,
    link: "/facility10",
    title: "Advanced Submerged Arc Welding",
    description: "Innovative submerged arc welding process with enhanced control and efficiency."
  }
];

const FacilityPage = () => {
  const { t } = useTranslation();
  const [activeFacility, setActiveFacility] = useState(FACILITIES[0]);
  const [fadeState, setFadeState] = useState("fade-in");
  const [autoRotateIndex, setAutoRotateIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Filter facilities based on search query
  const filteredFacilities = FACILITIES.filter((facility) =>
    facility.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    facility.description.toLowerCase().includes(searchQuery.toLowerCase())
  );


  // Auto rotate featured facility with fade effect
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      // Start fade out
      setFadeState("fade-out");

      // After fade out completes, change facility and fade in
      setTimeout(() => {
        const nextIndex = (autoRotateIndex + 1) % FACILITIES.length;
        setAutoRotateIndex(nextIndex);
        setActiveFacility(FACILITIES[nextIndex]);
        setFadeState("fade-in");
      }, 500); // This should match the fade-out duration in CSS
    }, 4000); // Change facility every 5 seconds

    return () => clearInterval(rotationInterval);
  }, [autoRotateIndex]);

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto mt-5 px-4 py-10 max-w-7xl">
        <div className="text-center mb-16">
          <h1
            className="text-center  mt-20 mb-10 text-4xl font-bold text-red-900"
            style={{ color: "#000F38" }}
          >
            {t('facility.title')}
          </h1>
          {/* <div className="h-1 w-60 bg-red-600 mx-auto rounded-full mb-8"></div> */}
          <div className="max-w-6xl mx-auto mb-12 bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
            <p className="text-xl leading-relaxed">
              {t('facility.intro')}
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">
              {t('facility.ourFacilities')}
            </h2>
            <div className="h-1 w-32 bg-red-600 mx-auto rounded-full mb-6"></div>
            
            {/* Search/Filter Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('facility.searchPlaceholder') || "Search facilities..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-lg focus:border-red-800 focus:outline-none text-lg"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {filteredFacilities.length} {t('facility.resultsFound') || 'result(s) found'}
                </p>
              )}
            </div>
          </div>
          <div className="mb-20">
            <div className="relative max-w-7xl mx-auto">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                coverflowEffect={{
                  rotate: 30,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >
                {filteredFacilities.map((facility) => (
                  <SwiperSlide
                    key={facility.id}
                    className="swiper-slide w-72 bg-white shadow-md rounded-xl overflow-hidden border border-gray-200"
                    onClick={() => {
                      setFadeState("fade-out");
                      setTimeout(() => {
                        setActiveFacility(facility);
                        setFadeState("fade-in");
                    
                        const el = document.getElementById(`facility-${facility.id}`);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      },100);
                    }}
                  >
                     
                    <div className="cursor-pointer transition-all duration-300 hover:shadow-xl group">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={facility.image}
                          alt={facility.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-xl font-bold">
                            {facility.title}
                          </h3>
                          <p className="text-sm opacity-90 line-clamp-2">
                            {facility.description}
                          </p>
                        </div>
                      </div>
                    </div>
                   
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <div className="flex justify-center items-center gap-6 mt-8">
                <button className="swiper-button-prev w-12 h-12 rounded-full bg-red-900 text-white flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="red"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <div className="swiper-pagination flex items-center gap-2"></div>
                <button className="swiper-button-next w-12 h-12 rounded-full bg-red-900 text-white flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="red"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
                
              </div>
            </div>
          </div>
          {/* Featured Facility with Fade Effect */}
          {/* <div
            className={`grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md `}
          >
            <div className={`transition-opacity duration-500 ${fadeState}`}>
              <h2 className="text-3xl font-bold mb-2 text-red-700">
                {activeFacility.title}
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                {activeFacility.description}
              </p>
              <Link
                to={activeFacility.link}
                className="inline-block px-6 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg shadow-md transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
            <div
              className={`transition-opacity duration-500 ${fadeState} relative overflow-hidden rounded-xl shadow-lg border-2 border-red-100`}
            >
              <img
                src={activeFacility.image}
                alt={activeFacility.title}
                className="w-full h-80 object-cover"
              />
            </div>
          </div> */}
           {/* {
    id: 1,
    image: slideImageSMAW,
    link: "/facility1",
    title: "SMAW",
    description:
      "Shielded Metal Arc Welding, a manual arc welding process using a consumable electrode.",
  } */}
{filteredFacilities.map((facility, index) => (
  <motion.div
    key={facility.id}
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.005 }}
    viewport={{ once: true, amount: 0.3 }}
    className="max-w-6xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md mb-10"
  >
    <div id={`facility-${facility.id}`} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
      {/* Text Content */}
      <div className="md:w-1/2">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl font-bold text-blue-800">#{index + 1}</span>
          <h2 className="text-3xl font-bold text-red-700">{facility.title}</h2>
        </div>
        <p className="text-lg mb-6 leading-relaxed">{facility.description}</p>
        <Link
          to={facility.link}
          className="inline-block px-6 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg shadow-md transition-all duration-300"
        >
          {t('facility.learnMore')}
        </Link>
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        <img
          src={facility.image}
          alt={`${facility.title} Equipment`}
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>
    </div>
  </motion.div>
))}


</div>

        {/* CTA */}
        <div className="text-center mt-16 max-w-6xl mx-auto bg-gray-50 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            {t('facility.readyToExplore')}
          </h2>
          <p className="mb-6 text-gray-700">
            {t('facility.discover')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="block w-full h-full">
            <button className="px-6 py-3 bg-white hover:bg-gray-100 border-2 border-red-700 text-red-700 rounded-lg shadow-md transition-all duration-300">
                {t('facility.contactTeam')}
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Swiper Style Overrides and Fade Animation */}
      <style jsx>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          display: none;
        }

        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .swiper-pagination-bullet-active {
          background: #b91c1c;
          width: 12px;
          height: 12px;
        }

        .swiper-slide {
          width: 280px !important;
        }

        @media (max-width: 640px) {
          .swiper-slide {
            width: 240px !important;
          }
        }

        /* Fade animation classes */
        .fade-in {
          opacity: 1;
        }

        .fade-out {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default FacilityPage;

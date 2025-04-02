import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './fac.css';
import Title from '../Title/Title';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import slide_image1 from '../../newpics/SMAW.jpeg';
import slide_image2 from '../../newpics/SAW.jpeg';
import slide_image3 from '../../newpics/GMAW.jpeg';
import slide_image4 from '../../assets/fl4.png';
import slide_image5 from '../../assets/fl5.jpg';
import slide_image6 from '../../newpics/Robotic.jpeg';
import slide_image7 from '../../newpics/Plasma.jpeg';
import slide_image8 from '../../assets/fl8.jpg';
import Particles from '../../UI/Particles';
import bgImage from '../../assets/twi.png'

const FacilityUpdated = () => {
  return (
    <div className="facility-container relative w-full min-h-screen pb-20">
      {/* Particles as Background */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={['#7f1c1d', '#aa0909']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Title */}
      <Title title="LAB FACILITIES" className="title2 pt-30" />

      {/* Preface Section */} 
      <div className="facility-preface px-6 py-6 bg-red-800 bg-opacity-20 shadow-md rounded-md mb-6 max-w-3xl mx-auto relative bg-cover bg-center bg-no-repeat -z-10" style={{ backgroundImage: "url(${bgImage})" }}>
      <p className="text-white text-lg leading-relaxed">
      At <strong className='text-red-800 font-semibold'>LNMIIT</strong>, we are at the forefront of <strong className='text-red-800 font-semibold'>welding research and innovation</strong>, 
      providing cutting-edge solutions for industries of all scales. Whether you're a <strong className='text-red-800 font-semibold'>large enterprise </strong> 
      seeking advanced welding techniques or a <strong className='text-red-800 font-semibold'>growing business</strong> looking for expert consultancy, 
      our state-of-the-art <strong className='text-red-800 font-semibold'>welding research lab</strong> is equipped to meet all your needs. <br /><br />
      <h3><strong className='text-red-800 font-semibold'>Explore our world-class facilities and discover the future of welding technology: </strong></h3>
    </p>
  </div>


      {/* Swiper Carousel */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className="swiper-slide bg-white shadow-xl rounded-xl p-2 border border-gray-200">
          <Link to="/facility1">
            <img src={slide_image1} alt="SMAW" className="rounded-md" />
            <div className="title1 text-gray-800 font-semibold mt-2">
              <span>SMAW</span>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide key={Math.random()} className="swiper-slide bg-white shadow-md rounded-xl p-2">
  <Link to="/facility2">
    <img src={slide_image2} alt="SAW" />

    {/* Centering Label */}
    <div className="title1 flex justify-center mt-2">
      {/* Single Border Only */}
      <div className="border border-black text-black px-6 py-3 rounded-lg shadow-md 
                      transition duration-300 hover:bg-red-800 hover:text-white cursor-pointer">
        SAW
      </div>
    </div>

  </Link>
</SwiperSlide>



        <SwiperSlide className="swiper-slide bg-white shadow-sm rounded-xl p-2 border border-gray-200">
          <Link to="/facility3">
            <img src={slide_image3} alt="GMAW or MIG" />
            <div className="title1">
              <span>GMAW or MIG</span>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide bg-white shadow-sm rounded-xl p-2 border border-gray-200">
          <Link to="/facility4">
            <img src={slide_image4} alt="GTAW" />
            <div className="title1">
              <span>GTAW</span>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide bg-white shadow-sm rounded-xl p-2 border border-gray-200">
          <Link to="/facility5">
            <img src={slide_image5} alt="Oxyfuel Welding" />
            <div className="title1">
              <span>Oxyfuel Welding</span>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide bg-white shadow-sm rounded-xl p-2 border border-gray-200">
          <Link to="/facility6">
            <img src={slide_image6} alt="Robotic Welding" />
            <div className="title1">
              <span>Robotic Welding</span>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide bg-white shadow-sm rounded-xl p-2 border border-gray-200">
          <Link to="/facility7">
            <img src={slide_image7} alt="Plasma Cutting" />
            <div className="title1">
              <span>Plasma Cutting</span>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide bg-white shadow-sm rounded-xl p-2 border border-gray-200">
          <Link to="/facility8">
            <img src={slide_image8} alt="Consumable Development" />
            <div className="title1">
              <span>Consumable Development</span>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>

      {/* Slider Controls */}
      <div className="slider-controler">
        <div className="slider-arrow prev">
          <ion-icon name="arrow-back-circle-outline" className="prev"></ion-icon>
        </div>

        <div className="slider-arrow next">
          <ion-icon name="arrow-forward-circle-outline" className="next"></ion-icon>
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default FacilityUpdated;

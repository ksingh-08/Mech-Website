import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './fac.css'
import Title from '../Title/Title'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'
import slide_image1 from '../../newpics/SMAW.jpeg';
import slide_image2 from '../../newpics/SAW.jpeg';
import slide_image3 from '../../newpics/GMAW.jpeg';
import slide_image4 from '../../assets/fl4.png';
import slide_image5 from '../../assets/fl5.jpg';
import slide_image6 from '../../newpics/Robotic.jpeg';
import slide_image7 from '../../newpics/Plasma.jpeg';
import slide_image8 from '../../assets/fl8.jpg';
import smaw from '../../newpics/SMAW.jpeg'
import Particles from '../../UI/Particles';

const FacilityUpdated = () => {
  return (
    <div className="facility-container relative w-full h-[600px]">
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

      {/* Content */}
      <Title title="LAB FACILITIES" className="title2" />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
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
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide bg-white shadow-xl rounded-xl p-2 border border-gray-200">
  <Link to="/facility1">
    <img src={slide_image1} alt="SMAW" className="rounded-md" />
    <div className="title1 text-gray-800 font-semibold mt-2">
      <span>SMAW</span>
    </div>
  </Link>
</SwiperSlide>


        <SwiperSlide className="swiper-slide bg-white shadow-md rounded-xl p-2 border border-gray-200">
          <Link to="/facility2">
            <img src={slide_image2} alt="SAW" />
            <div className="title1">
              <span>SAW</span>
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



  // return (
  //   <div className="facility-container">
  //      <Title title='LAB FACILITIES' className='title2'/>
  //     <Swiper
  //       effect={'coverflow'}
  //       grabCursor={true}
  //       centeredSlides={true}
  //       loop={true}
  //       slidesPerView={'auto'}
  //       initialSlide={2}
  //       coverflowEffect={{
  //         rotate: 0,
  //         stretch: 0,
  //         depth: 100,
  //         modifier: 1,
  //         slideShadows:true,
          
  //       }}
  //       pagination={{ el: '.swiper-pagination', clickable: true }}
        // navigation={{
        //   nextEl: '.next',
        //   prevEl: '.prev',
        //   clickable: true,
        // }}
  //       modules={[EffectCoverflow, Pagination, Navigation]}
  //       className="swiper_container"
  //     >
        
        // <SwiperSlide className='swiper-slide'>
        // <Link to="/facility1"> 
        //   <img src={slide_image1} alt="slide_image" />
        //   <div className='title1'>
        //     <span>SMAW</span></div>
        //     </Link>
        // </SwiperSlide>
        
        // <SwiperSlide className='swiper-slide'>
        // <Link to="/facility2">
        //   <img src={slide_image2} alt="slide_image" />
        //   <div className='title1'><span>SAW</span></div>
        //   </Link>
        // </SwiperSlide>
        // <SwiperSlide className='swiper-slide'>
        // <Link to="/facility3">
        //   <img src={slide_image3} alt="slide_image" />
        //   <div className='title1'><span>GMAW or MIG</span></div>
        //   </Link>
        // </SwiperSlide>
        // <SwiperSlide className='swiper-slide'>
        // <Link to="/facility4">
        //   <img src={slide_image4} alt="slide_image" />
        //   <div className='title1'><span>GTAW</span></div>
        //   </Link>
        // </SwiperSlide>
        // <SwiperSlide className='swiper-slide'>
        // <Link to="/facility5">
        //   <img src={slide_image5} alt="slide_image" />
        //   <div className='title1'><span>Oxyfuel Welding</span></div>
        //   </Link>
        // </SwiperSlide>
        // <SwiperSlide className='swiper-slide'>
        // <Link to="/facility6">
        //   <img src={slide_image6} alt="slide_image" />
        //   <div className='title1'><span>Robotic Welding</span></div>
        //   </Link>
        // </SwiperSlide>
        // <SwiperSlide className='swiper-slide'>
        // <Link to="/facility7">
        //   <img src={slide_image7} alt="slide_image" />
        //   <div className='title1'><span>Plasma Cutting</span></div>
        //   </Link>
        // </SwiperSlide>
        // <SwiperSlide className='swiper-slide'>
        // <Link to="/facility8">
        //   <img src={slide_image8} alt="slide_image" />
        //   <div className='title1'><span>Consumable Development</span></div>
        //   </Link>
        // </SwiperSlide>
        
  //     </Swiper>
      
     
      // <div className="slider-controler">
      
      //     <div className="slider-arrow prev">  {/* Updated to use 'prev' class */}
      //       <ion-icon name="arrow-back-circle-outline" className="prev"></ion-icon>
      //     </div>

      //     <div className="slider-arrow next">  {/* Updated to use 'next' class */}
      //       <ion-icon name="arrow-forward-circle-outline" className="next"></ion-icon>
      //     </div>
      //     <div className="swiper-pagination "></div>
  
      // </div>
        
      
     
      
  //   </div>
  // );
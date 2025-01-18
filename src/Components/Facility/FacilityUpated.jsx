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
import slide_image1 from '../../assets/fl1.jpg';
import slide_image2 from '../../assets/fl2.jpg';
import slide_image3 from '../../assets/fl3.jpg';
import slide_image4 from '../../assets/fl4.png';
import slide_image5 from '../../assets/fl5.jpg';
import slide_image6 from '../../assets/fl6.png';
import slide_image7 from '../../assets/fl7.png';
import slide_image8 from '../../assets/fl8.jpg';

const FacilityUpdated = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="facility-container">
       <Title title='LAB FACILITIES'/>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 1,
          slideShadows:true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        
        <SwiperSlide className='swiper-slide'>
        <Link to="/facility1">  <a href="/facility1"/>
          <img src={slide_image1} alt="slide_image" />
          <div className='title1'>
            <span>SMAW</span></div>
            </Link>
        </SwiperSlide>
        
        <SwiperSlide className='swiper-slide'>
        <Link to="/facility2">
          <img src={slide_image2} alt="slide_image" />
          <div className='title1'><span>SAW</span></div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <Link to="/facility3">
          <img src={slide_image3} alt="slide_image" />
          <div className='title1'><span>GMAW or MIG</span></div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <Link to="/facility4">
          <img src={slide_image4} alt="slide_image" />
          <div className='title1'><span>GTAW</span></div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <Link to="/facility5">
          <img src={slide_image5} alt="slide_image" />
          <div className='title1'><span>Oxyfuel Welding</span></div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <Link to="/facility6">
          <img src={slide_image6} alt="slide_image" />
          <div className='title1'><span>Robotic Welding</span></div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <Link to="/facility7">
          <img src={slide_image7} alt="slide_image" />
          <div className='title1'><span>Plasma Cutting</span></div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <Link to="/facility8">
          <img src={slide_image8} alt="slide_image" />
          <div className='title1'><span>Consumable Development</span></div>
          </Link>
        </SwiperSlide>
        <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        
      </div>
      </Swiper>
      <div className="swiper-pagination "></div>
      
    </div>
  );
};

export default FacilityUpdated;

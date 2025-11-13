import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import ExtendedUpdated from '../Extended/ExtendedUpdated'
import Title from '../Title/Title'
import PhotosUpdated from '../Photos/PhotosUpdated'
import Testimonials from '../Testimonials/Testimonials'
import BlurText from "./BlurText";
import { useTranslation } from 'react-i18next';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <div className='hero container'>
        <div className="hero-text">
          <div className="heading">
            <h1>{t('hero.department')}</h1>
            <h1>{t('hero.mechatronics')}</h1> 
          </div>
          <h1 id="highlightText">{t('hero.weldingResearch')}</h1>

<BlurText
  text={t('hero.tagline')}
  delay={100}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="flex text-center justify-center text-2xl mb-8"
/>
          {/* <p className='typing-container'>
            "Forging Innovation, Igniting Progress: Explore the Frontier of Welding Research. 
            Uncover Cutting-Edge Techniques, Materials, and Technologies Shaping Tomorrow's Welding Industry."
          </p> */}
          <a href="#move" className='btn'>{t('hero.exploreMore')} <img src={dark_arrow} alt="" /></a> 
        </div>
      </div>
      
      <div className="container">
        
        <Title subTitle={t('common.ourExpertise')} title={t('common.whatWeProvide')}/>
        <ExtendedUpdated/>
        
        <Title subTitle={t('common.gallery')} title={t('common.labPhotos')}/>
        <PhotosUpdated/>
        
        <Title subTitle={t('common.testimonials')} title={t('common.whatStudentsSay')}/>
        <Testimonials/>
      </div>
    </>
  )
}

export default Hero

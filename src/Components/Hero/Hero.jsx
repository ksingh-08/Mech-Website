import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import ExtendedUpdated from '../Extended/ExtendedUpdated'
import Title from '../Title/Title'
import PhotosUpdated from '../Photos/PhotosUpdated'
import Testimonials from '../Testimonials/Testimonials'
import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
const Hero = () => { 
  return (
    <>
      <div className='hero container'>
        <div className="hero-text">
          <div className="heading">
            <h1>Department of</h1>
            <h1>Mechanical-Mechatronics Engineering</h1> 
          </div>
          <h1 id="highlightText">Welding Research</h1>

<BlurText
  text="Forging Innovation, Igniting Progress: Explore the Frontier of Welding Research.Uncover Cutting-Edge Techniques, Materials, and Technologies Shaping Tomorrow's Welding Industry."
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
          <a href="#move" className='btn'>Explore more <img src={dark_arrow} alt="" /></a> 
        </div>
      </div>
      
      <div className="container">
        <Title subTitle='Our Expertise' title='What We Provide'/>
        <ExtendedUpdated/>

        <Title subTitle='GALLERY' title='Lab Photos'/>
        <PhotosUpdated/>
        
        <Title subTitle='TESTIMONIALS' title='What Students Say'/>
        <Testimonials/>
      </div>
    </>
  )
}

export default Hero

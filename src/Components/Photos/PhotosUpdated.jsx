import React from 'react'
import'./PhotosUpdated.css'
import gal1 from'../../assets/gal1.jpeg'
import gal2 from'../../assets/gal2.jpeg'
import gal3 from'../../assets/gal3.jpeg'
import gal4 from'../../assets/gal4.jpeg'
import gal5 from'../../assets/gal5.jpeg'
import gal6 from'../../assets/gal6.jpeg'
import gal7 from'../../assets/gal7.jpeg'

import white_arrow from'../../assets/white-arrow.png'



const PhotosUpdated = () => {
  return (
    <div
  className="slider"
  style={{
    '--width': '400px',
    '--height': '535px',
    '--quantity': '6',
  }}
>
        <div className="list">
            <div className='item' style={{'--position':'1'}}><img src={gal1} alt="" /></div>
            <div className='item' style={{'--position':'2'}}><img src={gal4} alt="" /></div>
            <div className='item' style={{'--position':'3'}}><img src={gal3} alt="" /></div>
            <div className='item' style={{'--position':'4'}}><img src={gal6} alt="" /></div>
            <div className='item' style={{'--position':'5'}}><img src={gal2} alt="" /></div>
            <div className='item' style={{'--position':'6'}}><img src={gal7} alt="" /></div>
            <div className='item' style={{'--position':'1'}}><img src={gal1} alt="" /></div>
            <div className='item' style={{'--position':'2'}}><img src={gal4} alt="" /></div>
            <div className='item' style={{'--position':'3'}}><img src={gal3} alt="" /></div>
            <div className='item' style={{'--position':'4'}}><img src={gal6} alt="" /></div>
            <div className='item' style={{'--position':'5'}}><img src={gal2} alt="" /></div>
            <div className='item' style={{'--position':'6'}}><img src={gal7} alt="" /></div>
            
            
        </div>
       

        {/* <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button> */}

      
    </div>
  )
}

export default PhotosUpdated

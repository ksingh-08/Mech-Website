import React from 'react';
import logo from '../../assets/logo.webp'
import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';

import { useState , useEffect } from 'react';
const NavbarUpdated = () => {

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () =>{
      if(window.scrollY > 100){
        setScrolling(true);
      }
      else{
        setScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  const [scrolling, setScrolling] = useState(false);
  return (
    <nav  className={`z-10 flex justify-between items-center w-[89%] bg-red-900 fixed left-1/2 transform -translate-x-1/2  p-6  h-20 shadow-xl
    ${scrolling ? " top-0 w-full rounded-none}" : ' top-5 rounded-xl'}`}>
      <img src={logo} alt="" className='w-40 ' />

      <ul className={`flex gap-12 [&>li>a]:cursor-pointer [&>li>a]:text-white justify-center `}>
      <li className='hover:scale-105'><a href="/" className='hover:text-orange-100 '>Home</a></li>
      <li className='hover:scale-105'><NavLink className='hover:text-orange-100' to="/admission">Admission</NavLink></li>
      {/* <li><NavLink to="/programs">Projects</NavLink></li> */}
      <li className='hover:scale-105'><NavLink className='hover:text-orange-100' to="/about">About</NavLink></li>
      <li className='hover:scale-105'><NavLink className='hover:text-orange-100' to="/career">Careers</NavLink></li>
      <li className='hover:scale-105'><NavLink className='hover:text-orange-100' to="/facility">Facility</NavLink></li>
      <li className='hover:scale-105'><NavLink className='hover:text-orange-100' to="/research">Research</NavLink></li> 


      <li>
        
        </li>
      </ul>

      <div>
        <button className='btn'>
        <NavLink to="/contact">Contact</NavLink>
        </button> 
      </div>
      
    </nav>
  );
};

export default NavbarUpdated;

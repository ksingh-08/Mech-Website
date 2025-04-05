import React from 'react';
import logo from '../../assets/logo.webp'
import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';

import { useState , useEffect } from 'react';
const NavbarUpdated = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const menuHandler = ()=>{
      setOpenMenu(!openMenu);
  }

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
    <nav  className={` z-10 flex justify-between items-center w-[89%] bg-red-900 fixed left-1/2 transform -translate-x-1/2  p-6  h-20 shadow-xl
    ${scrolling ? " top-0 w-full rounded-none transition-all" : ' top-5 rounded-xl transition-all'}`}>
      <img src={logo} alt="" className='w-40 ' />

      <ul className={`hidden md:flex gap-12 [&>li>a]:cursor-pointer [&>li>a]:text-white justify-center `}>
      <li className='hover:scale-105'><a href="/" className=" text-xl font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full">Home</a></li>
      <li className="hover:scale-105"><NavLink className=" text-xl font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/scope">Why LNMIIT?</NavLink></li>
      {/* <li className='hover:scale-105'><NavLink className=" text-xl relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/admission">Admission</NavLink></li> */}
      {/* <li><NavLink to="/programs">Projects</NavLink></li> */}
      <li className='hover:scale-105'><NavLink className=" text-xl font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/about">About</NavLink></li>
      
      {/* <li className='hover:scale-105'><NavLink className=" text-xl font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/career">Careers</NavLink></li> */}
      <li className='hover:scale-105'><NavLink className=" text-xl font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/facility">Facility</NavLink></li>
      <li className='hover:scale-105'><NavLink className=" text-xl font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/research">Research</NavLink></li> 
      
      </ul>

      <div>
        <button className='btn hidden md:block'>
        <NavLink to="/contact">Contact</NavLink>
        </button> 
      </div>
      <button 
  className="md:hidden text-white text-3xl focus:outline-none transition-transform duration-300" 
  onClick={menuHandler}
>
  <span className={`transition-transform duration-1000 ${openMenu ? 'rotate-180' : 'rotate-0'} `}>
    {openMenu ? <GrClose /> : <FiMenu />}
  </span>
</button>

{/* Mobile Dropdown Menu */}

<ul 
  className={` ${scrolling ? "w-full rounded-none transition-all" : 'rounded-xl transition-all'} absolute  top-20 left-0 w-full bg-gray-900 text-white flex flex-col items-center gap-6 py-4 shadow-lg md:hidden transition-all duration-300 ease-in-out ${openMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
>
  <li className='hover:scale-105'>
    <a href="/" onClick={() => setOpenMenu(false)} className="text-xl font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full">Home</a>
  </li>
  <li className="hover:scale-105">
    <NavLink href="/scope" onClick={() => setOpenMenu(false)}  className="text-xl font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/scope">Why LNMIIT?</NavLink>
  </li>
  <li className='hover:scale-105'>
    <NavLink href="/about" onClick={() => setOpenMenu(false)}  className="text-xl font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/about">About</NavLink>
  </li>
  {/* <li className='hover:scale-105'>
    <NavLink href="/career" className="text-xl font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/career">Careers</NavLink>
  </li> */}
  <li className='hover:scale-105'>
    <NavLink href="/facility" onClick={() => setOpenMenu(false)}  className="text-xl font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/facility">Facility</NavLink>
  </li>
  <li className='hover:scale-105'>
    <NavLink href="/research" onClick={() => setOpenMenu(false)}  className="text-xl font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/research">Research</NavLink>
  </li> 
</ul>

          
      
    </nav>
  );
};

export default NavbarUpdated;


import React from 'react';
import logo from '../../assets/logo.webp'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import { useState , useEffect } from 'react';
const NavbarUpdated = () => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const [whyDropdown, setWhyDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
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
    <nav  className={` z-10 flex justify-between items-center w-[89%] bg-red-900 fixed left-1/2 transform -translate-x-1/2  py-3 px-6  h-20 shadow-xl
    ${scrolling ? " top-0 w-full rounded-none transition-all" : ' top-5 rounded-xl transition-all'}`}>
      <img src={logo} alt="" className='w-44 ' />

      <ul className={`hidden lg:flex gap-6 [&>li>a]:cursor-pointer [&>li>a]:text-white justify-center items-center`}>
      <li className='hover:scale-105'><a href="/" className=" text-lg font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full">{t('navbar.home')}</a></li>
      
      {/* Why Dropdown */}
      <li 
        className="relative hover:scale-105"
        onMouseEnter={() => setWhyDropdown(true)}
        onMouseLeave={() => setWhyDropdown(false)}
      >
        <button className="text-lg font-medium text-white flex items-center gap-1 relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full">
          Why
          <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${whyDropdown ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {whyDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl min-w-[200px] overflow-hidden border border-gray-200"
            >
              <NavLink
                to="/scope"
                className="block px-4 py-3 text-gray-800 hover:bg-red-50 transition-colors duration-150 text-sm font-medium"
              >
                {t('navbar.whyLNMIIT')}
              </NavLink>
              <NavLink
                to="/why-phd"
                className="block px-4 py-3 text-gray-800 hover:bg-red-50 transition-colors duration-150 text-sm font-medium border-t border-gray-100"
              >
                {t('navbar.whyPhD')}
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </li>

      {/* About/Facility/Careers Dropdown */}
      <li 
        className="relative hover:scale-105"
        onMouseEnter={() => setAboutDropdown(true)}
        onMouseLeave={() => setAboutDropdown(false)}
      >
        <button className="text-lg font-medium text-white flex items-center gap-1 relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full">
          About
          <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutDropdown ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {aboutDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl min-w-[200px] overflow-hidden border border-gray-200"
            >
              <NavLink
                to="/about"
                className="block px-4 py-3 text-gray-800 hover:bg-red-50 transition-colors duration-150 text-sm font-medium"
              >
                {t('navbar.about')}
              </NavLink>
              <NavLink
                to="/career"
                className="block px-4 py-3 text-gray-800 hover:bg-red-50 transition-colors duration-150 text-sm font-medium border-t border-gray-100"
              >
                {t('navbar.careers')}
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </li>

      <li className='hover:scale-105'><NavLink className=" text-lg font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/facility">{t('navbar.facility')}</NavLink></li>
      <li className='hover:scale-105'><NavLink className=" text-lg font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/research">{t('navbar.research')}</NavLink></li>
      <li className='hover:scale-105'><NavLink className=" text-lg font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/welding-defects">{t('navbar.defects')}</NavLink></li>
      <li className='hover:scale-105'><NavLink className=" text-lg font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full" to="/blog">{t('navbar.blog')}</NavLink></li>
      </ul>

      <div className="flex items-center gap-3">
        <div className="md:mr-0">
          <LanguageSelector />
        </div>
        <NavLink to="/contact" className="hidden md:block">
          <button className="flex items-center gap-2 px-4 py-3 bg-white border-2 border-red-800 rounded-lg text-red-800 font-semibold hover:bg-red-50 transition-colors duration-200 shadow-md hover:shadow-lg">
            {t('navbar.contact')}
          </button>
        </NavLink> 
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
  className={` ${scrolling ? "w-full rounded-none transition-all" : 'rounded-xl transition-all'} absolute  top-20 left-0 w-full bg-gray-900 text-white flex flex-col items-center gap-5 py-4 shadow-lg md:hidden transition-all duration-300 ease-in-out ${openMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
>
  <li className='hover:scale-105'>
    <a href="/" onClick={() => setOpenMenu(false)} className="text-base font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full">{t('navbar.home')}</a>
  </li>
  <li className="hover:scale-105">
    <NavLink to="/scope" onClick={() => setOpenMenu(false)}  className="text-base font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full">{t('navbar.whyLNMIIT')}</NavLink>
  </li>
  <li className='hover:scale-105'>
    <NavLink to="/why-phd" onClick={() => setOpenMenu(false)}  className="text-base font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full">{t('navbar.whyPhD')}</NavLink>
  </li>
  <li className='hover:scale-105'>
    <NavLink to="/about" onClick={() => setOpenMenu(false)}  className="text-base font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full">{t('navbar.about')}</NavLink>
  </li>
  <li className='hover:scale-105'>
    <NavLink to="/facility" onClick={() => setOpenMenu(false)}  className="text-base font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full">{t('navbar.facility')}</NavLink>
  </li>
  <li className='hover:scale-105'>
    <NavLink to="/research" onClick={() => setOpenMenu(false)}  className="text-base font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full">{t('navbar.research')}</NavLink>
  </li>
  <li className='hover:scale-105'>
    <NavLink to="/welding-defects" onClick={() => setOpenMenu(false)}  className="text-base font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full">{t('navbar.defects')}</NavLink>
  </li>
  <li className='hover:scale-105'>
    <NavLink to="/blog" onClick={() => setOpenMenu(false)}  className="text-base font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full">{t('navbar.blog')}</NavLink>
  </li>
  <li className='hover:scale-105'>
    <NavLink to="/career" onClick={() => setOpenMenu(false)} className="text-base font-medium relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 hover:after:w-full">{t('navbar.careers')}</NavLink>
  </li>
</ul>

          
      
    </nav>
  );
};

export default NavbarUpdated;

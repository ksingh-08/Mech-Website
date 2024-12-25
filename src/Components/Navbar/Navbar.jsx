import React, { useState,useEffect } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  

  // Function to open the menu
  const openMenu = () => {
    setMenuOpen(true);
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };





 const [sticky,setSticky]=useState(false);
 const location = useLocation();

useEffect(() => {
  const handleScroll = () => {
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  };

  // Add event listener only if the current path is the one you want
  if (location.pathname === '/') {
    window.addEventListener('scroll', handleScroll);
  }

  // Cleanup function to remove event listener when component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [location.pathname]); // Re-run the effect when the pathname changes


document.addEventListener("DOMContentLoaded", function() {
  var menuIcon = document.getElementById("menuIcon");
  var dropdownContent = document.getElementById("dropdownContent");

  menuIcon.addEventListener("click", function() {
      dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
  });

 

});

// togglemenu function
const [mobileMenu,setMobileMenu]=useState(false);
const toggleMenu=()=>{
    

  mobileMenu? setMobileMenu(false):setMobileMenu(true);
}



 return (
    <>
                      
     
    {/* <nav className={`container ${sticky? 'dark-nav':''}`} > */}


    
    <nav className= "container dark-nav" >
    
    <NavLink to="/">  
    <img src={logo} alt="" className='logo' />
    </NavLink> 
      
      <ul className={mobileMenu? '': 'hide-mobile-menu'}>
      <li><a href="/">Home</a></li>
      <li><NavLink to="/admission">Admission</NavLink></li>
      {/* <li><NavLink to="/programs">Projects</NavLink></li> */}
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/career">Careers</NavLink></li>
      <li><NavLink to="/facility">Facility</NavLink></li>
      <li><NavLink to="/research">Research</NavLink></li> 


      <li>
        <button className='btn'>
        <NavLink to="/contact">Contact</NavLink>
        </button>
        </li>
         
      </ul>
     
      

      <div className="dropdown">
       
     <div className="menubhai" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
    <img src={menu_icon} alt="Menu" id='menuIcon'    />

    {menuOpen && (
    <div className="dropdown-content" id="dropdownContent" onMouseEnter={openMenu} onMouseLeave={closeMenu} >
 
        {/* <!-- Options in the dropdown menu --> */}
         <ul>
          
           <li>        <NavLink to="/">Home</NavLink></li>
           <li> <NavLink to="/admission">Admission</NavLink></li>
          
          
           <li>        <NavLink to="/faculty">Faculty &amp; Staff</NavLink></li>
          
           <li>        <NavLink to="/facility">Facilities</NavLink></li>
           <li>        <NavLink to="/research">Research</NavLink></li>
           <li>        <NavLink to="/wonder">Wonders of Welding</NavLink></li>
         
           <li>        <NavLink to="/career">Careers</NavLink></li>
           <li>        <NavLink to="/about">About Us</NavLink></li>
           <li>        <NavLink to="/contact">Contact Us</NavLink></li>

          
         </ul>
       
        
    </div>
   

    )}
     </div>
</div>



      

   </nav>
   
   
   </>
  
  )
}
 
export default Navbar

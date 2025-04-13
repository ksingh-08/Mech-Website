
import React, { useEffect } from 'react'
// import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';// line 1 added
import Footer from './Components/Footer/Footer'
import Wonder from './Components/Wonders/Wonder'
import Research from './Components/Research/Research'
import Page1 from './Components/Researchpages/Page1'
import Page2 from './Components/Researchpages/Page2'
import Page3 from './Components/Researchpages/Page3'
import Page4 from './Components/Researchpages/Page4'
import Page5 from './Components/Researchpages/Page5'
 
import Faculty from './Components/Faculty/Faculty'
// import Facility from './Components/Facility/Facility'
// import Facility1 from './Components/FacilityPages/Facility1'
// import Facility2 from './Components/FacilityPages/Facility2'
// import Facility3 from './Components/FacilityPages/Facility3'
// import Facility4 from './Components/FacilityPages/Facility4'
// import Facility5 from './Components/FacilityPages/Facility5'
// import Facility6 from './Components/FacilityPages/Facility6'
// import Facility7 from './Components/FacilityPages/Facility7'
// import Facility8 from './Components/FacilityPages/Facility8'
import Admission from './Components/Admission/Admission'
import Career from './Components/Career/Career'
import './index.css'; 

import EPage1 from './Components/ExtendedPages/Epage1'
import EPage2 from './Components/ExtendedPages/Epage2'
import EPage3 from './Components/ExtendedPages/Epage3'
import FacilityUpdated from './Components/Facility/FacilityUpdated';
import ScrollToTopLayout from './Components/ScrollTo/ScrollToTopLayout';
import NavbarUpdated from './Components/Navbar/NavbarUpdated'
import Fac1Updated from './Components/FacilityPages/Fac1Updated'
import Fac2Updated from './Components/FacilityPages/Fac2Updated'
import Fac3Updated from './Components/FacilityPages/Fac3Updated'
import Fac4Updated from './Components/FacilityPages/Fac4Updated'
import Fac5Updated from './Components/FacilityPages/Fac5Updated'
import Fac6Updated from './Components/FacilityPages/Fac6Updated'
import Fac7Updated from './Components/FacilityPages/Fac7Updated'
import Fac8Updated from './Components/FacilityPages/Fac8Updated'
import Fac10Updated from './Components/FacilityPages/Fac10Updated';
import Scope from './Components/Scope/Scope'
import FacUpdate from './Components/Facility/InfiniteMenu';
import ResearchUpdate from './Components/Research/ResearchUpdate';
import Fac9Updated from './Components/FacilityPages/Fac9Updated';


const App = () => {
  return (
    <div>
         
   
         
    <NavbarUpdated/>
       
       <Routes>
        <Route path="/" element={ <ScrollToTopLayout><Hero/></ScrollToTopLayout>}/>
           <Route path="/about" element={ <ScrollToTopLayout><About/></ScrollToTopLayout>} />
           {/* <Route path="/Programs" element={<ScrollToTopLayout><Programs/></ScrollToTopLayout>} /> */}
           <Route path="/contact" element={ <ScrollToTopLayout><Contact/></ScrollToTopLayout>} />
           <Route path="/wonder" element={<ScrollToTopLayout><Wonder/></ScrollToTopLayout>} />
           <Route path="/research" element={<ScrollToTopLayout><ResearchUpdate/></ScrollToTopLayout>} />
           <Route path="/page1" element={<ScrollToTopLayout><Page1/></ScrollToTopLayout>} />
           <Route path="/page2" element={<ScrollToTopLayout><Page2/></ScrollToTopLayout>} />
           <Route path="/page3" element={<ScrollToTopLayout><Page3/></ScrollToTopLayout>} />
           <Route path="/page4" element={<ScrollToTopLayout><Page4/></ScrollToTopLayout>} />
           <Route path="/page5" element={<ScrollToTopLayout><Page5/></ScrollToTopLayout>} />
          
           <Route path="/faculty" element={<ScrollToTopLayout><Faculty/></ScrollToTopLayout>} />
           <Route path="/facility" element={<ScrollToTopLayout><FacilityUpdated/></ScrollToTopLayout>} />
           <Route path="/facility1" element={<ScrollToTopLayout><Fac1Updated/></ScrollToTopLayout>} />
           <Route path="/facility2" element={<ScrollToTopLayout><Fac2Updated/></ScrollToTopLayout>} />
           <Route path="/facility3" element={<ScrollToTopLayout><Fac3Updated/></ScrollToTopLayout>} />
           <Route path="/facility4" element={<ScrollToTopLayout><Fac4Updated/></ScrollToTopLayout>} />
           <Route path="/facility5" element={<ScrollToTopLayout><Fac5Updated/></ScrollToTopLayout>} />
           <Route path="/facility6" element={<ScrollToTopLayout><Fac6Updated/></ScrollToTopLayout>} />
           <Route path="/facility7" element={<ScrollToTopLayout><Fac7Updated/></ScrollToTopLayout>} />
           <Route path="/facility8" element={<ScrollToTopLayout><Fac8Updated/></ScrollToTopLayout>} />
           <Route path="/facility9" element={<ScrollToTopLayout><Fac9Updated/></ScrollToTopLayout>} />
           <Route path="/facility10" element={<ScrollToTopLayout><Fac10Updated/></ScrollToTopLayout>} />
           <Route path="/admission" element={<ScrollToTopLayout><Admission/></ScrollToTopLayout>} />
           <Route path="/career" element={<ScrollToTopLayout><Career/></ScrollToTopLayout>} />
           <Route path="/industry-consultancy" element={<ScrollToTopLayout><EPage1/></ScrollToTopLayout>} />
           <Route path="/training" element={<ScrollToTopLayout><EPage2/></ScrollToTopLayout>} />
           <Route path="/workshop" element={<ScrollToTopLayout><EPage3/></ScrollToTopLayout>} />
           <Route path="/Scope" element={<ScrollToTopLayout><Scope /></ScrollToTopLayout>} />
           </Routes>
      <Footer/>
      
    </div>
  )
}

export default App

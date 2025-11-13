// import React from 'react'
// import './Footer.css'

// const Footer = () => {
//   return (
//     <div className='footer'>
//       <p>@ 2024 Edusity. All rights reserved.</p>
//       <ul>
//         <li>Terms of Services</li>
//         <li>Privacy Policy</li>
//       </ul>
//     </div>
//   )
// }

// export default Footer



import React from "react"
import { useTranslation } from 'react-i18next';
import "./Footer.css"

import messg from '../../assets/msg-icon.png'
import loc from '../../assets/location-icon.png'
import phone from '../../assets/phone-icon.png'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
    <div className="footer">
      {/* <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section> */}
      <footer>
        <div className='container '>
          <div className='box '>
            <Link to="/" onClick={scrollToTop}><img src={logo} alt="" className="logon"/></Link>
           
             <p>{t('footer.instituteName')}</p>
             
 
          </div>
          <div className='box  '>
            <h3>{t('footer.explore')}</h3>
            <ul>
              <li><Link to="/about">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/career">{t('footer.careers')}</Link></li>
              <li><Link to="/research">{t('footer.research')}</Link></li>
               
              <li><Link to="/contact">{t('footer.contactUs')}</Link></li>
            </ul>
          </div>
          <div className='box  '>
            <h3>{t('footer.quickLinks')}</h3>
            <ul>
              <li><Link to="/facility">{t('footer.facilities')}</Link></li>
              <li><Link to="/admission">{t('footer.admission')}</Link></li>
             
              <li><Link to="/faculty">{t('footer.facultyStaff')}</Link></li>
              <li>{t('footer.termsConditions')}</li>
               
            </ul>
          </div>
          
          <div className='box last'>
            <h3>{t('footer.haveQuestions')}</h3>
            <ul>
              <li>
                <img src={loc} alt="" />
                <span><a href="https://maps.app.goo.gl/rs7qNeq3RgKqnqxQ7" target="_blank">Rupa ki Nagal, Post-Sumel, Via - Jamdoli, Jaipur, Rajasthan 302031</a></span>
              </li>
              <li>
              <img src={phone} alt="" />
              <span>0141 268 8090</span> 
              </li>
              <li>
              <img src={messg} alt="" />
                <span><a href="mailto:nfo.lnmiit@lnmiit.ac.in" target="_blank">info.lnmiit@lnmiit.ac.in</a></span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
            {t('footer.copyright')} |&nbsp; {t('footer.allRightsReserved')} | {t('footer.lastUpdated')} | {t('footer.webSupport')}
            <a  href="mailto:web.support@lnmiit.ac.in">web.support@lnmiit.ac.in</a>
        </p>
      </div>
      </div>
    </>
  )
}

export default Footer
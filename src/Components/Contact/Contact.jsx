import React, { useRef,useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import messg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import loc from '../../assets/location-icon.png'
import warrow from '../../assets/white-arrow.png'
import Title from '../Title/Title'
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
 


const Contact = () => {
  const { t } = useTranslation();
  const [result,setResult]=React.useState("");
   
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setResult(t('contact.sending'))
    console.log(form.current)
    emailjs
      .sendForm('service_j8cpddp', 'template_opqet78', form.current, {
        publicKey: 'CopLW5vHMyTqo_kwJ',
      })
      .then(
        (result) => {
          console.log(result.text);
          setResult(t('contact.success'));
          setTimeout(() => {
            
            setResult(null)
          }, 1000);
           
          e.target.reset();
          
          // alert("message sent successfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
          setResult(t('contact.error'))
         
        },
      );
  };


  return (
    <>
     
    <div className="allcontainer mt-10">
    <div className="contact-up">
     <Title subTitle={t('contact.subtitle')} title={t('contact.title')}/>
     </div>
    <div className="contact">
    
        <div className="contact-col">
            <h3>
                {t('contact.sendMessage')}
                <picture>
                    <img src={messg} alt="hero img"/>
                </picture>
            </h3>
            <p>
                {t('contact.description')}
            </p>
            <ul>
                <li><picture>
                    <img src={mail} alt="hero img"/>
                </picture><a href="mailto:nfo.lnmiit@lnmiit.ac.in" target="_blank">info.lnmiit@lnmiit.ac.in</a></li>
                <li><picture>
                    <img src={phone} alt="hero img"/>
                </picture>0141 268 8090</li>
                <li> <a href="https://maps.app.goo.gl/rs7qNeq3RgKqnqxQ7"target="_blank"><picture>
                    <img src={loc} alt="hero img"/>
                </picture></a>
                <a href="https://maps.app.goo.gl/rs7qNeq3RgKqnqxQ7" target="_blank">Rupa ki Nagal, Post-Sumel, Via - Jamdoli, Jaipur, Rajasthan 302031</a>
                
                </li>
            </ul>
        </div>
        <div className="contact-col">
            <form ref ={form} onSubmit={sendEmail}>
                <label>{t('contact.name')}</label>
                <input type="text"  name='user_name' placeholder={t('contact.namePlaceholder')} required/>
                <label>{t('contact.email')}</label>
                <input type="email"  name='user_email' placeholder={t('contact.emailPlaceholder')} required/>
                {/* <label>Phone Number</label>
                <input type="tel" name='phone' placeholder="Enter Your Number" required/> */}
                <label>{t('contact.message')}</label>
                <textarea name="message"  rows="6" placeholder={t('contact.messagePlaceholder')} required></textarea>
                <button type="submit" className="btn dark-btn">
                <div>{t('contact.submit')}</div>
                
                <picture>
                    <img className='arrow' src={warrow} alt="hero img"/>
                </picture></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
    </div>
     
  
   </>
  )
}



export default Contact

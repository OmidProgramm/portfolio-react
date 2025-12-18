import React from 'react';
import './Contact.css';
import company1 from '../../assets/images/company1.png';
import company2 from '../../assets/images/company2.png';
import company3 from '../../assets/images/company3.png';
import company4 from '../../assets/images/company4.png';
import facebook from '../../assets/images/facebook-icon.png';
import github from '../../assets/images/github.png';
import telegram from '../../assets/images/telegram.png';
import twitter from '../../assets/images/twitter.png';

export default function Contact() {
  return (
    <section className="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of Companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
                <img src={company1} alt="client" className="clientImg" />
                <img src={company2} alt="client" className="clientImg" />
                <img src={company3} alt="client" className="clientImg" />
                <img src={company4} alt="client" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm'>
                <input type="text" className="name" placeholder='Your Name'/>
                <input type="email" className="email" placeholder='Your Email'/>
                <textarea name="message" rows={5} placeholder='Your Message' className='msg'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={facebook} alt="facebook" className='link'/>
                    <img src={github} alt="github" className='link'/>
                    <img src={telegram} alt="telegram" className='link'/>
                    <img src={twitter} alt="twitter" className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

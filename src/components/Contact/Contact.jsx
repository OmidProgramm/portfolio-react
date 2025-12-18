import React from 'react';
import './Contact.css';
import company1 from '../../assets/images/company1.png';
import company2 from '../../assets/images/company2.png';
import company3 from '../../assets/images/company3.png';
import company4 from '../../assets/images/company4.png';

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
        <div id="contact"></div>
    </section>
  )
}

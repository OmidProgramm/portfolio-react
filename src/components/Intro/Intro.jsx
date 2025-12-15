import React from 'react'
import './Intro.css';
import bg from '../../assets/images/image.png';
import btnImg from '../../assets/images/btnImg.png';
import { Link } from 'react-scroll';
export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm a <span className='introName'>Developer</span><br/>Website Designer</span>
        <p className="introPara">
          I'm a passionate web designer crafting visually stunning and user friendly websites
        </p>
        <Link><button className='btn'><img src={btnImg} alt="contact-image" className='btnImg'/>Contact Me</button></Link>
      </div>
      <img src={bg} alt="portfolio-Image" className="bg" />
    </section>
  )
}
export default Intro;

import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo2.png';
import contactImg from '../../assets/images/contact.png';
import {Link} from 'react-scroll';

export const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
            <Link className='desktopMenuListItem'>Clients</Link>
            </div>  
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
        </button>  
    </nav>
  )
}
export default Navbar;

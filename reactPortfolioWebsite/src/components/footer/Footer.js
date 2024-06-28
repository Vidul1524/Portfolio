import React from 'react';
import './footer.css';
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>VidulGarg</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/vidul-garg-vg152410/"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/v._dul._/"><IoLogoInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Vidul Garg. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;

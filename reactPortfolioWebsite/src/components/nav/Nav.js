import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri";
import { MdComputer } from "react-icons/md";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { useState } from 'react'

const Nav = () => {
  // to change the hovering of the active menu on the navbar. useState is used
  // activeNav is containing '#' and setActiveNav is used to change
  const [activeNav,setActiveNav]=useState('#') //this # up here is making the background (hover) of the nav visible
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><RiUser3Line/></a>   
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdComputer/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineHomeRepairService/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiMessage/></a>
      {/* using the onclick, we are changing the hover */}
    </nav>
  )
}

export default Nav
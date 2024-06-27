import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { FaKaggle } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vidul-garg-vg152410/" target="_blank" rel="noreferrer">
          <FaLinkedinIn className="icon" />
          <span className="label">LinkedIn</span>
        </a>
        <a href="https://github.com/Vidul1524" target="_blank" rel="noreferrer">
          <FaGithubAlt className="icon" />
          <span className="label">GitHub</span>
        </a>
        <a href="https://leetcode.com/u/v_dul/" target="_blank" rel="noreferrer">
          <SiLeetcode className="icon" />
          <span className="label">Leetcode</span>
        </a>
        <a href="https://www.naukri.com/code360/profile/Vidul" target="_blank" rel="noreferrer">
          <SiCodingninjas className="icon" />
          <span className="label">CodingNinjas</span>
        </a>
        <a href="https://www.kaggle.com/vidulgarg" target="_blank" rel="noreferrer">
          <FaKaggle className="icon" />
          <span className="label">Kaggle</span>
        </a>
        
    </div>
  )
}

export default HeaderSocials

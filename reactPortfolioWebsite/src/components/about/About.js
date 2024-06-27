import React from 'react'
import './about.css'
import ME from '../../assets/pic7.jpg'
import { LuAward } from "react-icons/lu";
import { MdOutlineLibraryBooks } from "react-icons/md";

const About = () => {
  return (
    <section id='about'>
      <h4>Get To Know </h4>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="aboutME" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {/*Each card will have article tag in it*/}
            <article className='about__card'>
               <LuAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
               <MdOutlineLibraryBooks className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>

          </div>

          <p> I'm an ambitious and dedicated software engineer, with a strong desire to contribute to an organization. Eager to apply my hands-on software development and data-driven experience to solve real-world challenges. I'm an agile learner and confident enough when it comes to programming and a person who is full of enthusiasm.  
          </p>

          {/*A button to contact section*/}
          <a href="#contact" className='btn btn-primary'>Want to know more? Connect me!</a>
        </div>
      </div>
    </section>
  )
}

export default About
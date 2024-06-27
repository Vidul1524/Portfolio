import React from 'react'
import './experience.css'
import { BsCalendarCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h4>My skills</h4>
      <h1>Technical Skills</h1>
      <div className="container experience__container">
        <div className="experience_languages">
          <h3>Programming Languages</h3>
          <div className="experience_content">
            <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
                <div>
                  <h4>C/C++</h4>
                  <small className='text-light'>Proficient</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>R</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            {/* <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> */}
          </div>
        </div>

        {/* Data Science */}
        <div className="experience_datascience">
        <h3>Data Science</h3>
          <div className="experience_content">
            <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>Machine Learning</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>Natural Language Processing</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>Deep Learning</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>Data Analytics</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>NumPy and Pandas</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
          </div>  
        </div>


        <div className="experience_webd">
        <h3>Web Development</h3>
          <div className="experience_content">
            <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>  
        </div>
      </div>

    </section>
  )
}

export default Experience
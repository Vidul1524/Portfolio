import React from 'react'
import './services.css'
import { PiShieldCheckFill } from "react-icons/pi";

const Services = () => {
  return (
    <section id='services'>
      <h4>What I Offer</h4>
      <h1>Services</h1>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3><b>AI & Machine Learning</b></h3>
          </div>
          <ul className='service__list'>
            <li>
              <PiShieldCheckFill className='service__list-icon'/>
              <p>Development and deployment of machine learning models using Python.</p>
            </li>
            <li>
              <PiShieldCheckFill className='service__list-icon'/>
              <p>Proficient in using Python packages such as NumPy, Pandas, and Scikit-Learn.</p>
            </li>
            <li>
              <PiShieldCheckFill className='service__list-icon'/>
              <p>Worked on NLP Libraries and Deep learning with ANN and CNN.</p>
            </li>
            <li>
              <PiShieldCheckFill className='service__list-icon'/>
              <p>Proficient in Data visualization using Matplotlib and Seaborn, Data cleaning and feature engineering.</p>
            </li>
          </ul>
        </article>
        {/* End of AI */}
        <article className='service'>
          <div className="service__head">
            <h3><b>Web Development</b></h3>
          </div>
          <ul className='service__list'>
            <li>
              <PiShieldCheckFill className='service__list-icon'/>
              <p>Building responsive and dynamic websites using HTML and CSS.</p>
            </li>
            <li>
              <PiShieldCheckFill className='service__list-icon'/>
              <p>Development of interactive user interfaces with React.js</p>
            </li>
          </ul>
        </article>
        {/* end of webdevelopment */}
        <article className='service'>
          <div className="service__head">
            <h3><b>Programming Skills</b></h3>
          </div>
          <ul className='service__list'>
            <li>
              <PiShieldCheckFill className='service__list-icon'/>
              <p>Building robust and efficient data structures and algorithms.</p>
            </li>
            <li>
              <PiShieldCheckFill className='service__list-icon'/>
              <p>Enhancing performance and optimizing code for better efficiency.</p>
            </li>
            <li>
              <PiShieldCheckFill className='service__list-icon'/>
              <p>Strong understanding of fundamental data structures (such as arrays, linked lists, stacks, queues) and algorithms (sorting, searching), with hands-on experience solving problems on platforms like LeetCode and Coding Ninjas.</p>
            </li>
          </ul>
        </article>
        {/* programming skills */}
        <article className='service'>
          <div className="service__head">
            <h3><b>Data Analytics</b></h3>
          </div>
          <ul className='service__list'>
            <li>
              <PiShieldCheckFill className='service__list-icon'/>
              <p>Comprehensive data analysis and interpretation.</p>
            </li>
            <li>
              <PiShieldCheckFill className='service__list-icon'/>
              <p>Building interactive and insightful dashboards using Power BI.</p>
            </li>
            <li>
              <PiShieldCheckFill className='service__list-icon'/>
              <p>Performing exploratory data analysis (EDA) to uncover hidden patterns and insights.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/p1.jpg'
import IMG2 from '../../assets/p2.jpg'
import IMG3 from '../../assets/p6.jpg'
import IMG4 from '../../assets/p4.jpg'
import IMG5 from '../../assets/p5.jpg'
import IMG6 from '../../assets/p3.jpg'


// Array of items
const data= [
  {
    id:1,
    image:IMG1,
    title: 'Movie-Recommendation-System',
    github: 'https://github.com/Vidul1524/Movie_Recommender_ML_Project'
  },
  {
    id:2,
    image:IMG2,
    title: 'Covid-19-PowerBI-Dashboard',
    github: 'https://github.com/Vidul1524/Power-BI-Dashboards/blob/main/Covid19DataProject.pbix'
  },
  {
    id:3,
    image:IMG3,
    title: 'Portfolio Website',
    github: 'https://github.com/Vidul1524/Portfolio'
  },
  {
    id:4,
    image:IMG4,
    title: 'EMail-Spam-Detection',
    github: 'https://github.com/Vidul1524/EMail-Spam-Detector-ML-NLP-'
  },
  {
    id:5,
    image:IMG5,
    title: 'Text-Analysis (URL Articles)',
    github: 'https://github.com/Vidul1524/Text-Analysis-URL-Articles-'
  },
  {
    id:6,
    image:IMG6,
    title: 'Campus-Placement-Analysis',
    github: 'https://github.com/Vidul1524/IBM-CampusPlacementAnalysis-'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Work</h4>
      <h1>Projects</h1>

      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo}) => {
          return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>  
              </div>  
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio 

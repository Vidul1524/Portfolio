import React from 'react'
import Resume from '../../assets/Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Here's my resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA
import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineWhatsapp } from "react-icons/md";
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form= useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e6vy13c', 'template_drb3g4o', form.current, 'zR-S_3d6QgyeL75FQ')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h4>Get in Touch</h4>
      <h1>Contact Me</h1>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vidulgarg1524@gmail.com</h5>
            <a href="mailto:vidulgarg1524@gmail.com" target="_blank" rel="noreferrer"><h3>Email me</h3></a>
          </article>
          <article className="contact__option">
            <FaLinkedinIn className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Vidul Garg</h5>
            <a href="https://www.linkedin.com/in/vidul-garg-vg152410/" target="_blank" rel="noreferrer"><h3>Send a Message</h3></a>
          </article>
          <article className="contact__option">
            <MdOutlineWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=7986735559" target="_blank" rel="noreferrer"><h3>Send a Message</h3></a>
          </article>
        </div>
        {/*  end of contact options*/}

        {/*Form to send message directly*/} 
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
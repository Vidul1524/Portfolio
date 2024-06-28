import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/pic6.jpeg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home"> {/* Add id="home" here */}
      <div className="container header__container">
        <h3>Hey, I'm</h3>
        <h1>Vidul Garg</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
}

export default Header;

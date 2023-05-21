import React, { useState, useEffect, useRef } from 'react'
import CTA from "./CTA.jsx";
import HeaderSocials from "./HeaderSocial.jsx";
import ME from "../../assets/me1.png";
import "./header.css";
import Typewriter from 'typewriter-effect';

const Header = () => {

  return (
    <header id="header">
      <div className="container header_container">
        <h5 className='margin_top'>Hello I'm</h5>
        <h1 className='header_title'>Deepu Kumar.</h1>        
        <div className='margin_top'>
          <Typewriter
            options={{
              strings: ['React.JS Developer', "React Native Developer", "Node.JS Developer", "Next.JS Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>      
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className='me_img' src={ME} alt="" />
        </div>       
      </div>
    </header>
  );
};

export default Header;

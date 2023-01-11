import React, { useState, useEffect, useRef } from 'react'
import CTA from "./CTA.jsx";
import HeaderSocials from "./HeaderSocial.jsx";
import ME from "../../assets/me.png";
import "./header.css";
import DOTS from 'vanta/dist/vanta.dots.min';


const Header = () => {

  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(DOTS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,       
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff2095,
        backgroundColor: 0xffffff,
        size: 4.40,
        showLines: false
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);


  return (
    <header ref={myRef}>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Deepu Kumar</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

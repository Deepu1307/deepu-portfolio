import React, { useState, useEffect, useRef } from 'react'
import CTA from "./CTA.jsx";
import HeaderSocials from "./HeaderSocial.jsx";
import ME from "../../assets/me1.png";
import "./header.css";
import DOTS from 'vanta/dist/vanta.dots.min';
import Typewriter from 'typewriter-effect';



const Header = () => {

  // const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(DOTS({
  //       el: myRef.current,
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       scale: 1.00,
  //       scaleMobile: 1.00,
  //       color: 0xff2095,
  //       backgroundColor: "#fff",
  //       size: 10,
  //       showLines: false
  //     }))
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy()
  //   }
  // }, [vantaEffect]);me_img


  return (
    <header ref={myRef} id="header">
      <div className="container header_container">
        <h5 className='margin_top'>Hello I'm</h5>
        <h1>Deepu Kumar</h1>
        {/* Here I will use typewriter effect */}
        {/* <h5 className="text-light">Fullstack Developer</h5> */}
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

        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
      </div>
    </header>
  );
};

export default Header;

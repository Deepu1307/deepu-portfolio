import React from 'react';
import CTA from "./CTA.jsx";
import HeaderSocials from "./HeaderSocial.jsx";
import ME from "../../assets/pic.jpeg";
import "./header.css";
import Typewriter from 'typewriter-effect';
import { SiReact, SiFlutter, SiGooglecloud } from "react-icons/si";

const Header = () => {
  return (
    <header id="header" className="grid-bg">
      <div className="container header_container">
        {/* Left: Content */}
        <div className="header__content">
          <div className="header__badge">
            <span className="dot"></span>
            Open for Freelance & Senior Engineering Roles
          </div>

          <p className="header__greeting">Hello, I'm</p>
          <h1 className="header_title">Deepu Kumar.</h1>

          <div className="header__typewriter">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Software Engineer',
                  'Flutter & Mobile App Specialist',
                  'React.js & Microfrontends Engineer',
                  'NestJS & Node.js Architect',
                  'Fintech & Payment Systems Expert',
                  'GCP, AWS & Cloud-Native Architect',
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 25,
              }}
            />
          </div>

          <p className="header__description">
            4 years of experience designing and engineering distributed, cloud-native
            applications across <strong>GCP, AWS & Azure</strong>. From microfrontends and
            Flutter apps to high-scale microservices, wallet ledger architectures, and Stripe payment ecosystems.
          </p>

          <CTA />

          <div className="header_socials">
            <HeaderSocials />
          </div>

          <div className="header__stats">
            <div className="stat__item">
              <span className="stat__number">4+</span>
              <span className="stat__label">Years Exp.</span>
            </div>
            <div className="stat__item">
              <span className="stat__number">25+</span>
              <span className="stat__label">Production Apps</span>
            </div>
            <div className="stat__item">
              <span className="stat__number">2</span>
              <span className="stat__label">Enterprise Cos.</span>
            </div>
            <div className="stat__item">
              <span className="stat__number">100%</span>
              <span className="stat__label">Cloud-Native</span>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="header__visual">
          <div className="me">
            <div className="me__img-wrap">
              <img className="me_img" src={ME} alt="Deepu Kumar" />
            </div>

            {/* Floating tech tags */}
            <div className="floating-tag floating-tag--1">
              <SiReact className="tag-icon" style={{color: '#61DAFB'}} />
              React & Microfrontends
            </div>
            <div className="floating-tag floating-tag--2">
              <SiFlutter className="tag-icon" style={{color: '#02569B'}} />
              Flutter & Mobile
            </div>
            <div className="floating-tag floating-tag--3">
              <SiGooglecloud className="tag-icon" style={{color: '#4285F4'}} />
              GCP & Cloud Run
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator__line"></div>
        <span>Scroll</span>
      </div>
    </header>
  );
};

export default Header;

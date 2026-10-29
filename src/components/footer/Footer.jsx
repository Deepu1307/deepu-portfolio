import React from "react";
import "./footer.css";
import {
  BsLinkedin, BsGithub, BsStackOverflow, BsTwitter, BsInstagram
} from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#header" className="footer_logo">Deepu.</a>
            <p className="footer__brand-desc">
              Full Stack Software Engineer (4+ Yrs Exp) specializing in Flutter,
              React.js, NestJS, and Cloud Architecture across GCP, AWS & Azure.
              Building distributed, payment-ready platforms for global scale.
            </p>
            <div className="footer__socials">
              <a href="https://www.linkedin.com/in/deepu1307/" target="_blank" rel="noreferrer" title="LinkedIn">
                <BsLinkedin />
              </a>
              <a href="https://github.com/Deepu1307" target="_blank" rel="noreferrer" title="GitHub">
                <BsGithub />
              </a>
              <a href="https://www.instagram.com/deepuk_1307/" target="_blank" rel="noreferrer" title="Instagram">
                <BsInstagram />
              </a>
              <a href="https://stackoverflow.com/users/14964835/deepu-kumar" target="_blank" rel="noreferrer" title="Stack Overflow">
                <BsStackOverflow />
              </a>
              <a href="https://twitter.com/DeepuDeveloper" target="_blank" rel="noreferrer" title="Twitter / X">
                <BsTwitter />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#timeline">Work Experience</a></li>
              <li><a href="#experience">Skills & Stack</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#packages">Freelance Sprints</a></li>
              <li><a href="#projects">Company & Personal Projects</a></li>
              <li><a href="#articles">Architecture Notes</a></li>
              <li><a href="#testimonials">Recommendations</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4>Core Solutions</h4>
            <ul>
              <li><a href="#services">Flutter Mobile Apps (iOS & Android)</a></li>
              <li><a href="#services">React.js Microfrontends</a></li>
              <li><a href="#services">NestJS & Distributed Microservices</a></li>
              <li><a href="#services">Stripe & Wallet Ledger Systems</a></li>
              <li><a href="#services">GCP / AWS Cloud-Native Deployments</a></li>
              <li><a href="#services">OpenAI & AI Automation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            &copy; {year} <span>Deepu Kumar</span>. All rights reserved.
          </div>
          <div className="footer__made-with">
            Crafted with <span className="heart">♥</span> • Available globally
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

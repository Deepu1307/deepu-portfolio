import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram, BsStackOverflow, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return <footer>
    <a href="#" alt="footer__logo">Deepu.</a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#Services">Services</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/deepu1307/" target="_blank"><BsLinkedin className="footer__social__icon" /></a>
      <a href="https://github.com/Deepu1307" target="_blank"><BsGithub /></a>
      <a href="https://stackoverflow.com/users/14964835/deepu-kumar" target="_blank"><BsStackOverflow /></a>
      <a href="https://twitter.com/DeepuDeveloper" target="_blank"><BsTwitter /></a>
      <a href="https://www.instagram.com/deepuk_1307/" target="_blank"><BsInstagram /></a>
      <a href="https://www.facebook.com/deepu13/" target="_blank"><BsFacebook /></a>
    </div>

  <div className="footer__copyright">
      <small>&copy; Deepu Kumar. All rights reserved. </small>
      {/* <u><a href="https://github.com/Deepu1307/deepu-portfolio">Source code of this website</a></u> */}
    </div>
  </footer>;
};

export default Footer;

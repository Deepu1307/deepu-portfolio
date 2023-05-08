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
      <a href=""><BsLinkedin className="footer__social__icon" /></a>
      <a href=""><BsGithub /></a>
      <a href=""><BsStackOverflow /></a>
      <a href=""><BsTwitter /></a>
      <a href=""><BsInstagram /></a>
      <a href=""><BsFacebook /></a>
    </div>

    ----------    <div className="footer__copyright">
      <small>&copy; Deepu Kumar. All rights reserved. </small>
    </div>
  </footer>;
};

export default Footer;

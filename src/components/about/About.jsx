import React from "react";
import "./about.css";
import ME from "../../assets/me2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me--img">
            <img className='about__me--style' src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small className="text-light-small">1 Yr 6 Months...</small>
            </article>
            <article className="about__card"> 
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small className="text-light-small">3+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small className="text-light-small">15+ Completed </small>
            </article>
          </div>
          <p className="about__content__para">
            Hi 👋, Thank you for showing interest in me.
          </p>
          <p className="about__content__para">
            I am currently working as a Full Stack Javascript Developer at <a className="about_link" href="https://entiovi.com/" target="_blank">Entiovi Technologies Pvt. Ltd.</a> Technologies which I use : React.js, Node.js, Express.js, PostgreSQL, Sequalize, Azure Functions, AWS, Kendo UI, MUI etc.
          </p>         
          <a className="btn btn-primary" href="#contact">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

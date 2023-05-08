import React from "react";
import "./about.css";
import ME from "../../assets/me2e.jpg";
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
              <small>3+ Months Working </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>3+ Woldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed </small>
            </article>
          </div>
          <p className="about__content__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            laboriosam voluptatibus dolorem doloribus nulla vero, ab, cumque aut
            temporibus consequatur facere, quisquam similique. Sequi minima
            placeat cumque consectetur dolorum iusto.
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

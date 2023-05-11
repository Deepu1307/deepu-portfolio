import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-end development (HTML, CSS, JavaScript & React.js).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Back-end development (using frameworks like Node.js etc.)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web testing and quality assurance & deployment and maintenance.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrations with third-party APIs and services.</p>
            </li>
          </ul>
        </article>
        {/* End Of Web Development*/}
        <article className="service">
          <div className="service__head">
            <h3>App Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Native app development (iOS and Android).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Hybrid app development (using React Native).</p>
            </li>          
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrations with third-party APIs and services.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>App testing and quality assurance so that it works.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>App deployment and maintenance to run smoothly.</p>
            </li>
          </ul>
        </article>
        {/* End Of App Developement*/}
        <article className="service">
          <div className="service__head">
            <h3>DevOps</h3>
          </div>
          <ul className="service__list">          
            <li>
              <BiCheck className="service__list-icon" />
              <p>Continuous integration and continuous delivery (CI/CD).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cloud computing (using services like AWS, Azure, Google Cloud).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Security and compliance, Automation and orchestration.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Disaster recovery and business continuity planning.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

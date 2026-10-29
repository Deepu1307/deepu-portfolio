import React from "react";
import "./about.css";
import PIC from "../../assets/pic.jpeg";
import { FaAward, FaGraduationCap } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsChatDots } from "react-icons/bs";
import CV from "../../assets/deepu.pdf";
import { HiArrowDown } from "react-icons/hi";

const stack = [
  "React.js", "Next.js", "Flutter", "NestJS", "Node.js", "TypeScript",
  "PostgreSQL", "MongoDB", "GCP", "AWS", "Azure", "Microservices",
  "Microfrontends", "Stripe & Wallets", "Docker", "OpenAI APIs"
];

const About = () => {
  return (
    <section id="about">
      <p className="section__label">Engineering Profile</p>
      <h2 className="section__title">About Me</h2>
      <div className="section__divider"><span></span></div>

      <div className="container about__container">
        {/* Left: Image with badge */}
        <div className="about__me">
          <div className="about__img-wrap">
            <img className="about__me--style" src={PIC} alt="Deepu Kumar" />
            <div className="about__exp-badge">
              <span className="exp-years">4+</span>
              <span className="exp-label">Years Production<br/>Experience</span>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Full Stack</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Track Record</h5>
              <small>Talink & Entiovi</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Production</h5>
              <small>25+ Scaled Systems</small>
            </article>
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>MCA Post Graduate</small>
            </article>
          </div>

          <div className="about__bio">
            <p>
              Hi 👋 I'm <strong>Deepu Kumar</strong> — a Full Stack Software Engineer with{" "}
              <strong>4 years of experience</strong> architecting and building scalable web, mobile,
              and distributed cloud systems.
            </p>
            <p>
              Currently working as a <strong>Software Engineer at Talink Software India Pvt. Ltd. (Chandigarh)</strong>,
              leading the decomposition of monolithic backends into independently deployable microservices,
              architecting the <strong>TalentDec</strong> expert consultation platform with Flutter & NestJS,
              and engineering complete Stripe payment/wallet ledger systems.
            </p>
            <p>
              Previously at <strong>Entiovi Technologies Pvt. Ltd. (Kolkata)</strong>, where I developed
              high-throughput systems including <strong>Bulkmatic</strong> (North America logistics),
              <strong> Alfa</strong> (AI-driven financial crime & AML platform), and <strong>Teach195</strong> (UK education platform).
            </p>
            <p>
              🎓 <strong>Master of Computer Applications (MCA)</strong>, ISBM University, Gariaband (2024–2026) • <strong>B.Sc. Mathematics (Hons.)</strong>, VKSU, Ara (2018–2022).
            </p>
          </div>

          <div className="about__stack">
            {stack.map((tech, i) => (
              <span key={i} className="stack-pill">{tech}</span>
            ))}
          </div>

          <div className="about__cta">
            <a className="btn btn-primary" href="#contact">
              <BsChatDots /> Let's Talk
            </a>
            <a className="btn" href={CV} download="Deepu_Kumar_Resume.pdf">
              <HiArrowDown /> Download Resume
            </a>
            <a
              className="btn"
              href="https://www.instagram.com/deepuk_1307/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram @deepuk_1307
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

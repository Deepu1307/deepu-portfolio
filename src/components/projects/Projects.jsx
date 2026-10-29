import React, { useState } from "react";
import "./projects.css";
// Real Professional Project Screenshots
import TALENTDEC_IMG from "../../assets/talentdec.png";
import PROGRESSIFY_IMG from "../../assets/progressify.png";
import BULKMATIC_IMG from "../../assets/bulkmatic.png";
import ALFA_IMG from "../../assets/alfa.png";
import TEACH195_IMG from "../../assets/teach195.png";
import CLEAREDTALENT_IMG from "../../assets/clearedtalent.png";

// Personal Project Screenshots
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";

import { BsGithub, BsArrowUpRightCircle, BsGlobe, BsX, BsCpu, BsShieldCheck } from "react-icons/bs";
import { MdWorkOutline, MdPerson, MdGridView } from "react-icons/md";
import { BiLayer } from "react-icons/bi";

// ─── REAL ENTERPRISE & COMPANY WORK (TALINK & ENTIOVI) ─────────────────────
const professionalProjects = [
  {
    id: "pro-1",
    image: TALENTDEC_IMG,
    title: "TalentDec — Expert Consultation Platform",
    company: "Talink Software",
    description:
      "Architected and developed a full-scale expert consultation platform with Flutter mobile app and NestJS microservices on GCP. Implemented wallet infrastructure, Stripe payouts, Zoom API meeting lifecycle, OpenAI content summarization, and Firebase FCM.",
    tech: ["Flutter", "NestJS", "PostgreSQL", "GCP", "Stripe", "OpenAI"],
    website: "https://talentdec.com/",
    hasMobile: true,
    type: "professional",
    caseStudy: {
      challenge: "TalentDec operated on a monolithic backend facing high latency spikes during simultaneous consultations, lack of an automated payout settlement system for experts, and manual Zoom meeting lifecycle coordination.",
      solution: "Led decomposition of the monolith into 2 NestJS microservices deployed on GCP Cloud Run with VPC isolation. Architected a custom double-entry wallet ledger for credits, debits, and Stripe Connect automated payouts. Automated Zoom room lifecycle via webhook event processing.",
      architecture: "Flutter Mobile • NestJS Microservices • PostgreSQL • GCP Cloud Run • Stripe Connect • Zoom Webhooks • OpenAI API",
      metrics: [
        { num: "100%", label: "Automated Reconciliation" },
        { num: "2 Microservices", label: "GCP Cloud Run" },
        { num: "0 Discrepancy", label: "Ledger Accuracy" },
      ],
    },
  },
  {
    id: "pro-2",
    image: PROGRESSIFY_IMG,
    title: "SchoolTalk (Progressify) — EdTech Ecosystem",
    company: "Talink Software",
    description:
      "Large-scale education platform built on Microfrontend and Microservices architecture (Auth, Progress, Progressions, SchoolTalk, Shell). Modernized legacy UI into reusable React modules, integrated custom test workflows, and built Azure Front Door delivery.",
    tech: ["React.js", "Microfrontends", "Node.js", ".NET", "Azure", "REST APIs"],
    website: "https://www.progressify.io/",
    type: "professional",
    caseStudy: {
      challenge: "A legacy monolith UI created deployment bottlenecks, where updates to student assessment modules risked breaking attendance and progress reporting for thousands of active educators.",
      solution: "Separated the application into loosely coupled Microfrontends (Auth, Progress, Progressions, Shell) using React.js and a centralized Shell container. Replaced legacy components with reusable design modules and optimized global asset delivery via Azure Front Door / CDN.",
      architecture: "React.js • Microfrontends Architecture • .NET Backend • Azure Front Door CDN • Custom Test Workflows",
      metrics: [
        { num: "5 Apps", label: "Microfrontend Ecosystem" },
        { num: "50%", label: "Faster Release Cycle" },
        { num: "<1s", label: "Cached Asset Delivery" },
      ],
    },
  },
  {
    id: "pro-3",
    image: BULKMATIC_IMG,
    title: "Bulkmatic — North American Logistics & Freight",
    company: "Entiovi Technologies",
    description:
      "Mission-critical supply chain platform managing carrier workflows, automated order scheduling, and terminal operations across North America. Integrated Microsoft SSO, Google Sign-In, and high-throughput Node.js/PostgreSQL REST APIs.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Azure DevOps"],
    website: "https://www.bulkmatic.com/",
    type: "professional",
    caseStudy: {
      challenge: "Managing carrier assignments and order scheduling across 50+ freight terminals across North America required robust real-time updates and strict enterprise authentication compliance.",
      solution: "Engineered scalable REST APIs using Node.js and PostgreSQL with Sequelize ORM. Implemented dual SSO with Microsoft Account and Google Sign-In. Automated continuous integration and deployment with Azure DevOps and GitHub Actions.",
      architecture: "React.js • Node.js / Express.js • PostgreSQL • Azure DevOps • Microsoft Azure SSO",
      metrics: [
        { num: "50+", label: "Terminals Serviced" },
        { num: "40%", label: "Deployment Effort Cut" },
        { num: "99.9%", label: "Operational Uptime" },
      ],
    },
  },
  {
    id: "pro-4",
    image: ALFA_IMG,
    title: "Alfa (Anaptyss) — AI Financial Crime & AML Prevention",
    company: "Entiovi Technologies",
    description:
      "Developed frontend modules and backend API integrations for an AI-powered financial crime platform. Empowers compliance analysts to investigate alerts, manage regulatory cases, and reduce false positives via automated workflows.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AI Automation", "REST APIs"],
    website: "https://www.anaptyss.com/alfa",
    type: "professional",
  },
  {
    id: "pro-5",
    image: TEACH195_IMG,
    title: "Teach195 — UK School Recruitment Platform",
    company: "Entiovi Technologies",
    description:
      "Enhanced Flutter-based recruitment mobile platform for UK schools. Built job matching workflows, candidate profile tracking, push notifications, and high-performance mobile UI for educators and institutions.",
    tech: ["Flutter", "Dart", "Firebase", "REST APIs", "Node.js"],
    website: "https://www.teach195.com/",
    hasMobile: true,
    type: "professional",
  },
  {
    id: "pro-6",
    image: CLEAREDTALENT_IMG,
    title: "ClearedTalent — Defense & Tech Talent Marketplace",
    company: "Entiovi Technologies",
    description:
      "Built candidate assessment modules, profile management, and smart job matching workflows using Next.js, Node.js, and MongoDB. Streamlined candidate vetting and client recruiter dashboards.",
    tech: ["Next.js", "Node.js", "MongoDB", "Express.js", "AWS"],
    website: "https://www.clearedtalent.com/",
    type: "professional",
  },
];

// ─── PERSONAL & OPEN SOURCE PROJECTS ───────────────────────────────────────
const personalProjects = [
  {
    id: "pers-1",
    image: IMG5,
    title: "Enterprise Hotel Booking Platform",
    description:
      "Full-stack hotel and room reservation platform with real-time room availability, Stripe payment checkout, review management, and administrative analytics dashboard.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Sequelize", "AWS"],
    github: "https://github.com/Deepu1307/Hotel-Booking-App",
    demo: "https://github.com/Deepu1307/Hotel-Booking-App",
    type: "personal",
  },
  {
    id: "pers-2",
    image: IMG1,
    title: "Nexter — Luxury Real Estate Marketplace",
    description:
      "Responsive real estate portal built with modern CSS Grid and responsive architecture. Features dynamic property filtering, realtor spotlights, and luxury home listings.",
    tech: ["HTML5", "CSS Grid", "Sass", "JavaScript"],
    github: "https://github.com/Deepu1307/Nexter-Project",
    demo: "https://deepu1307.github.io/Nexter-Project/",
    type: "personal",
  },
  {
    id: "pers-3",
    image: IMG2,
    title: "Natours — Adventure Tours Booking",
    description:
      "Experiential travel landing site featuring advanced CSS animations, 3D card flips, video backgrounds, and responsive booking forms.",
    tech: ["HTML5", "SASS", "CSS3 Animations", "JavaScript"],
    github: "https://github.com/Deepu1307/Tour-and-travel-website/",
    demo: "https://deepu1307.github.io/Tour-and-travel-website/",
    type: "personal",
  },
  {
    id: "pers-4",
    image: IMG4,
    title: "Omnifood — AI-Curated Food Subscription",
    description:
      "Sleek food delivery web experience featuring responsive mobile layout, interactive meal plans, diet filtering, and customer testimonial sliders.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/Deepu1307/omnifood",
    demo: "https://deepu1307.github.io/omnifood/",
    type: "personal",
  },
  {
    id: "pers-5",
    image: IMG3,
    title: "Number Guessing Game",
    description:
      "Interactive JavaScript logic game featuring real-time DOM updates, score calculation, and persistent high scores.",
    tech: ["JavaScript", "DOM Manipulation", "CSS3"],
    github: "https://github.com/Deepu1307/Number-Guessing-Game",
    demo: "https://deepu1307.github.io/Number-Guessing-Game/",
    type: "personal",
  },
];

const ProjectCard = ({ proj, onOpenCaseStudy }) => (
  <article className="project__item">
    <div className="project__item-image">
      <img src={proj.image} alt={proj.title} />
      <div className="project__item-overlay">
        {proj.github && (
          <a href={proj.github} target="_blank" rel="noreferrer" className="project__overlay-btn project__overlay-btn--ghost">
            <BsGithub /> Code
          </a>
        )}
        {proj.demo && (
          <a href={proj.demo} target="_blank" rel="noreferrer" className="project__overlay-btn">
            <BsArrowUpRightCircle /> Live Demo
          </a>
        )}
        {proj.website && (
          <a href={proj.website} target="_blank" rel="noreferrer" className="project__overlay-btn">
            <BsGlobe /> Visit Website
          </a>
        )}
      </div>
    </div>

    <div className="project__item-body">
      <div className="project__item-header">
        <div>
          <h3>{proj.title}</h3>
          {proj.company && (
            <small style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "0.75rem" }}>
              🏢 {proj.company}
            </small>
          )}
        </div>
        <span className={`project__type-badge badge--${proj.type}`}>
          {proj.type === "professional" ? "Company" : "Personal"}
        </span>
      </div>

      <p className="project__description">{proj.description}</p>

      <div className="project__tech-tags">
        {proj.tech.map((t, i) => (
          <span key={i} className="project__tech-tag">{t}</span>
        ))}
      </div>

      <div className="project__item-cta">
        {proj.github && (
          <a href={proj.github} className="btn" target="_blank" rel="noreferrer">
            <BsGithub /> GitHub
          </a>
        )}
        {proj.demo && (
          <a href={proj.demo} className="btn btn-primary" target="_blank" rel="noreferrer">
            <BsArrowUpRightCircle /> Live Demo
          </a>
        )}
        {proj.website && (
          <a href={proj.website} className="btn btn-primary" target="_blank" rel="noreferrer">
            <BsGlobe /> Live Product
          </a>
        )}
      </div>

      {proj.caseStudy && (
        <button
          type="button"
          className="btn-case-study"
          onClick={() => onOpenCaseStudy(proj)}
        >
          <BiLayer /> View Architecture & Impact
        </button>
      )}
    </div>
  </article>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const showProfessional = activeTab === "all" || activeTab === "professional";
  const showPersonal = activeTab === "all" || activeTab === "personal";

  return (
    <section id="projects">
      <p className="section__label">Proven Track Record</p>
      <h2 className="section__title">Featured Projects</h2>
      <div className="section__divider"><span></span></div>

      <div className="container">
        {/* Filter Tabs */}
        <div className="projects__tabs">
          <button
            className={`projects__tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <MdGridView />
            All Projects
            <span className={`tab-count ${activeTab !== "all" ? "tab-count--inactive" : ""}`}>
              {professionalProjects.length + personalProjects.length}
            </span>
          </button>
          <button
            className={`projects__tab ${activeTab === "professional" ? "active" : ""}`}
            onClick={() => setActiveTab("professional")}
          >
            <MdWorkOutline />
            Professional & Enterprise ({professionalProjects.length})
            <span className={`tab-count ${activeTab !== "professional" ? "tab-count--inactive" : ""}`}>
              {professionalProjects.length}
            </span>
          </button>
          <button
            className={`projects__tab ${activeTab === "personal" ? "active" : ""}`}
            onClick={() => setActiveTab("personal")}
          >
            <MdPerson />
            Personal & Open Source ({personalProjects.length})
            <span className={`tab-count ${activeTab !== "personal" ? "tab-count--inactive" : ""}`}>
              {personalProjects.length}
            </span>
          </button>
        </div>

        {/* Professional Section */}
        {showProfessional && (
          <>
            {activeTab === "all" && (
              <div className="projects__segment-label">
                <span>🏢 Company & Enterprise Implementations (Talink & Entiovi)</span>
              </div>
            )}
            <div className="project__container">
              {professionalProjects.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  proj={proj}
                  onOpenCaseStudy={setSelectedCaseStudy}
                />
              ))}
            </div>
          </>
        )}

        {/* Personal Section */}
        {showPersonal && (
          <>
            {activeTab === "all" && (
              <div className="projects__segment-label">
                <span>🚀 Personal Builds & Open Source</span>
              </div>
            )}
            <div className="project__container">
              {personalProjects.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  proj={proj}
                  onOpenCaseStudy={setSelectedCaseStudy}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div
          className="modal__backdrop"
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            className="modal__card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal__close"
              onClick={() => setSelectedCaseStudy(null)}
              aria-label="Close"
            >
              <BsX />
            </button>

            <span className="modal__tag">Architecture Deep-Dive</span>
            <h3 className="modal__title">{selectedCaseStudy.title}</h3>

            <div className="modal__section">
              <h4>
                <BsShieldCheck style={{ color: "var(--color-primary)" }} /> The Challenge
              </h4>
              <p>{selectedCaseStudy.caseStudy.challenge}</p>
            </div>

            <div className="modal__section">
              <h4>
                <BsCpu style={{ color: "var(--color-secondary)" }} /> The Solution & Engineering
              </h4>
              <p>{selectedCaseStudy.caseStudy.solution}</p>
            </div>

            <div className="modal__section">
              <h4>
                <BiLayer style={{ color: "var(--color-primary-light)" }} /> Core Architecture
              </h4>
              <p style={{ fontFamily: "monospace", color: "var(--color-primary-light)", fontSize: "0.82rem" }}>
                {selectedCaseStudy.caseStudy.architecture}
              </p>
            </div>

            <div className="modal__metrics">
              {selectedCaseStudy.caseStudy.metrics.map((m, i) => (
                <div key={i} className="modal__metric-item">
                  <span className="modal__metric-num">{m.num}</span>
                  <span className="modal__metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>

            {selectedCaseStudy.website && (
              <a
                href={selectedCaseStudy.website}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", marginTop: "1rem" }}
              >
                <BsGlobe /> Visit Live Production Application
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

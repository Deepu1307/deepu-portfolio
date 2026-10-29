import React from "react";
import "./services.css";
import { BiCheck, BiRightArrowAlt } from "react-icons/bi";
import { MdOutlineWeb, MdOutlinePhoneAndroid, MdOutlineCloud, MdOutlineSpeed } from "react-icons/md";
import { SiGraphql, SiOpenai } from "react-icons/si";

const services = [
  {
    icon: <MdOutlineWeb />,
    title: "Web App Development",
    tagline: "Full-stack web applications built to scale",
    badge: "Most Popular",
    items: [
      "React.js & Next.js frontend development",
      "Node.js / Express.js backend APIs",
      "Database design (PostgreSQL, MongoDB)",
      "Third-party API integrations",
      "Performance optimization & SEO",
      "Deployment & CI/CD setup",
    ],
  },
  {
    icon: <MdOutlinePhoneAndroid />,
    title: "Mobile App Development",
    tagline: "Cross-platform apps for iOS & Android",
    items: [
      "React Native app development",
      "Expo-based rapid prototyping",
      "Native device feature integrations",
      "App Store & Play Store deployment",
      "Offline-first & PWA experiences",
    ],
  },
  {
    icon: <MdOutlineCloud />,
    title: "Backend & API Services",
    tagline: "Scalable, secure, production-ready backends",
    items: [
      "RESTful & GraphQL API design",
      "Microservices architecture",
      "Azure Functions & AWS Lambda",
      "Authentication & authorization (JWT, OAuth)",
      "Database optimization & caching",
    ],
  },
  {
    icon: <MdOutlineSpeed />,
    title: "Performance & Audit",
    tagline: "Make your existing app blazing fast",
    items: [
      "Web performance audits (Lighthouse)",
      "Core Web Vitals optimization",
      "Code reviews & refactoring",
      "Bundle size reduction",
      "Caching strategies & CDN setup",
    ],
  },
  {
    icon: <SiGraphql />,
    title: "Technical Consulting",
    tagline: "Expert guidance for your tech decisions",
    items: [
      "Technology stack selection",
      "Architecture design & review",
      "Code quality & best practices",
      "MVP planning & roadmap",
      "Team mentoring & code reviews",
    ],
  },
  {
    icon: <SiOpenai />,
    title: "AI Integration",
    tagline: "Integrate AI/ML into your product",
    items: [
      "OpenAI / Gemini API integration",
      "AI-powered chatbots & assistants",
      "Smart content generation features",
      "Recommendation engine setup",
      "Automation & workflow AI",
    ],
    badge: "New",
  },
];

const Services = () => {
  return (
    <section id="services">
      <p className="section__label">What I Offer</p>
      <h2 className="section__title">Services</h2>
      <div className="section__divider"><span></span></div>

      <div className="container service__container">
        {services.map((svc, i) => (
          <article key={i} className="service">
            {svc.badge && <span className="service__badge">{svc.badge}</span>}
            <div className="service__icon-wrap">{svc.icon}</div>
            <div className="service__head">
              <h3>{svc.title}</h3>
            </div>
            <p className="service__tagline">{svc.tagline}</p>
            <ul className="service__list">
              {svc.items.map((item, j) => (
                <li key={j}>
                  <BiCheck className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <a href="#contact" className="service__cta">
              Get Started <BiRightArrowAlt />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;

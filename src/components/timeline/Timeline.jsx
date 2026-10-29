import React from "react";
import "./timeline.css";
import { BiBriefcase, BiCheckCircle, BiMap } from "react-icons/bi";

const workExperience = [
  {
    role: "Software Engineer",
    company: "Talink Software India Pvt. Ltd.",
    location: "Chandigarh, India",
    period: "Jul 2024 – Present",
    current: true,
    achievements: [
      "Led the decomposition of a monolithic backend into 2 independently deployable microservices, boosting fault isolation and deployment velocity.",
      "Architected and developed TalentDec using Flutter, NestJS, PostgreSQL, and GCP, delivering a high-concurrency expert consultation ecosystem.",
      "Engineered the complete payment & wallet ledger system (credits, debits, automated expert payouts, refunds, and Stripe webhook reconciliation).",
      "Integrated Zoom APIs with webhook event processing for meeting lifecycle automation, plus OpenAI APIs for automated consultation summaries.",
      "Designed cloud-native GCP deployments utilizing Cloud Run, Cloud Scheduler, Cloud Storage, API Gateway, VPC peering, and Load Balancers.",
      "Contributed to SchoolTalk’s Microfrontend & Microservices architecture (Auth, Progress, Progressions, Shell) in React.js and Azure Front Door.",
    ],
    tech: ["Flutter", "NestJS", "React.js", "Microfrontends", "PostgreSQL", "GCP Cloud Run", "Stripe", "OpenAI", "Zoom APIs", "Docker"],
  },
  {
    role: "Software Engineer",
    company: "Entiovi Technologies Pvt. Ltd.",
    location: "Kolkata, India",
    period: "Sep 2022 – Jun 2024",
    current: false,
    achievements: [
      "Engineered full-stack applications with React.js, Next.js, Node.js, and Express.js, delivering sub-second response times across high-traffic user journeys.",
      "Built serverless event-driven microservices using AWS Lambda and Azure Functions with Sequelize ORM (PostgreSQL) and Mongoose (MongoDB).",
      "Automated CI/CD workflows using Azure DevOps and GitHub Actions, slashing release deployment effort by 40%.",
      "Delivered core modules for flagship enterprise clients: Bulkmatic (North America logistics), Alfa (AI financial crime prevention), Teach195 (UK recruitment), and ClearedTalent.",
      "Integrated Firebase Cloud Messaging (FCM) and Service Workers for real-time notifications, increasing platform engagement.",
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "AWS Lambda", "Azure Functions", "Azure DevOps", "Docker"],
  },
];

const Timeline = () => {
  return (
    <section id="timeline">
      <p className="section__label">Career Milestones</p>
      <h2 className="section__title">Work Experience</h2>
      <div className="section__divider"><span></span></div>

      <div className="container timeline__container">
        {workExperience.map((exp, index) => (
          <div key={index} className="timeline__item">
            <div className={`timeline__dot ${exp.current ? "timeline__dot--active" : ""}`}>
              <div className="timeline__dot-inner"></div>
            </div>

            <div className="timeline__card">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">{exp.role}</h3>
                  <div className="timeline__company">
                    <BiBriefcase /> {exp.company}
                  </div>
                </div>
                <span className={`timeline__period ${exp.current ? "timeline__period--current" : ""}`}>
                  {exp.period}
                </span>
              </div>

              <div className="timeline__location">
                <BiMap /> {exp.location}
              </div>

              <ul className="timeline__achievements">
                {exp.achievements.map((item, i) => (
                  <li key={i}>
                    <BiCheckCircle className="timeline__achievements-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="timeline__skills">
                {exp.tech.map((t, i) => (
                  <span key={i} className="timeline__skill-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;

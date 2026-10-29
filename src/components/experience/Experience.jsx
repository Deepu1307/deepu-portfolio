import React, { useState } from "react";
import "./experience.css";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiNodedotjs, SiPostgresql, SiMongodb, SiMysql,
  SiAmazonaws, SiMicrosoftazure, SiDocker, SiGithubactions,
  SiRedux, SiFlutter, SiDart, SiStripe, SiGooglecloud,
  SiOpenai, SiFirebase
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BiCodeAlt, BiServer, BiCloud, BiCreditCard } from "react-icons/bi";

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend & Mobile",
    icon: <BiCodeAlt />,
    color: "#6c63ff",
    skills: [
      { name: "React.js & Microfrontends", icon: <SiReact color="#61DAFB" />, level: 96 },
      { name: "Flutter (iOS & Android)", icon: <SiFlutter color="#02569B" />, level: 92 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, level: 92 },
      { name: "Dart", icon: <SiDart color="#0175C2" />, level: 88 },
      { name: "JavaScript (ES6+)", icon: <SiJavascript color="#F7DF1E" />, level: 96 },
      { name: "Redux Toolkit", icon: <SiRedux color="#764ABC" />, level: 88 },
    ]
  },
  {
    id: "backend",
    label: "Backend & Systems",
    icon: <BiServer />,
    color: "#00d4ff",
    skills: [
      { name: "NestJS (Microservices)", icon: <BiServer color="#E0234E" />, level: 94 },
      { name: "Node.js & Express.js", icon: <SiNodedotjs color="#68A063" />, level: 95 },
      { name: "PostgreSQL & Sequelize", icon: <SiPostgresql color="#336791" />, level: 92 },
      { name: "MongoDB & Mongoose", icon: <SiMongodb color="#47A248" />, level: 88 },
      { name: "REST APIs & Architecture", icon: <BiServer />, level: 96 },
      { name: "Java", icon: <FaJava color="#ED8B00" />, level: 80 },
      { name: "MySQL / Firestore", icon: <SiMysql color="#00758F" />, level: 85 },
    ]
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: <BiCloud />,
    color: "#ffd700",
    skills: [
      { name: "GCP (Cloud Run, VPC, Gateway)", icon: <SiGooglecloud color="#4285F4" />, level: 90 },
      { name: "AWS (Lambda, CloudWatch)", icon: <SiAmazonaws color="#FF9900" />, level: 86 },
      { name: "Azure (Functions, Front Door)", icon: <SiMicrosoftazure color="#0078D4" />, level: 88 },
      { name: "Docker & Containerization", icon: <SiDocker color="#2496ED" />, level: 85 },
      { name: "CI/CD & GitHub Actions", icon: <SiGithubactions color="#2088FF" />, level: 90 },
      { name: "Firebase (FCM, Remote Config)", icon: <SiFirebase color="#FFCA28" />, level: 92 },
    ]
  },
  {
    id: "fintech",
    label: "Fintech & AI",
    icon: <BiCreditCard />,
    color: "#ff6b6b",
    skills: [
      { name: "Stripe Payment Infrastructure", icon: <SiStripe color="#635BFF" />, level: 95 },
      { name: "Wallet Ledger & Settlement", icon: <BiCreditCard color="#00D4FF" />, level: 94 },
      { name: "Automated Payouts & Webhooks", icon: <BiServer color="#22C55E" />, level: 92 },
      { name: "OpenAI & Claude API Tooling", icon: <SiOpenai color="#10A37F" />, level: 90 },
      { name: "System Design & Architecture", icon: <BiCodeAlt color="#FFD700" />, level: 92 },
    ]
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("all");

  const displayCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="experience">
      <p className="section__label">Technical Core</p>
      <h2 className="section__title">Skills & Specializations</h2>
      <div className="section__divider"><span></span></div>

      <div className="container">
        {/* Tabs */}
        <div className="skills__tabs">
          <button
            className={`skills__tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >All Domains</button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skills__tab ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >{cat.label}</button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="experience__container">
          {displayCategories.map((cat) => (
            <div key={cat.id} className="skills__category">
              <div className="skills__category-header">
                <div className="skills__category-icon" style={{ background: `linear-gradient(135deg, ${cat.color}33, ${cat.color}66)`, color: cat.color }}>
                  {cat.icon}
                </div>
                <h3>{cat.label}</h3>
              </div>

              {cat.skills.map((skill, i) => (
                <div key={i} className="skill__item">
                  <div className="skill__info">
                    <span className="skill__name">
                      {skill.icon} {skill.name}
                    </span>
                    <span className="skill__level-text">{skill.level}%</span>
                  </div>
                  <div className="skill__bar">
                    <div
                      className="skill__bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

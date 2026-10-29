import React from "react";
import "./packages.css";
import { BiCheckCircle, BiRocket } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const packages = [
  {
    name: "Performance & Architecture Sprint",
    tagline: "Unblock latency, scale bottlenecks, and optimize cloud spend.",
    duration: "48 – 72 Hours",
    durationLabel: "Turnaround Time",
    featured: false,
    features: [
      "Monolith vs. Microservices bottleneck analysis",
      "Database indexing & slow query optimization (PostgreSQL/MongoDB)",
      "Core Web Vitals & frontend bundle size reduction",
      "Cloud architecture & GCP/AWS cost optimization review",
      "Detailed architectural report + ready pull requests",
    ],
    cta: "Request Architecture Audit",
    inquiryType: "Microservices & Cloud Architecture Consulting",
  },
  {
    name: "Fintech & Payment Engine",
    tagline: "End-to-end Stripe payments, automated payouts & wallet ledger.",
    duration: "1 – 2 Weeks",
    durationLabel: "Production Ready",
    featured: true,
    badge: "Most In-Demand",
    features: [
      "Stripe Connect & webhook event processing pipeline",
      "Double-entry wallet ledger for credits, debits & refunds",
      "Automated expert/vendor payout settlement workflows",
      "Dispute management, fraud alerts & reconciliation",
      "Full API documentation + automated integration tests",
      "14 days post-deployment hypercare support",
    ],
    cta: "Build Payment Infrastructure",
    inquiryType: "Payment Gateway & Stripe Integration",
  },
  {
    name: "Full-Stack MVP Sprint",
    tagline: "From zero to production-grade web or Flutter mobile app.",
    duration: "2 – 3 Weeks",
    durationLabel: "Concept to Launch",
    featured: false,
    features: [
      "Custom React / Next.js web app OR Flutter iOS & Android app",
      "NestJS / Node.js scalable REST/GraphQL API backend",
      "Authentication (SSO, OAuth, Firebase Auth) & DB schemas",
      "GCP Cloud Run / AWS Lambda cloud deployment & CI/CD",
      "Clean, modular codebase ready for venture funding",
      "30 days post-launch warranty & onboarding",
    ],
    cta: "Launch Your MVP",
    inquiryType: "Freelance Web / Mobile MVP Sprint",
  },
];

const Packages = () => {
  return (
    <section id="packages">
      <p className="section__label">Solopreneur & Freelance Sprints</p>
      <h2 className="section__title">Work With Me</h2>
      <div className="section__divider"><span></span></div>

      <div className="container packages__container">
        {packages.map((pkg, i) => (
          <article
            key={i}
            className={`package__card ${pkg.featured ? "package__card--featured" : ""}`}
          >
            {pkg.badge && <span className="package__badge">{pkg.badge}</span>}

            <div className="package__header">
              <h3 className="package__name">{pkg.name}</h3>
              <p className="package__tagline">{pkg.tagline}</p>
            </div>

            <div className="package__duration">
              <span className="package__duration-val">{pkg.duration}</span>
              <span className="package__duration-lbl">{pkg.durationLabel}</span>
            </div>

            <ul className="package__features">
              {pkg.features.map((feat, j) => (
                <li key={j}>
                  <BiCheckCircle className="package__features-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href={`#contact`}
              className={`btn ${pkg.featured ? "btn-primary" : ""} package__btn`}
            >
              <BiRocket /> {pkg.cta} <BsArrowRight />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Packages;

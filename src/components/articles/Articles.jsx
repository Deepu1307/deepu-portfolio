import React from "react";
import "./articles.css";
import { BiRightArrowAlt, BiBookOpen } from "react-icons/bi";

const articles = [
  {
    category: "Fintech & Ledgers",
    readTime: "6 min read",
    title: "Designing a Fault-Tolerant Double-Entry Wallet Ledger with Stripe & NestJS",
    summary:
      "How to eliminate balance discrepancies and race conditions in high-concurrency payment systems using PostgreSQL row locking, idempotency keys, and webhook event reconciliation.",
    tags: ["Fintech", "NestJS", "PostgreSQL", "Stripe Webhooks"],
    url: "https://www.linkedin.com/in/deepu1307/",
  },
  {
    category: "Cloud Architecture",
    readTime: "7 min read",
    title: "Decomposing a Production Monolith into GCP Cloud Run Services Without Downtime",
    summary:
      "A pragmatic engineering blueprint for isolating service boundaries, managing VPC private networks, and setting up Cloud Scheduler for background automated batch tasks.",
    tags: ["GCP Cloud Run", "Microservices", "System Design", "Docker"],
    url: "https://www.linkedin.com/in/deepu1307/",
  },
  {
    category: "Frontend Scale",
    readTime: "5 min read",
    title: "Lessons Learned Scaling Microfrontends in Enterprise EdTech Platforms",
    summary:
      "Why monolithic SPAs fail at enterprise scale and how a centralized Shell architecture combined with Azure Front Door CDN cut release risk and improved page performance.",
    tags: ["React.js", "Microfrontends", "Azure Front Door", "Performance"],
    url: "https://www.linkedin.com/in/deepu1307/",
  },
];

const Articles = () => {
  return (
    <section id="articles">
      <p className="section__label">Engineering Thoughts</p>
      <h2 className="section__title">Architecture Notes</h2>
      <div className="section__divider"><span></span></div>

      <div className="container articles__container">
        {articles.map((art, i) => (
          <article key={i} className="article__card">
            <div className="article__meta">
              <span className="article__tag">{art.category}</span>
              <span className="article__read-time">{art.readTime}</span>
            </div>

            <h3 className="article__title">{art.title}</h3>
            <p className="article__summary">{art.summary}</p>

            <div className="article__tags">
              {art.tags.map((t, j) => (
                <span key={j} className="article__pill">{t}</span>
              ))}
            </div>

            <a
              href={art.url}
              target="_blank"
              rel="noreferrer"
              className="article__link"
            >
              <BiBookOpen /> Read on LinkedIn <BiRightArrowAlt />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Articles;

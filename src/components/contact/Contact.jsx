import React, { useRef } from "react";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp, BsLinkedin, BsInstagram, BsCalendarCheck } from "react-icons/bs";
import { BiSend, BiCopy } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const formData = useRef();

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard! 📋`);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_yg2e2fg", "template_vd6vut9", formData.current, "84mEZW3YCKSdFXXs-")
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("Message sent! I'll get back to you within 24hrs ✅");
            e.target.reset();
          } else {
            toast.error("Something went wrong, please try again.");
          }
        },
        (error) => {
          toast.error("Failed to send. Please email me directly.");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <ToastContainer theme="dark" position="top-right" />
      <section id="contact">
        <p className="section__label">Start a Conversation</p>
        <h2 className="section__title">Get In Touch</h2>
        <div className="section__divider"><span></span></div>

        <div className="container contact__container">
          {/* Left: Info */}
          <div className="contact__info">
            <h3 className="contact__headline">
              Ready to scale your product?<br />
              <span>Let's talk code & architecture.</span>
            </h3>
            <p className="contact__subtext">
              Available for full-time senior engineering roles, freelance advisory,
              and MVP builds. Reach out directly, copy credentials, or book a call.
            </p>

            {/* Quick 1-Click Meeting Banner */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(108, 99, 255, 0.15), rgba(0, 212, 255, 0.1))",
                border: "1px solid var(--color-primary)",
                borderRadius: "var(--radius-md)",
                padding: "1.2rem 1.4rem",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <strong style={{ display: "block", color: "var(--color-text-primary)", fontSize: "0.95rem" }}>
                  Prefer a live conversation?
                </strong>
                <span style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                  Book a direct 15-minute intro chat on Google Meet
                </span>
              </div>
              <a
                href="mailto:deepujee2020@gmail.com?subject=Schedule%2015-Minute%20Intro%20Call&body=Hi%20Deepu,%20I%20would%20like%20to%20schedule%20a%2015-minute%20intro%20call%20to%20discuss%20a%20project."
                className="btn btn-primary"
                style={{ fontSize: "0.8rem", padding: "0.55rem 1.1rem" }}
              >
                <BsCalendarCheck /> Book 15-Min Intro Call
              </a>
            </div>

            <div className="contact__options">
              {/* Email */}
              <article className="contact__option" style={{ position: "relative" }}>
                <div className="contact__option-icon-wrap">
                  <MdOutlineMail />
                </div>
                <div className="contact__option-details" style={{ flex: 1 }}>
                  <h4>Email</h4>
                  <h5>deepujee2020@gmail.com</h5>
                  <a href="mailto:deepujee2020@gmail.com" target="_blank" rel="noreferrer">
                    Send an Email →
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy("deepujee2020@gmail.com", "Email")}
                  className="btn"
                  title="Copy Email"
                  style={{ padding: "0.4rem 0.7rem", fontSize: "0.75rem" }}
                >
                  <BiCopy /> Copy
                </button>
              </article>

              {/* Phone & WhatsApp */}
              <article className="contact__option" style={{ position: "relative" }}>
                <div className="contact__option-icon-wrap">
                  <BsWhatsapp />
                </div>
                <div className="contact__option-details" style={{ flex: 1 }}>
                  <h4>WhatsApp & Direct Line</h4>
                  <h5>+91 7322013918</h5>
                  <a href="https://wa.me/917322013918" target="_blank" rel="noreferrer">
                    Chat on WhatsApp →
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy("+917322013918", "Phone number")}
                  className="btn"
                  title="Copy Phone Number"
                  style={{ padding: "0.4rem 0.7rem", fontSize: "0.75rem" }}
                >
                  <BiCopy /> Copy
                </button>
              </article>

              {/* LinkedIn */}
              <article className="contact__option">
                <div className="contact__option-icon-wrap">
                  <BsLinkedin />
                </div>
                <div className="contact__option-details" style={{ flex: 1 }}>
                  <h4>LinkedIn Profile</h4>
                  <h5>in/deepu1307</h5>
                  <a href="https://www.linkedin.com/in/deepu1307/" target="_blank" rel="noreferrer">
                    Connect on LinkedIn →
                  </a>
                </div>
              </article>

              {/* Instagram */}
              <article className="contact__option">
                <div className="contact__option-icon-wrap">
                  <BsInstagram />
                </div>
                <div className="contact__option-details" style={{ flex: 1 }}>
                  <h4>Instagram</h4>
                  <h5>@deepuk_1307</h5>
                  <a href="https://www.instagram.com/deepuk_1307/" target="_blank" rel="noreferrer">
                    Follow on Instagram →
                  </a>
                </div>
              </article>
            </div>

            <div className="contact__availability">
              <span className="avail-dot"></span>
              <p>
                <strong>Currently available</strong> for freelance consultations &
                full-time senior opportunities.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact__form-wrap">
            <h3>Send a Message</h3>
            <p>Tell me about your project, timeline, or open role.</p>

            <form ref={formData} onSubmit={sendEmail}>
              <div className="form__group">
                <div className="form__field">
                  <label>Your Name</label>
                  <input type="text" name="name" placeholder="John Doe" required />
                </div>
                <div className="form__field">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form__field" style={{ marginBottom: "1rem" }}>
                <label>Inquiry Type</label>
                <select name="project_type">
                  <option value="">— Select an Option —</option>
                  <option>Full-Time Senior Role (Remote/Hybrid)</option>
                  <option>Freelance Web / Mobile MVP Sprint</option>
                  <option>Payment Gateway & Stripe Integration</option>
                  <option>Microservices & Cloud Architecture Consulting</option>
                  <option>General Tech Inquiry</option>
                </select>
              </div>

              <div className="form__field" style={{ marginBottom: "1rem" }}>
                <label>Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your product requirements, tech stack, and goals..."
                  required
                ></textarea>
              </div>

              <div className="form__submit">
                <button type="submit" className="btn btn-primary">
                  <BiSend /> Send Message
                </button>
                <span className="form__note">⚡ Response within 24 hours</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

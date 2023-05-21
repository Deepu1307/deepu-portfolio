import React, { useRef } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

import "./contact.css";

const Contact = () => {
  const formData = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yg2e2fg', 'template_vd6vut9', formData.current, '84mEZW3YCKSdFXXs-')
      .then((result) => {
        console.log("deepu result", result);
        if (result.status === 200) {
          toast.success("Email sent successfully.");
          e.target.reset();
        } else {
          toast.error("Email didn't send successfully, try again.");
        }
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <>
      <ToastContainer />
        <section id="contact">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
          <div className="container contact__container">
            <div className="contact__options">
              <article className="contact__option">
                <MdOutlineMail className="contact__option-icon" />
                <h4>Email</h4>
                <h5>Deepujee2020@gmail.com</h5>
                <a href="mailto:deepujee2020@gmail.com" target="_blank">Send a message</a>
              </article>
              <article className="contact__option">
                <RiMessengerLine className="contact__option-icon" />
                <h4>Messenger</h4>
                <h5>Deepu Singh</h5>
                <a href="https://m.me/deepu13" target="_blank">Send a message</a>
              </article>
            </div>
            {/* FORM */}
            <form ref={formData} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your full name" required />
              <input type="email" name="email" placeholder="Your email" required />
              <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </section>
      </>
      );
};

      export default Contact;

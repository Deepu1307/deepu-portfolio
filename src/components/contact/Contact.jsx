import React, { useRef } from "react";
import { MdOutlineMail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from 'emailjs-com';

import "./contact.css";

const Contact = () => {
const formData = useRef();


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_3mzatpk', 'template_vd6vut9', formData.current, '84mEZW3YCKSdFXXs-')
    .then((result) => {
        e.target.reset();
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};


  return <section id="contact">
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
          <a href="https://m.me/deepu1307" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className="contact__option-icon" />
          <h4>Whatsapp</h4>
          <h5>+91 7322013918</h5>
          <a href="https://api.whatsapp.com/send?phone=7322013918" target="_blank">Send a message</a>
        </article>
      </div>
      {/* FORM */}
      <form ref={formData} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your full name" required />
        <input type="email" name="email" placeholder="Your email" />
        <textarea name="message" rows="7" placeholder="Your Message"></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>;
};

export default Contact;

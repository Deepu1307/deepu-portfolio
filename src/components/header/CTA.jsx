import React from "react";
import CV from "../../assets/deepu.pdf";
import { HiArrowDown } from "react-icons/hi";
import { BsChatDots, BsCalendarCheck } from "react-icons/bs";

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn btn-primary" href="#contact">
        <BsChatDots /> Let's Work Together
      </a>
      <a
        className="btn"
        href="mailto:deepujee2020@gmail.com?subject=Schedule%2015-Minute%20Intro%20Call"
      >
        <BsCalendarCheck /> Book 15-Min Call
      </a>
      <a className="btn" href={CV} download="Deepu_Kumar_Resume.pdf">
        <HiArrowDown /> Download CV
      </a>
    </div>
  );
};

export default CTA;

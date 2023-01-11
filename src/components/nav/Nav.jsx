import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        id="tooltip"
      >
        <AiOutlineHome />
        <span className="tooltiptext">Home</span>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        id="tooltip"
      >
        <AiOutlineUser />
        <span className="tooltiptext">About</span>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        id="tooltip"
      >
        <BiBook />
        <span className="tooltiptext">Skills</span>
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
        id="tooltip"
      >
        <RiServiceLine />
        <span className="tooltiptext">Services</span>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        id="tooltip"
      >
        <BiMessageSquareDetail />
        <span className="tooltiptext">Contact</span>
      </a>
    </nav>
  );
};

export default Nav;

import React from "react";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin className="header__socials-icon" />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub className="header__socials-icon" />
      </a>
      <a href="https://facebook.com" target="_blank">
        <BsFacebook className="header__socials-icon" />
      </a>
      {/* <a href="https://instagram.com" target="_blank">
        <BsInstagram />
      </a> */}
    </div>
  );
};

export default HeaderSocials;

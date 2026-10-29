import React from "react";
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram, BsStackOverflow } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <>
      <a href="https://www.linkedin.com/in/deepu1307/" target="_blank" title="LinkedIn" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Deepu1307" target="_blank" title="GitHub" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/deepuk_1307/" target="_blank" title="Instagram @deepuk_1307" rel="noreferrer">
        <BsInstagram />
      </a>
      <a href="https://twitter.com/DeepuDeveloper" target="_blank" title="Twitter / X" rel="noreferrer">
        <BsTwitter />
      </a>
      <a href="https://stackoverflow.com/users/14964835/deepu-kumar" target="_blank" title="Stack Overflow" rel="noreferrer">
        <BsStackOverflow />
      </a>
    </>
  );
};

export default HeaderSocials;

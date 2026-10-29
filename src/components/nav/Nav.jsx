import React, { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");

  // Auto-detect active section on scroll
  useEffect(() => {
    const sections = ["header", "about", "timeline", "experience", "services", "packages", "projects", "articles", "testimonials", "contact"];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          // Map sub-sections to their parent nav link
          let targetNav = `#${id}`;
          if (id === "timeline") targetNav = "#about";
          if (id === "packages") targetNav = "#services";
          if (id === "articles") targetNav = "#projects";
          setActiveNav(targetNav);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#header", icon: <AiOutlineHome />, label: "Home" },
    { href: "#about", icon: <AiOutlineUser />, label: "About" },
    { href: "#experience", icon: <BiBook />, label: "Skills" },
    { href: "#services", icon: <RiServiceLine />, label: "Services" },
    { href: "#projects", icon: <MdWorkOutline />, label: "Projects" },
    { href: "#contact", icon: <BiMessageSquareDetail />, label: "Contact" },
  ];

  return (
    <nav>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setActiveNav(link.href)}
          className={activeNav === link.href ? "active" : ""}
          aria-label={link.label}
        >
          {link.icon}
          <span className="nav-tooltip">{link.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Nav;

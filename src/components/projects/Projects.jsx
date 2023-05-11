import React from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Nexter (Real Estate)",
    github: "",
    demo: ""
  },
  {
    id: 2,
    image: IMG2,
    title: "Nexter (Tours & Travels)",
    github: "",
    demo: ""
  },
  {
    id: 3,
    image: IMG3,
    title: "Guess Number (Small Game)",
    github: "",
    demo: ""
  },
  {
    id: 4,
    image: IMG4,
    title: "Food Delivery Website",
    github: "",
    demo: ""
  },
  {
    id: 5,
    image: IMG5,
    title: "Booking.com (Clone)",
    github: "",
    demo: ""
  },
  {
    id: 6,
    image: IMG6,
    title: "Tours Booking App",
    github: "",
    demo: ""
  },
];

const Projects = () => {
  return <section id="projects">
    <h5>My Recent Work</h5>
    <h2>Projects</h2>
    <div className="container project__container">
      {
        data.map((proj, index) => {
          return (
            <article className="project__items" key={index}>
              <div className="project__item-image">
                <img src={proj.image} alt="" />
              </div>
              <h3>{proj.title}</h3>
              <div className="project__item-cta">
                <a href={proj.github} className="btn">Github</a>
                <a href={proj.demo} 
                className ="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          )
        })
      }


    </div>
  </section>;
};

export default Projects;

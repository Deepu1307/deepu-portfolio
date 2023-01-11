import React from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project1",
    github: "",
    demo: ""
  },
  {
    id: 2,
    image: IMG2,
    title: "Project1",
    github: "",
    demo: ""
  },
  {
    id: 3,
    image: IMG3,
    title: "Project1",
    github: "",
    demo: ""
  },
  {
    id: 4,
    image: IMG4,
    title: "Project1",
    github: "",
    demo: ""
  },
  {
    id: 5,
    image: IMG5,
    title: "Project1",
    github: "",
    demo: ""
  },
  {
    id: 6,
    image: IMG6,
    title: "Project1",
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
        data.map((proj) => {
          return (
            <article className="project__items">
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

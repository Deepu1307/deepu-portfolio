import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Experience from "./components/experience/Experience.jsx";
import Services from "./components/services/Services.jsx";
import Projects from "./components/projects/Projects.jsx";
import Testimonials from "./components/testimonials/Testimonial.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import { TbArrowUp } from "react-icons/tb";
import { TbArrowDown } from "react-icons/tb";

function App() {

  const [arrDirection, setArrDirection] = useState(true);

  const directionHandler = () => {   
    if (arrDirection) {
      setArrDirection(false)
    } else {
      setArrDirection(true)
    }
    
    if (arrDirection) {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    } else {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
  

  return (
    <>
      <div onClick={directionHandler} className="goUp">
      {arrDirection ? < TbArrowUp className="goUpIcon" /> : <TbArrowDown className="goUpIcon" />}
      </div>

      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

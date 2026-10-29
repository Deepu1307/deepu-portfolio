import { useEffect, useState } from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Timeline from "./components/timeline/Timeline.jsx";
import Experience from "./components/experience/Experience.jsx";
import Services from "./components/services/Services.jsx";
import Packages from "./components/packages/Packages.jsx";
import Projects from "./components/projects/Projects.jsx";
import Articles from "./components/articles/Articles.jsx";
import Testimonials from "./components/testimonials/Testimonial.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import { TbArrowUp, TbArrowDown } from "react-icons/tb";

function App() {
  const [arrDirection, setArrDirection] = useState(true);

  const directionHandler = () => {
    setArrDirection(!arrDirection);
  };

  useEffect(() => {
    if (arrDirection) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: "smooth" });
    }
  }, [arrDirection]);

  return (
    <>
      <div onClick={directionHandler} className="goUp" title={arrDirection ? "Scroll to Bottom" : "Scroll to Top"}>
        {arrDirection ? <TbArrowDown className="goUpIcon" /> : <TbArrowUp className="goUpIcon" />}
      </div>
      <Header />
      <Nav />
      <About />
      <Timeline />
      <Experience />
      <Services />
      <Packages />
      <Projects />
      <Articles />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

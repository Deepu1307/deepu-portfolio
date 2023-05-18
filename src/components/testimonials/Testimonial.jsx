import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/sudesh.jpeg"
import AVTR2 from "../../assets/amar.jpeg"
import AVTR3 from "../../assets/sonu.jpeg"
// import AVTR4 from "../../assets/avatar4.jpg"


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    avatar: AVTR1,
    name: "Sudesh Saksham",
    review: "Congratulations on teaching yourself programming! That's an impressive feat and shows that you have a lot of dedication and determination.Remember, being a self-taught programmer means that you have the potential to be a great programmer. Keep learning, building, collaborating, and practicing good coding practices, and you'll be well on your way to a successful career in programming.",
    link: "https://www.linkedin.com/in/sudesh-kumar/"
  },
  {
    avatar: AVTR2,
    name: "Amar Kumar Singh",
    review: "I highly recommend Deepu as a self-taught programmer. They have shown a tremendous dedication to learning and have a strong work ethic. Despite not having a formal education in programming, Deepu has proven to be a quick learner and has been able to take on challenging projects with ease. Their passion for coding is evident in their work and their ability to solve complex problems is impressive.",
    link: "https://www.linkedin.com/in/developeramarkumar/"
  },
  {
    avatar: AVTR3,
    name: "Sonu Kumar",
    review: "It is my pleasure to recommend Deepu as a self-taught programmer. Their self-motivation, determination, and eagerness to learn have been invaluable to our team. [Name] is not afraid to ask questions and seek feedback to improve their skills, and has become a valuable asset to our company. Their ability to work independently and take on new challenges is a testament to their dedication and drive to succeed.",
    link: "https://www.linkedin.com/in/collsonu/"
  },
  // {
  //   avatar: AVTR4,
  //   name: "Sayak Brahmachari",
  //   review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora natus perferendis sed nam reiciendis nulla, ipsam dolorum a beatae non, quidem totam adipisci illo ullam expedita eveniet repellendus optio ipsa.",
  //   link: ""
  // }
]

const Testimonial = () => {
  return <section id="testimonials">
    <h5>Recommendations recieved</h5>
    <h2>Recommendations</h2>
    <Swiper className="container testimonilas__container mySwiper"    
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ dynamicBullets: true, clickable: true }}      
    >
      {
        data.map((test, index) => {
          return (
            <SwiperSlide className="testimonials" key={index}>
              <div className="client__avatar">
                <img src={test.avatar} alt={test.name} />
              </div>
              <a className="client__name" href={test.link} target="_blank">{test.name}</a>
              <small style={{color: "#e6e6e6"}}>{test.review}</small>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  </section>;
};

export default Testimonial;

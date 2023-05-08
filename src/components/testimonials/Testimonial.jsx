import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"


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
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora natus perferendis sed nam reiciendis nulla, ipsam dolorum a beatae non, quidem totam adipisci illo ullam expedita eveniet repellendus optio ipsa.",
  },
  {
    avatar: AVTR2,
    name: "Sudesh Saksham",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora natus perferendis sed nam reiciendis nulla, ipsam dolorum a beatae non, quidem totam adipisci illo ullam expedita eveniet repellendus optio ipsa.",
  },
  {
    avatar: AVTR3,
    name: "Sudesh Saksham",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora natus perferendis sed nam reiciendis nulla, ipsam dolorum a beatae non, quidem totam adipisci illo ullam expedita eveniet repellendus optio ipsa.",
  },
  {
    avatar: AVTR4,
    name: "Sudesh Saksham",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora natus perferendis sed nam reiciendis nulla, ipsam dolorum a beatae non, quidem totam adipisci illo ullam expedita eveniet repellendus optio ipsa.",
  }
]

const Testimonial = () => {
  return <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
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
              <h5 className="client__name">{test.name}</h5>
              <small>{test.review}</small>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  </section>;
};

export default Testimonial;

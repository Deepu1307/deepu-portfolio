import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/sudesh.jpeg";
import AVTR2 from "../../assets/amar.jpeg";
import AVTR3 from "../../assets/sonu.jpeg";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsStarFill, BsLinkedin } from "react-icons/bs";

const data = [
  {
    avatar: AVTR1,
    name: "Sudesh Saksham",
    role: "Software Engineer",
    review:
      "Congratulations on teaching yourself programming! That's an impressive feat showing dedication and determination. Deepu has the potential to be a great programmer — keep learning, building, collaborating, and practicing good coding practices. You'll have a successful career in programming.",
    link: "https://www.linkedin.com/in/sudesh-kumar/",
    stars: 5,
  },
  {
    avatar: AVTR2,
    name: "Amar Kumar Singh",
    role: "Senior Developer",
    review:
      "I highly recommend Deepu as a developer. They have shown tremendous dedication to learning with a strong work ethic. Despite being self-taught, Deepu is a quick learner who takes on challenging projects with ease. Their passion for coding is evident, and their ability to solve complex problems is impressive.",
    link: "https://www.linkedin.com/in/developeramarkumar/",
    stars: 5,
  },
  {
    avatar: AVTR3,
    name: "Sonu Kumar",
    role: "Team Lead",
    review:
      "It is my pleasure to recommend Deepu. Their self-motivation, determination, and eagerness to learn have been invaluable to our team. Deepu is not afraid to ask questions and seek feedback to improve their skills. Their ability to work independently and take on new challenges is a testament to their dedication.",
    link: "https://www.linkedin.com/in/collsonu/",
    stars: 5,
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <p className="section__label">What People Say</p>
      <h2 className="section__title">Recommendations</h2>
      <div className="section__divider"><span></span></div>

      <Swiper
        className="container testimonilas__container mySwiper"
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ dynamicBullets: true, clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {data.map((test, index) => (
          <SwiperSlide className="testimonials" key={index}>
            <div className="client__stars">
              {Array(test.stars).fill(0).map((_, i) => (
                <BsStarFill key={i} />
              ))}
            </div>
            <p className="testimonial__text">{test.review}</p>
            <div className="testimonial__author">
              <div className="client__avatar">
                <img src={test.avatar} alt={test.name} />
              </div>
              <div className="client__info">
                <a
                  className="client__name"
                  href={test.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {test.name} <BsLinkedin style={{ fontSize: "0.8rem", color: "#0A66C2" }} />
                </a>
                <span className="client__role">{test.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;

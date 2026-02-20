import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import TestimonyCard from "../TestimonyCard/TestimonyCard";

function SwiperTestimonials({ testimonials }) {
  return (
    <Swiper
      style={{ paddingBottom: "50px" }}
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop
      spaceBetween={20}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {testimonials.map((card, index) => (
        <SwiperSlide key={index}>
          <TestimonyCard
            imgSrc={card.imgSrc}
            name={card.name}
            category={card.category}
            testimony={card.testimony}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperTestimonials;

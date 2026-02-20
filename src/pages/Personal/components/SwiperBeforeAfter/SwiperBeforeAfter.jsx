import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { personalCases } from "../../../../data/personalGallery";
import "./SwiperBeforeAfter.css";

import "swiper/css";
import "swiper/css/pagination";

function SwiperBeforeAfter() {
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
      {personalCases.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="destaque-card">
            <div className="destaque-image">
              <img src={card.src} alt={card.alt} />
              <span className="destaque-tag">Antes → Depois</span>
            </div>
            <div className="destaque-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <span className="destaque-badge">{card.emphasis}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperBeforeAfter;

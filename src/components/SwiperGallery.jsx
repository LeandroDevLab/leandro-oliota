import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function SwiperGallery({ images }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop={true}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img.src} alt={img.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperGallery;

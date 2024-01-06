import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import artwork1 from '../assets/artwork1.jpg'; 
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";

import './BannerCard.css';

const BannerCard = () => {
  return (
    <div className='banner'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={artwork1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/0y91yFG/IMG-20231227-WA0013.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/7KpY1BZ/IMG-20231227-WA0018.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/K0bLbcB/IMG-20231227-WA0015.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/c8bMn45/IMG-20231227-WA0014.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>

  )
}

export default BannerCard
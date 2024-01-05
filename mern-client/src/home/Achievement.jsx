import React from 'react'
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Achievement.css';
import "swiper/css/navigation";
import {  Autoplay, Pagination } from "swiper/modules";
const Achievement = () => {

  return (
    <div className='achievement my-12 px-4 lg:px-24'>
      <h2 className='font-bold text-5xl text-center mb-10 leading-snug'>Our Achievement</h2>
       <p className="text-lg text-center mb-10 leading-snug ">
        Explore the wonderful milestones and artistic achievements that define the unique story of Strinja.
     </p>

     <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/NnJpH8v/Achievement-1.jpg" alt="pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/yg8WwZ0/Achievement-2.jpg" alt="pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/SBPYfg5/Achievement-3.jpg" alt="pic" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
  
}

export default Achievement
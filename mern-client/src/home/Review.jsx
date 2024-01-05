import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {FaStar} from "react-icons/fa6"
import { Avatar } from 'flowbite-react';
import Propic from "../assets/propic.jpg"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='font-bold text-5xl text-center mb-10 leading-snug'>Customers Stories</h2>
        <div>
        <Swiper
        centeredSlides={true}
        // slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className=" bg-white shadow-2xl px-4 py-8 md:m-5 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className="mt-7">
                    <p className="mb-5">I found this painting on the 1st-art website and realized this is the street I grew up on!!! I ordered a reproduction and I am very surprised how identical it looks to the original. Good job!</p>
                    <Avatar img= {Propic} rounded className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Prerna</h5>
                    <p className="text-base">Surat</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=" bg-white shadow-2xl px-4 py-8 md:m-5 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className="mt-7">
                    <p className="mb-5">The nail art is amazing!!! Good job! It proudly hangs on my wall. Thank you for your care and quick responses during the process.</p>
                    <Avatar img= {Propic} rounded className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Alex</h5>
                    <p className="text-base">Mumbai</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=" bg-white shadow-2xl px-4 py-8 md:m-5 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className="mt-7">
                    <p className="mb-5">We love Monet's lilies and have already ordered 5 reproductions from 1st-art, all the paintings are of great quality and almost identical to the original artwork</p>
                    <Avatar img= {Propic} rounded className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">khushboo</h5>
                    <p className="text-base">Banglore</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=" bg-white shadow-2xl px-4 py-8 md:m-5 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className="mt-7">
                    <p className="mb-5">We ordered a painting for our boss, it was a birthday gift from our department, now it hangs on the wall in his office. We are all amazed how beautiful it is, fantastic details, perfect gift idea! We are glad that we ordered from you</p>
                    <Avatar img= {Propic} rounded className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Rohan</h5>
                    <p className="text-base">Ahemdabad</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=" bg-white shadow-2xl px-4 py-8 md:m-5 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className="mt-7">
                    <p className="mb-5">My string art  just arrived. It is so beautiful that I cannot stop looking at it. I'm so glad I ordered from you! Thanks to the entire team that worked on this, and especially to the artist!</p>
                    <Avatar img= {Propic} rounded className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Yash</h5>
                    <p className="text-base">Surat</p>
                </div>
            </div>
        </SwiperSlide>


        
      </Swiper>
    
        </div>
    </div>
  )
}

export default Review
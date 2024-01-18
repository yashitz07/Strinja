import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import './Artcard.css';
import { AiOutlineWhatsApp } from "react-icons/ai";

const ArtCard = ({headline, arts}) => {
  // in this function ph no and art pass hoga as parameter
  const whatsapp = async (phoneNumber, art) => {
    try {
      const internationalPhoneNumber = `+91${phoneNumber}`;
      const message = encodeURIComponent(`Hello, I'm interested in your art: ${art.artName}. We would be interested in knowing further information`);
      const whatsappLink = `https://wa.me/${internationalPhoneNumber}?text=${message}`;
      window.open(whatsappLink, '_blank');
    } catch (error) {
      console.error('Error generating WhatsApp link:', error);
    }
  };

  return (
    <div className='px-4 my-16 lg:px-24'>
        <h2 className='text-center text-5xl font-bold text-black my-5'>{headline}</h2>
        <div className='mt-12'>
        <Swiper
        
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        
        {
            arts.map(art => <SwiperSlide key={art._id}>
                <a href={`/art/${art._id}`}>
                    <div className='relative'>
                        <img src={art.imgUrl} alt="" />
                        <div className='absolute top-3 right-3 bg-green-500 hover:bg-black p-2 rounded' onClick={() => whatsapp('9104483829', art)}>
                           <AiOutlineWhatsApp className='w-4 h-4 text-white'/>
                        </div>
                    </div>
                    <div>
                        <h3>{art.artName}</h3>
                    </div>
                </a>

            </SwiperSlide>)
        }
        </Swiper>
        </div>
    </div>
  )
}

export default ArtCard
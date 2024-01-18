import React, { useEffect, useState } from 'react'
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Card } from 'flowbite-react';
const Shop = () => {
  const [arts, setArts] = useState([]);
  useEffect( ()=>{
    fetch(`${import.meta.env.VITE_SERVER_URL}/all-arts`).then(res => res.json()).then(data => setArts(data));
  },[])

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
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='font-bold text-5xl text-center'>Our Art Gallery</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          arts.map( art=> <Card
            className="max-w-sm transition-transform transform hover:scale-110 bg-violet-100"
            imgSrc={art.imgUrl}  
            
          >
            
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                {art.artName}
                
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {art.artDescription}
            </p>
            <button>
            <div className='flex items-center justify-center bg-blue-600 hover:bg-black p-2 rounded' onClick={() => whatsapp('9104483829', art)}>
                <AiOutlineWhatsApp className='  text-white '/>
            </div>
            </button>
            
            
          </Card>)
        }
      </div>

    </div>
  )
}

export default Shop
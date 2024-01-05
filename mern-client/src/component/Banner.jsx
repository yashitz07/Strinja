import React from 'react'
import BannerCard from '../home/BannerCard'
import './Banner.css';

const Banner = () => {
  return (
  <div>
    <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    <div className='px-4 lg:px-24 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg
        flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-32'>
        {/*left side */}
        <div className=' md:w-1/2 space-y-8 h-full'>
          <h2 className='text-6xl font-bold leading-snug text-black'>Nail it Right,
            <h2> String it Tight </h2><span className='text-white'>Your Canvas Your Expression with <span className='text-navy-blue'>Strinja</span> </span></h2>
          <a href="/shop" className='mt-12 block'>
            <button class="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white py-3 px-6 rounded-full shadow-md transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 transition duration-300" >
              Explore Now
            </button></a>


        </div>
        {/*right side */}
        <div className='md:w-1/2 space-y-8 h-full'>
          <BannerCard></BannerCard>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Banner
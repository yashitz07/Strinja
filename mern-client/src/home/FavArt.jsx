import React from 'react';
import FavArtImg from "../assets/stringart.jpg"


const FavArt = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
        
            <img src={FavArtImg} alt="" className='rounded md:w-10/12'/>
        </div>
        <div className='md:w-1/2 space-y-6'>
        <h1 className='font-bold text-5xl my-5 md:w-3/4 leading-snug text-black'>Find Your Favorite <span className='text-purple-700'>Art Here!</span></h1>

        <p className='mb-10 text-lg md:w-5/6'>
      Welcome to our exquisite world of nail and string art, where creativity knows no bounds. 
      Immerse yourself in a collection of unique and personalized masterpieces crafted with passion and precision.
    </p>

    {/* Add bullet-point list */}
    <ul className='mb-10 text-lg md:w-5/6 list-disc list-inside'>
      <li>Get personalized and customized String Art in all sizes.</li>
      <li>Express delivery in 3 days.</li>
    </ul>
            {/*Stats */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='font-bold text-3xl'>800+</h3>
                    <p className='text-base'>Arts</p>
                </div>
                <div>
                    <h3 className='font-bold text-3xl'>300+</h3>
                    <p className='text-base'>Customer</p>
                </div>
                <div>
                    <h3 className='font-bold text-3xl'>50+</h3>
                    <p className='text-base'>Artists</p>
                </div>

            </div>
            <a href="/shop" className='mt-12 block'><button className='bg-purple-700 text-white
            font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></a>
       </div>
    </div>
  )
}

export default FavArt
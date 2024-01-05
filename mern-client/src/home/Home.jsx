import React from 'react'
import Banner from '../component/Banner'
import FavoriteArts from './FavoriteArts'
import FavArt from './FavArt'
import Review from './Review'
import About from '../component/About'
import ContactUs from '../component/ContactUs'
import Achievement from './Achievement'

const Home = () => {
  return (
    <div>
        <Banner/>
        <FavoriteArts/>
        <FavArt/>
        <Achievement/>
        <Review/>
        <About/>
        <ContactUs/>
        
    </div>
  )
}

export default Home
// this is our best seller section
import React, { useEffect, useState} from 'react'
import ArtCard from '../component/ArtCard';

const FavoriteArts = () => {
    const [arts, setArts] = useState([]);
    useEffect( () => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/all-arts`).then(res => res.json()).then(data => setArts(data.slice(0,7)))
    }, [])
  return (
    <div>
        <ArtCard arts={arts} headline="Our Best Seller"/>
    </div>
  )
}

export default FavoriteArts
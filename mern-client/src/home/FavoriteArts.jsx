import React, { useEffect, useState} from 'react'
import ArtCard from '../component/ArtCard';

const FavoriteArts = () => {
    const [arts, setArts] = useState([]);
    useEffect( () => {
        fetch("http://localhost:5000/all-arts").then(res => res.json()).then(data => setArts(data.slice(0,7)))
    }, [])
  return (
    <div>
        {/* <ArtCard/> */}
        <ArtCard arts={arts} headline="Our Best Seller"/>
    </div>
  )
}

export default FavoriteArts
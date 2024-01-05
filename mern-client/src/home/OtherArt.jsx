import React, { useEffect, useState} from 'react'
import ArtCard from '../component/ArtCard';

const OtherArt = () => {
 
    const [arts, setArts] = useState([]);
    useEffect( () => {
        fetch("http://localhost:5000/all-arts").then(res => res.json()).then(data => setArts(data.slice(0,8)))
    }, [])
    return (
    <div>
        {/* <ArtCard/> */}
        <ArtCard arts={arts} headline="Other Art"/>
    </div>
  )
}

export default OtherArt
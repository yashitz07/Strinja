import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleArt = () => {
    const {_id, artName, imgUrl } = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <img src={imgUrl} alt="" className='h-96'/>
        <h2>
            {artName}
        </h2>
    </div>
  )
}

export default SingleArt
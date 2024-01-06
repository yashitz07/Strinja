import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, TextInput, Textarea} from 'flowbite-react';

const EditArt = () => {
  const {id} = useParams();
  const {artName, imgUrl, artDescription}=useLoaderData();
  const handleUpdate = (event) =>{
    event.preventDefault();
    const form = event.target;
    const artName = form.artName.value;
    const imgUrl = form.imgUrl.value;
    const artDescription = form.artDescription.value;
    const updateartObj = {
      artName, imgUrl, artDescription
    }
    // console.log(artObj);
    // update data
    fetch(`${import.meta.env.VITE_SERVER_URL}/art/${id}`,{
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateartObj)
    }).then(res => res.json()).then(data =>{
      
      alert("Data updated successfully!!!")
    })
   
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update Art Data</h2>
      <form onSubmit={handleUpdate} className="flex  flex-col gap-4 lg:w-[1180px] flex-wrap">
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="artName" value="Art Name" />
        </div>
        <TextInput id="artName" type="text" placeholder="Art Name" defaultValue={artName} required />
      </div>
      </div>
      {/* 2nd row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imgUrl" value="Art Image Url" />
        </div>
        <TextInput id="imgUrl" type="text" placeholder="Art Image Url" defaultValue={imgUrl} required />
      </div>
      </div>
      {/* Art-Discription */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="artDescription" value="Art Description" />
        </div>
        <Textarea id="artDescription" placeholder="Art Description..." required rows={4} defaultValue={artDescription} className='w-full'/>
      </div>
      <Button type="submit" className='mt-5'>Update</Button>
    </form>
    </div>
  )
}

export default EditArt
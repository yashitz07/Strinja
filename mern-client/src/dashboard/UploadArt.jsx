import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

import { Textarea } from 'flowbite-react';
const UploadArt = () => {
  const handleArtSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const artName = form.artName.value;
    const imgUrl = form.imgUrl.value;
    const artDescription = form.artDescription.value;
    const artObj = {
      artName, imgUrl, artDescription
    }
    console.log(artObj);
    // send data to db
    fetch(`${import.meta.env.VITE_SERVER_URL}/upload-art`,{
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(artObj)
    }).then(res => res.json()).then(data =>{
      //console.log(data)
      alert("Art Data uploaded successfully!!!")
      form.reset();
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Art</h2>
      <form onSubmit={handleArtSubmit} className="flex  flex-col gap-4 lg:w-[1180px] flex-wrap">
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="artName" value="Art Name" />
        </div>
        <TextInput id="artName" type="text" placeholder="Art Name" required />
      </div>
      </div>
      {/* 2nd row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imgUrl" value="Art Image Url" />
        </div>
        <TextInput id="imgUrl" type="text" placeholder="Art Image Url" required />
      </div>
      </div>
      {/* Art-Discription */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="artDescription" value="Art Description" />
        </div>
        <Textarea id="artDescription" placeholder="Art Description..." required rows={4} className='w-full'/>
      </div>
      <Button type="submit" className='mt-5'>Upload</Button>
    </form>
    </div>
  )
}

export default UploadArt
import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
const ManageArt = () => {
  const [allArts, setAllArts] = useState([]);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_SERVER_URL}/all-arts`).then(res => res.json()).then(data  => setAllArts(data));
  },[])
  // delete data
  const handleDelete=(id)=>{
    console.log(id);
    fetch(`${import.meta.env.VITE_SERVER_URL}/art/${id}`,{
      method: "DELETE",
  }).then(res => res.json()).then(data=>
    {alert("Art is deleted successfully!!!")
  })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Art</h2>
      {/* table for art */}
      <Table striped className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Art Name</Table.HeadCell>
          <Table.HeadCell>
            <span >Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {/* map func */}
        {
          allArts.map((art, index) => <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index+1}
            </Table.Cell>
            <Table.Cell>
              {art.artName}
            </Table.Cell>
          
            <Table.Cell>
              <a href={`/admin/dashboard/edit-art/${art._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                Edit
              </a>
              <button onClick={()=>handleDelete(art._id)} className='bg-red-600 py-1 px-4 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
        <Table.Body className="divide-y">
        </Table.Body>
      </Table>
    </div>
  )
}

export default ManageArt
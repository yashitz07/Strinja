
import React from 'react'


const WhyStrinja = () => {
  const handleUserSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const userData = {
      name, email, message
    }
    console.log(userData);
    // send data to db
    fetch("http://localhost:5000/join-us",{
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData)
    }).then(res => res.json()).then(data =>{
      //console.log(data)
      alert("Thank You!!!")
      form.reset();
    })
  }
  return (
    
     
    
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
  <div className="lg:w-1/2 p-8  rounded-lg shadow-md ">
      <h2 className="text-6xl font-bold mb-4">Why Choose Strinja?</h2>
      <ul className="list-disc pl-6">
        <li className="mb-2 text-2xl">🎨 Personalized Excellence
</li>
        <li className="mb-2 text-2xl">🧵 Memorable Gifts</li>
        <li className="mb-2 text-2xl">🌟 Deepen Connections</li>
        <li className="mb-2 text-2xl">💅 Celebrate All Relationships</li>
        <li className="mb-2 text-2xl">🌈 Community of Creatives</li>
        <li className="mb-2 text-2xl">🎉 Versatile Art for Any Space</li>
       
      </ul>
    </div>

    <div className="lg:w-1/2 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleUserSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  </div>


  )
}

export default WhyStrinja
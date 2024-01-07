
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
    fetch(`${import.meta.env.VITE_SERVER_URL}/join-us`,{
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
    
     
    
  <div class="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
  <div class="lg:flex p-8 lg:p-20 justify-center items-center">
    <div class="lg:w-1/2 p-8 rounded-lg shadow-md mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white lg:mr-4">
      <h2 class="text-3xl lg:text-6xl font-bold mb-4">Why Choose Strinja?</h2>
      <ul class="list-disc pl-6">
        <li class="mb-2 text-lg lg:text-2xl">🎨 Personalized Excellence</li>
        <li class="mb-2 text-lg lg:text-2xl">🧵 Memorable Gifts</li>
        <li class="mb-2 text-lg lg:text-2xl">🌟 Deepen Connections</li>
        <li class="mb-2 text-lg lg:text-2xl">💅 Celebrate All Relationships</li>
        <li class="mb-2 text-lg lg:text-2xl">🌈 Community of Creatives</li>
        <li class="mb-2 text-lg lg:text-2xl">🎉 Versatile Art for Any Space</li>
      </ul>
    </div>

    <div class="lg:w-1/2 p-8 rounded-lg shadow-md bg-white">
      <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleUserSubmit}>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            placeholder="Your Name"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            placeholder="Your Email"
          />
        </div>

        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-600">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            class="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>



  )
}

export default WhyStrinja
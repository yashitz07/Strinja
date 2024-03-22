import React from 'react'

const ContactUs = () => {
  return (
    <section class="">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 class="text-5xl font-extrabold text-gray-900">Visit Our Location</h2>
            {/* <p class="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
        </div>
        <div class="mt-16 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="rounded-lg overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.811792744468!2d72.7857280091278!3d21.159886980441197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d620f8a7dff%3A0x27281aed487eaeb9!2sBhabha%20Bhavan!5e0!3m2!1sen!2sin!4v1704197026058!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div class="px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Our Address</h3>
                            <p class="mt-1 text-gray-600">Opp Prime Market, Vesu, Surat, Gujarat, 39500</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                            <p class="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                            <p class="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                            <p class="mt-1 text-gray-600">Sunday: Closed</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                            <p class="mt-1 text-gray-600">Email: strinja@shop.com</p>
                            <p class="mt-1 text-gray-600">Phone: +91 7879765601</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContactUs
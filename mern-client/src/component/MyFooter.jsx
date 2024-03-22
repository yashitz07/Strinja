
import { Footer } from 'flowbite-react';
import {  BsFacebook, BsInstagram, BsThreads, BsTwitter } from 'react-icons/bs';
import Propic from "../assets/logo-2.png"

const MyFooter = () => {
  return (
    <Footer container className='bg-purple-300'>
      <div className="w-full px-4 lg:px-24 ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src={Propic}
              alt="Flowbite Logo"
              name="Stringa" 
              // className="text-red-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" className='text-black' />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="hover:text-blue-500">Stringa</Footer.Link>
                <Footer.Link href="/about" className="hover:text-blue-500">Founders</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className='text-black'/>
              <Footer.LinkGroup col>
                <Footer.Link href=" https://www.instagram.com/strinja.shop?igsh=M21yNTd5eWdyaHY=" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Instagram</Footer.Link>
                <Footer.Link href="#" className="hover:text-blue-500">Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className='text-black' />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="hover:text-blue-500">Privacy Policy</Footer.Link>
                <Footer.Link href="#" className="hover:text-blue-500">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Stringa™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="hover:text-blue-500"/>
            <Footer.Icon href="https://www.instagram.com/strinja.shop?igsh=M21yNTd5eWdyaHY=" target="_blank" rel="noopener noreferrer" icon={BsInstagram} className="hover:text-blue-500" />
            <Footer.Icon href="#" icon={BsTwitter} className="hover:text-blue-500" />
            <Footer.Icon href="#" icon={BsThreads} className="hover:text-blue-500" />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter
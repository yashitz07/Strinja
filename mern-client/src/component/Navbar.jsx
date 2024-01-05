import { key } from 'localforage';
import React, { useContext, useEffect, useState } from 'react'
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';
import Propic from "../assets/logo-2.png"
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const {user} = useContext(AuthContext);
    // console.log(user);
    //toggle menu
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    } 
    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY>100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.addEventListener("scroll",handleScroll);
        }
    },[])
    //navitems here
    const navItems = [
       { link: "Home", path:"/" },
       { link: "About", path:"/about" },
       { link: "Gallery", path:"/shop" },
       { link: "Admin", path:"/admin/dashboard" },
       { link: "Contact", path:"/contact-us" },

    ]




  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky? "sticky top-0 left-0 right-0 bg-purple-300":""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                {/*logo*/}
                <a href="/" className='text-2x1 font-bold text-black-100 flex items-center gap-2'>
                 <img src={Propic} alt="" className='strinja w-1/2 h-10' data-shadow='dang!'/>STRINGA</a>

                {/*nav intem for large divices*/ }
                <ul className='md:flex space-x-12 hidden'>{navItems.map(({ link, path }) => (
                    <a key={path} href={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</a>))}
                </ul>
            
                {/* btn for lg devices */}
                <div className='space-x-12 hidden lg:flex items-center'>
                {/* <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button> */}
                {
                    user? user.email:""
                }
                </div>
                {/*menu btn for the mobile devices*/}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                        isMenuOpen? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>
                        }
                    </button>
                </div>
            </div>
            {/*nav items for sm devices  */}
            <div className={`space-y-4 px-4 mt-12 py-7 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white ${isMenuOpen?"block fixed top-0 right-0 left-0":"hidden"}`}>
                {   navItems.map(({ link, path }) => (
                    <a key={path} href={path} className='block text-base text-black hover:text-white uppercase cursor-pointer'>{link}</a>))
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar
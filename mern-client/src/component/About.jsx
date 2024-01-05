import React, { useEffect, useState } from 'react'
// import {strinjaVid} from "../assets/strinjaVideo.mp4"
import videoFile from '../assets/strinjaVideo.mp4';
import { Helmet } from 'react-helmet';


const About = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);

        // Replace 'YOUR_VIDEO_LINK' with the actual link to your video
        const videoLink = 'https://www.instagram.com/reel/CoKpirVg2wf/?igsh=NmMwZ3VlcWtxa2k=';

        // Redirect to the video link
        // window.location.href = videoLink;
        window.open(videoLink, '_blank');
    };
    return (
        <section class="flex items-center py-10 xl:h-screen font-poppins dark:bg-gray-800 ">
            <div class="justify-center flex-1 max-w-8xl py-4 mx-auto lg:py-6 md:px-6">
                <div class="flex flex-wrap ">
                    <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div class="relative">

                            <img src="https://makersasylum.com/wp-content/uploads/2021/12/string-art.jpg" alt="Description of the image" className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />

                            <div
                                class="absolute z-10 hidden w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                            </div>
                            <div
                                class="absolute z-50 text-purple-600 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-red-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="w-14 h-14 bi bi-play-circle-fill"
                                    viewBox="0 0 16 16"
                                    onClick={togglePlay}
                                >
                                    {isPlaying ? (
                                        <rect x="6" y="4" width="4" height="8"  />
                                    ) : (
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                                    )}
                                </svg>


                                {/* {isPlaying && (
                                    <video width="640" height="360" controls>
                                        <source src={videoFile} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )} */}

                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                        <div class="relative">
                            <h1
                                class="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                                About Us
                            </h1>
                            <h1 class="pl-2 text-3xl font-bold border-l-8 border-purple-600 md:text-5xl dark:text-white">
                                Welcome to our site
                            </h1>
                        </div>
                        {/* <p class="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                            At Strinja, we believe in crafting more than just gifts; we create timeless expressions that resonate deep within the hearts of your loved ones. Our handmade string art pieces go beyond the ordinary, offering a special touch that lingers in the soul.Each string art creation at Strinja is a labor of love, meticulously crafted with a personalized touch. Whether it's a depiction of a cherished face or a representation of their most beloved passion, our string art becomes a profound and meaningful gift, leaving an indelible impression.
                            Strinja is more than a brand; it's a celebration of personal connections. The heart of our creations lies in the art of customization, turning each piece into a unique masterpiece that speaks directly to the recipient's heart. It goes beyond being just a gift; it's a symbol of shared memories and a testament to the beautiful moments that bind relationships.
                            Strinja's creations are designed to deepen connections, not limited to romantic relationships but extending to all kinds of bonds. Our artwork is a bridge that brings people closer, fostering a sense of warmth, appreciation, and understanding

                        </p> */}
                        <ul>
                            <p>
                                <li className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400"> <span className='font-bold'>Mission </span>-
                                    Our mission is to craft personalized masterpieces that not only inspire creativity but also deepen connections and transform fleeting moments into enduring memories. Through our handmade string art, we are committed to celebrating individuality and bringing joy to every corner of the world.
                                </li>
                                <li className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400"><span className='font-bold'>Vision</span>-

                                    We strive to be the premier destination for those seeking quality craftsmanship, artistic innovation, and heartfelt connections. Our vision includes fostering a community of Strinja enthusiasts, weaving a tapestry of cherished moments that enrich lives and endure through time.
                                </li>
                            </p>
                        </ul>
                        <a href="/why-strinja"
                            class="px-4 py-3 text-gray-50 transition-all transform bg-blue-600 rounded-[80px] hover:bg-black dark:hover:text-gray-100 dark:text-gray-100 ">
                            Join Us
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About
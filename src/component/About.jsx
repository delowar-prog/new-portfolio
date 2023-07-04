import React, { useEffect } from 'react'
import {Link} from 'react-scroll'
import HeadingText from '../utilities/HeadingText'
import { BsArrowUpRight,BsFacebook,BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const About = () => {
  useEffect(()=>{
    AOS.init({duration: 2000,});
},[])
  return (
    <div className='px-3 md:px-24 py-28' data-aos="zoom-out-right" id="about">
      <HeadingText heading={"About Me"}></HeadingText>
      <div className='flex flex-col md:flex-row gap-10 justify-between items-center'>
        <div className='w-full' data-aos="fade-up">
          <p className='text-white text-sm md:text-md text-justify my-5'>I'm Delowar Hossain Milton & Dedicated web developer, Strong creative and analytical skills. Motivated designer and developer with experience creating custom websites.Strong collaboration skills and proven history of application development.</p>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className='block w-36 px-3 py-1 cursor pointer hover:bg-green-600 uppercase text-white border flex items-center gap-4 rounded text-xl'>Hire me <BsArrowUpRight></BsArrowUpRight></Link>
        </div>
        <div className='w-full' data-aos="fade-up">
          <div className='flex flex-col md:flex-row gap-8 justify-between text-white'>
            <div className='w-full'>
              <p>Date of birth : May 25, 1990</p>
              <hr className='my-3 border-gray-500'></hr>
            </div>
            <div className='w-full'>
              <p>City : Dhaka, Bangladesh</p>
              <hr className='my-3 border-gray-500'></hr>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-8 justify-between text-white'>
            <div className='w-full'>
              <p>Phone : +88 01738118208</p>
              <hr className='my-3 border-gray-500'></hr>
            </div>
            <div className='w-full'>
              <p>Email : delowarmilton@gmail.com</p>
              <hr className='my-3 border-gray-500'></hr>
            </div>
          </div>
          <div className='flex my-5 gap-5 justify-center'>
            <a href='https://github.com/delowar-prog?tab=repositories' target="_blank"><FaGithub className='text-white text-3xl hover:text-green-500 cursor-pointer transition ease-in-out delay-150 '></FaGithub></a>
            <a href='https://www.facebook.com/delowar.milton' target='_blank'><BsFacebook className='text-white text-3xl hover:text-green-500 cursor-pointer transition ease-in-out delay-150 '></BsFacebook></a>
            <BsLinkedin className='text-white text-3xl hover:text-green-500 cursor-pointer transition ease-in-out delay-150 '></BsLinkedin>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default About
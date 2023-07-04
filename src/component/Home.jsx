import React, { useEffect } from 'react'
import Myphoto from '../assets/myimage.jpg'
import { BsDownload } from "react-icons/bs";
import { Typewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Home = () => {
    useEffect(()=>{
        AOS.init({duration: 2000,});
    },[])
    const words=['Junior Frontend Developer','MERN Stack Developer','Fullstack Developer']
    return (
        <div id='home' className='aos-item px-3 md:px-24 flex flex-col md:flex-row bg-zinc-700 justify-between gap-20 py-20'>
            <div className='w-[70%] space-y-8 flex flex-col justify-center'  data-aos="fade-up">
                <h2 className='text-xl md:text-3xl text-white font-bold nameFont'>Hello, I am Delowar Hossain Milton</h2>
                <h1 className='text-xl md:text-4xl text-white font-bold'>I'm a <span className='text-green-600'><Typewriter words={words} loop /></span></h1>
                <p className='text-sky-300 text-lg'>I am a well-versed MERN Stack developer & designer with 1 years plus experience. I have led many projects from design to deployment which have impacted thousands of people. I love to blend my skills in the most creative way possible.</p>
                <div>
                    <a href="./../../public/assets/resume.pdf" target="_blank" className='block w-36 px-5 py-2 hover:bg-green-600 uppercase text-white border flex items-center gap-4 rounded'>Resume <BsDownload className='text-xl'></BsDownload></a>
                </div>
            </div>
            <div className='w-[90%] md:w-[30%]' data-aos="fade-up">
                <img src={Myphoto} className='w-full border rounded-3xl'></img>
            </div>

        </div>
    )
}

export default Home
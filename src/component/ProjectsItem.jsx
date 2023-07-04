import { BsBoxArrowUpRight } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
const ProjectsItem = ({image,name,description,technology,prolink,codelink}) => {
  useEffect(()=>{
    AOS.init({duration: 2000,});
},[])
  return (
    <div data-aos="fade-left" data-aos-offset="300" className='p-5 rounded-xl bg-zinc-800 space-y-5 cursor-pointer hover:bg-zinc-600 drop-shadow-xl'>
    <img src={image} className='w-full hover:scale-110 transition duration-150 mx-auto'></img>
    <div className='text-white'>
        <h3 className='text-xl md:text-3xl my-5 text-sky-400'>{name}</h3>
        <p>{description.slice(0,200)}</p>
        <p className='my-5'><span className='font-bold text-lg'>Technology: </span>{technology}</p>
        <div className='flex justify-between my-8'>
            <a href={prolink} target="_blank" className='px-5 py-1 hover:bg-green-600 text-white border flex items-center gap-4 rounded-3xl text-md'>Live Demo <BsBoxArrowUpRight></BsBoxArrowUpRight></a>
            <a href={codelink} target="_blank" className='px-5 py-1 hover:bg-green-600 text-white border flex items-center gap-4 rounded-3xl text-md'>Code <BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
    </div>
</div>
  )
}

export default ProjectsItem
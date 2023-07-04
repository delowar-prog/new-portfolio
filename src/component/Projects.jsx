import { useEffect } from 'react'
import HeadingText from '../utilities/HeadingText'
import Fashion from '../assets/proscreenshort/fashion_design.png'
import Sports from '../assets/proscreenshort/sports_village.png'
import Catering from '../assets/proscreenshort/dhaka_catering.png'
import Work from '../assets/proscreenshort/work_opprotunity.png'
import ProjectsItem from './ProjectsItem'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Projects = () => {
    useEffect(()=>{
        AOS.init({duration: 2000,});
    },[])
    const fashionDescription='Its technical training center web site on fashion design. Here implement firebase authentication with user roll management, jwt. Payment method integration etc'
    const fashionTechnology='Tailwind, React, axios, Firebase, Express js & Mongodb'
    
    const sportsDescription='Its a toy related online shop. Here implement firebase authentication, jwt. react-hook-forms etc'
    const sportsTechnology='Tailwind, React, axios, Firebase, Express js & Mongodb'

    const foodDescription='This is a food supply & chef service provider web site. Here implement firebase authentication, rating, social Login like google & github'
    const foodTechnology='Bootstrap, React, Firebase'

    const workDescription='Its a job searching web site. An user can search a job, apply & show the applied job.'
    const workTechnology='HTML, CSS, Tailwind, Java script'

    return (
        <div className='px-3 md:px-24 py-28' data-aos="zoom-in-right" id="projects">
            <HeadingText heading={"Recent Projects"}></HeadingText>
            <div className='container grid md:grid-cols-2 gap-10'>
                <ProjectsItem image={Fashion} name={'Fashion Design School'} description={fashionDescription} prolink={'https://fashion-design-auth.web.app/'} codelink={'https://github.com/delowar-prog/car-doctor'} technology={fashionTechnology}></ProjectsItem>
                <ProjectsItem image={Sports} name={'Sports Village'} description={sportsDescription} prolink={'https://sports-village-auth.web.app/'} codelink={'https://github.com/delowar-prog/kalabhuna-restaurant-client'} technology={sportsTechnology}></ProjectsItem>
                <ProjectsItem image={Catering} name={'Dhaka Catering'} description={foodDescription} prolink={'https://dhaka-catering.web.app/'} codelink={'https://github.com/delowar-prog/kalabhuna-restaurant-client'} technology={foodTechnology}></ProjectsItem>
                <ProjectsItem image={Work} name={'Work Opportunity'} description={workDescription} prolink={'https://fantastic-mochi-0f6fca.netlify.app/'} codelink={'https://github.com/delowar-prog/car-doctor'} technology={workTechnology}></ProjectsItem>
            </div>
        </div>
    )
}

export default Projects
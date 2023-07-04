import HeadingText from '../utilities/HeadingText'
import Programming from '../assets/img/programming.png'
import Framework from '../assets/img/framework.png'
import Tool from '../assets/img/developer.png'
import Database from '../assets/img/database.png'
import SkillItem from './SkillItem';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react'

const Skill = () => {
    useEffect(()=>{
        AOS.init({duration: 2000,});
    },[])
    const Languages=['HTML','CSS','Javascript','Node Js']
    const Frameworks=['Bootstrap','Tailwind','React Js','Express Js']
    const Tools=['Vs Code','Github','Firebase','JWT']
    const Databases=['Mongodb','Mysql']
    return (
        <div className='px-3 md:px-24 py-28' data-aos="zoom-in-right" id="skills">
            <HeadingText heading={'Skills'}></HeadingText>
            <div className='grid md:grid-cols-4 gap-5'>
            <SkillItem image={Programming} category={'Language'} items={Languages}></SkillItem>
            <SkillItem image={Framework} category={'Frameworks'} items={Frameworks}></SkillItem>
            <SkillItem image={Tool} category={'Tools & Packages'} items={Tools}></SkillItem>
            <SkillItem image={Database} category={'Database'} items={Databases}></SkillItem>
            </div>
        </div>
    )
}

export default Skill
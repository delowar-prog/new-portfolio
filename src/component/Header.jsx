import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import { GiSkills } from "react-icons/gi";
import { FaDiagramProject } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";
const Header = () => {
    return (
        <div className="flex flex-col md:flex-row md:px-24 space-y-2  bg-zinc-800 z-10 justify-between py-5 sticky top-0">
            <div>
                <h1 className="text-5xl flex text-info gap-3 logoFont"><img src={Logo} className='w-14'></img> Milton</h1>
            </div>
            <ul className="menu menu-horizontal flex gap-1 md:gap-10 text-white md:mr-24 bg-zinc-900 rounded-box">
                <li>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500} title='home'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-red-500 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </Link>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true} offset={-50} duration={500} title='about'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-red-500 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </Link>
                </li>
                <li>
                    <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                        <GiSkills className="hover:text-red-500 h-5 w-5" title='skills'></GiSkills>
                    </Link>
                </li>
                <li>
                    <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                    <FaDiagramProject className="text-white hover:text-red-500 h-5 w-5" title='project'></FaDiagramProject>
                    </Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                        <BiSolidContact className="text-white hover:text-red-500 h-5 w-5" title='contact'></BiSolidContact>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
import { FaGithub } from 'react-icons/fa'
import Logo from '../assets/logo.png'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
const Footer = () => {
    return (
        <div className=''>
            <footer className="footer px-3 md:px-24 py-8 items-center bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                    <div>
                        <h1 className="text-3xl flex text-gray-400 gap-2 logoFont"><img src={Logo} className='w-8 grayscale'></img> Milton</h1>
                    </div>

                </div>
                <div className='grid-flow-col'>
                    <p>Copyright © 2023 - Delowar Hossain Milton</p>
                </div>
                <div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
                <a href='https://github.com/delowar-prog?tab=repositories' target='_blank'><FaGithub className='text-white text-3xl hover:text-green-500 cursor-pointer transition ease-in-out delay-150 '></FaGithub></a>
                <a href='https://www.facebook.com/delowar.milton' target='_blank'><BsFacebook className='text-white text-3xl hover:text-green-500 cursor-pointer transition ease-in-out delay-150 '></BsFacebook></a>
                    <BsLinkedin className='text-white text-3xl hover:text-green-500 cursor-pointer transition ease-in-out delay-150 '></BsLinkedin>
                </div>
            </footer>
        </div>
    )
}

export default Footer
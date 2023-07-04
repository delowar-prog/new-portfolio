import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import HeadingText from '../utilities/HeadingText'
import { FaGithub } from 'react-icons/fa'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'

const Contact = () => {
    const form = useRef();
    const [success, setSuccess]=useState('')
    const [error, setError]=useState('')
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ph4cns3', 'template_umal089', form.current, 'rqFLSXgVaHrfgHMtu')
            .then((result) => {
                setSuccess('Message sent successfully')
                setError('')
            }, (error) => {
                setError('Message sent successfully')
                setSuccess('')
            });
            e.target.reset()
    };

    return (
        <div className='px-3 md:px-24 py-28' data-aos="fade-right" id='contact'>
            <HeadingText heading={'Get In Touch'}></HeadingText>
            <div>
                <div className="flex lg:justify-evenly flex-col lg:flex-row">
                    <div className="text-center text-white lg:text-left">
                        <div className='my-8'>
                            <h2 className='text-2xl'>Email</h2>
                            <p className='text-lg'>delowarmilton@gmail.com</p>
                        </div>
                        <div className='my-8'>
                            <h2 className='text-2xl'>Phone</h2>
                            <p className='text-lg'>+88 01738118208</p>
                        </div>
                        <div className='my-8'>
                            <h2 className='text-2xl'>Address</h2>
                            <p className='text-lg'>Home Town : Ghoraghat, Dinajpur</p>
                            <p className='text-lg'>Live In : Khilgaon, Dhaka</p>
                        </div>
                    </div>
                    <div className="card w-full mx-auto lg:mx-0 max-w-sm shadow-2xl border border-gray-600">
                        <h3 className='text-green-600 text-lg mx-auto my-2'>{success&&success}</h3>   
                        <h3 className='text-red-600 text-lg  mx-auto my-2'>{error&&error}</h3>   
                    <form ref={form} onSubmit={sendEmail} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" name="from_name" required placeholder="Enter Your Name" className="input input-bordered bg-gray-600 text-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="text" name="from_email" required placeholder="Enter Your Email" className="input input-bordered bg-gray-600 text-white" />
                            </div>
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Message</span>
                                </label>
                                <textarea name="message" required placeholder="Your Message" rows={5} className="textarea input-bordered bg-gray-600 text-white"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' className="btn btn-info text-white" value={'Send'}></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
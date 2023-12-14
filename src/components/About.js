import React from 'react'
import profile from '../assets/photo.JPG';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


export const About = () => {
    return (
        <div className='bg-gray-700'>
            <div className='flex flex-col sm:flex-row'>
                <div className='p-20'>
                    <img
                        src={profile}
                        alt='image not found'
                        className='mx-auto my-10 h-64 w-48 rounded-lg'
                    />
                </div>
                <div className='px-10 py-20 sm:w-3/4'>
                    <div className='text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl'>
                        <h1>SAI NITHIN</h1>
                    </div>
                    <p className='mt-6 mb-8 text-lg leading-8 text-gray-400'>
                        Under Graduate (4th Year) at National Institute of Technology Durgapur in Department of Computer Science and Engineering (CSE)
                        and Upcoming System Software Engineer Intern in NVIDIA. In addition to my academic pursuits, I have actively engaged in web development throughout this undergraduate journey. I am particularly passionate about creating web applications that seamlessly blend functionality with a visually appealing design. A passionate participant in hackathons, Finalist in the Tally CodeBrewers Hackathon Conducted by Tally Solutions.
                    </p>
                <div className='flex pt-4'>
                    <a href='https://github.com/Sainithin1233' target='_blank' className='text-6xl w-1/3'>
                        <FaGithub className='mx-auto'/>
                    </a>
                    <a href='https://www.linkedin.com/in/kota-sai-nithin-546041215/' target='_blank' className='text-6xl w-1/3'>
                        <FaLinkedin className='mx-auto' />
                    </a>
                    <a href={`mailto:${'kotasainithin1233@gmail.com'}`} target='_blank' className='text-6xl w-1/3'>
                        <IoMdMail className='mx-auto' />
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}

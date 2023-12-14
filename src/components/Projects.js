import React from 'react';
import quickkeys from '../assets/project_imgs/quickkeys.png';
import portfolio from '../assets/project_imgs/portfolio.png';
import convoroom from '../assets/project_imgs/convoroom.png';
import bloodbank from '../assets/project_imgs/blood_bank.png';


export const Projects = () => {
  const projects = [
    {
      name: 'ConvoRoom',
      description: 'A Web Game to Practice Typing. Supports single Player and Multiplayer game modes, Powered by Web sockets. Clean Interface build using Tailwind CSS. Frontend built on ReactJS, Tailwind CSS. Backend built on NodeJS, Express JS, MongoDB, Socket IO.',
      imgage: convoroom ,
      link:"https://www.google.com/",
    },
    {
      name: 'Quickkeys',
      description: 'A Responsive Full Stack Meeting web application that can host individual and group meets along with chats providing wonderful virtual meeting experience with complete Authentication and Authorization (Based on MERN Stack). Frontend built on ReactJS, Material UI, CSS. Backend built on NodeJS, Express JS, MongoDB.',
      imgage: quickkeys,
      link:"https://github.com/Sainithin1233/QuickKeys",
    },
    {
      name: 'Online Blood Mangament System',
      description: 'A Responsive web application that allows users to search and request for blood donations. The system provides a user-friendly interface for both employees and users to manage the blood donation process efficiently. Technology used for Frontend: HTML, CSS, React JS. Technology used for Backend: NodeJS, Express JS, MySQL.',
      imgage: bloodbank ,
      link:"https://github.com/Sainithin1233/Blood_Bank",
    },
    {
      name: 'Portfolio',
      description: 'A Responsive web application that allows us to display my personal details, skills, projects, achievements',
      imgage: portfolio ,
      link:"https://www.google.com/",
    },
  ]
  return (
    <div className='bg-gray-700 px-20'>
      <h1 className="text-gray-100 font-bold text-4xl px-10 py-5 underline">PROJECTS</h1>
        {projects.map((project) => (
          <div className='flex flex-col lg:flex-row p-4'>
            <div className='lg:w-2/6 p-4 bg-gray-800 lg:rounded-s-2xl'>
              <img
                src={project.imgage}
                alt="image not found"
                className='shadow-2xl border-4 border-gray-800 rounded-xl h-full w-full object-cover object-center group-hover:opacity-75'
              />
            </div>
            <div className='lg:w-4/6 px-10 py-8 bg-gray-800 lg:rounded-e-2xl'>
              <h1 className='font-bold text-gray-100 underline text-3xl mb-6'>{project.name}:</h1>
              <p className='text-gray-400 pb-2'>{project.description}</p>
              <a href={project.link} target="_blank" className='text-gray-300 underline font-bold ' >Github Repo</a>
            </div>
          </div>
        ))}
    </div>
  )
}

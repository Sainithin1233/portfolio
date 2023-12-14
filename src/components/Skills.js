import React from 'react'
// import { skills } from '../assets';
import cphoto from '../assets/skills/c.png';
import cppphoto from '../assets/skills/cpp.jpeg';
import pythonphoto from '../assets/skills/python.jpeg';
import htmlphoto from '../assets/skills/html.png';
import cssphoto from '../assets/skills/css.png';
import jsphoto from '../assets/skills/js.jpeg';
import nodephoto from '../assets/skills/node.png';
import mongophoto from '../assets/skills/mdb.png';
import sqlphoto from '../assets/skills/sql.png';
import reactphoto from '../assets/skills/react.png';
import expressphoto from '../assets/skills/express.png';
import bootstrapphoto from '../assets/skills/bootstrap.jpeg';
import oopsphoto from '../assets/skills/oops.png';
import dsaphoto from '../assets/skills/data.png';
import osphoto from '../assets/skills/os.png';
import cnphoto from '../assets/skills/cn.jpeg';
import dbmsphoto from '../assets/skills/dbms.jpeg';


export const Skills = () => {

  const skills_path = '../assets/skills/';

  const proglang = [
    {
      name: 'C',
      group: 'Programming Language',
      imageSrc: cphoto,
      imageAlt: 'c.png',
    },
    {
      name: 'C++',
      group: 'Programming Language',
      imageSrc: cppphoto,
      imageAlt: 'cpp',
    },
    {
      name: 'Python',
      group: 'Programming Language',
      imageSrc: pythonphoto,
      imageAlt: 'python',
    },
    {
      name: 'HTML',
      group: 'Frontend Development',
      imageSrc: htmlphoto,
      imageAlt: 'HTML',
    },
    {
      name: 'CSS',
      group: 'Frontend Development',
      imageSrc: cssphoto,
      imageAlt: 'CSS',
    },
    {
      name: 'JavaScript',
      group: 'Frontend Development',
      imageSrc: jsphoto,
      imageAlt: 'JavaScript',
    },
    {
      name: 'NodeJS',
      group: 'Backend Development',
      imageSrc: nodephoto,
      imageAlt: 'node js',
    },
    {
      name: 'MongoDB',
      group: 'Backend Development',
      imageSrc: mongophoto,
      imageAlt: 'mongo db',
    },
    {
      name: 'SQL',
      group: 'Backend Development',
      imageSrc: sqlphoto,
      imageAlt: 'sql',
    },
    {
      name: 'ReactJS',
      group: 'Frame Work',
      imageSrc: reactphoto,
      imageAlt: 'reactjs',
    },
    {
      name: 'ExpressJS',
      group: 'Frame Work',
      imageSrc: expressphoto,
      imageAlt: 'express',
    },
    {
      name: 'Bootstrap',
      group: 'Frame Work',
      imageSrc: bootstrapphoto,
      imageAlt: 'Bootstrap',
    },
    {
      name: 'Data Structures',
      group: 'Course Work',
      imageSrc: dsaphoto,
      imageAlt: 'Data Structures',
    },
    {
      name: 'OOPS',
      group: 'Course Work',
      imageSrc: oopsphoto,
      imageAlt: 'OOPS',
    },
    {
      name: 'DBMS',
      group: 'Course Work',
      imageSrc: dbmsphoto,
      imageAlt: 'dbms',
    },
    {
      name: 'Computer Networks',
      group: 'Course Work',
      imageSrc: cnphoto,
      imageAlt: 'CN',
    }
  ]

  return (
    <div className="bg-gray-700">
      <div className="mx-auto max-w-xs px-4 py-8 sm:px-6 sm:py-12 sm:max-w-4xl lg:max-w-5xl lg:px-8">
        <h1 className="text-gray-100 font-bold text-4xl mb-6 underline">SKILLS </h1>
        <h1 className="text-gray-100 font-bold text-2xl mb-6">Progamming Languages</h1>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 xl:gap-x-8">
          {proglang.map((skill) => (
            <div className="group">
              <div className="shadow-2xl border-4 border-yellow-800 aspect-h-0.5 aspect-w-0.5 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-6 xl:aspect-w-5">
                <img
                  src={skill.imageSrc}
                  alt={skill.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-200">{skill.name}</h3>
              <p className='max-w-full text-xs text-gray-400'>{skill.group}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

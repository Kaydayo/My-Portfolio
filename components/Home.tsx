import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { FlipWords } from './ui/flip-words';

const HomePage = () => {
  const words = ["Fullstack", "Backend  ", "Frontend"];
  return (
    <div className='flex flex-row gap-0 w-full p-0'>
      <div className='h-screen w-2/4 flex-col gap-[20%]'>
        <div className="relative p-4 flex items-center">
          <div className="bg-yellow-200 w-12 h-12 rounded-full mix-blend-multiply"></div>
          <p className="-ml-6 z-10 mix-blend-multiply text-gray-700 font-bold">
            Mujeeb.
          </p>
        </div>
        <div className='px-4'>
          <div className='text-left my-[8%] text-8xl font-bold'>
            <FlipWords words={words} className='w-2/3 m-0 p-0' /> <span className='static'> Software </span> <br />
            <span className='line-through'> Developer </span>  Engineer.
          </div>
          <TextGenerateEffect words="Scalable Solutions, Full-Stack Development, API Integration, Cloud Computing, CI/CD Pipelines, System Architecture, Code Optimization, Data Security, Agile Methodologies, Automation & Scripting, Microservices, Machine Learning Integration, Cross-Platform Development, Distributed Systems, Real-Time Data Processing, Version Control (Git), RESTful Services, Test-Driven Development (TDD), Data Visualization, Containerization (Docker, Kubernetes)." className='-my-[5%] text-sm font-regular' />

        </div>

        <div className='px-4 flex gap-2 items-center'>
          <button className='w-36 h-10 shadow-[5px_5px_0px_rgba(0,0,0,1)] border border-black  rounded-full border-s-2  my-[10%] flex gap-3 justify-center items-center '>
            <div className="w-7 h-7 rounded-full bg-yellow-100">
              <p className='text-lg shadow-2xl'>👋🏻</p>
            </div>

            <p>Lets talk!</p>
          </button>

          <div className="flex items-center gap-1">
          <button className='w-10 h-10 bg-yellow-100 border border-black  rounded-full border-s-2  my-[10%] flex gap-3 justify-center items-center'>
           
          </button>
           <p>Download CV</p>
          </div>

        </div>

      </div>



      <div className='h-screen w-1/4 bg-white-100 relative'>
        <p className="absolute  text-white-400 text-[150px] font-extrabold writing-mode-vertical transform -rotate-90 text-center">MUJEEB</p>
        <img
          src="/assets/avatar.png"
          alt="My Image"
          className='absolute  -bottom-[5%] h-[500px] -left-0  object-cover z-0'
        />

      </div>




      <div className='h-screen w-1/4 bg-white-400 relative z-0 flex flex-col gap-10 items-center justify-center px-6 text-white'>
        <p className='font-bold'> I'm Mujeeb, a software engineer, I blend innovation and strategy to craft robust systems that foster growth.</p>
        <p className='font-bold'>I'm passionate about crafting scalable solutions that not only meet today’s challenges but also pave the way for tomorrow’s innovations.
        </p>
        <p className='font-normal text-xs leading-5'>  With a blend of creativity and technical expertise, I transform ideas into dynamic systems that drive growth and efficiency.
          Join me in building a future where your vision can truly thrive!</p>
      </div>
    </div>
  )
}

export default HomePage
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#022C43]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto md:pt-0 pt-32 px-8 flex flex-col justify-center h-full'>
        <p className='text-[#F7F700] '>Hi, my name is -</p>
        <h1 className='text-4xl my-name mb-4 sm:text-7xl font-bold text-white bg-white'>
          Ayon Jodder
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold my-name bg-[#8892b0] text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#a6b2d6] py-4 max-w-[700px] my-name bg-white'>
        Hi, I'm a dedicated and passionate MERN Developer. I'm a quick learner and eager to learn new technologies to expand my knowledge. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button id='cv-button' className='hover:text-white text-white group bg-[#011e2e] hover:bg-transparent px-6 py-3 my-2 flex items-center'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

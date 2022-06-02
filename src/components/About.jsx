import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#022C43] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='my-name bg-white text-4xl font-bold inline border-b-4 border-[#F7F700]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className='my-name bg-white'>Hi. I'm <span className='text-[#F7F700] my-name bg-[#F7F700]'>Ayon</span>, It's great to finally meet you. Please look around.</p>
            </div>
            <div>
              <p className='my-name bg-white text-[#a6b2d6]'>I'm passionate about creating high-quality web applications that benefit individuals around me. I specialize in developing software for a wide range of clients, from individuals to small enterprises to huge corporations. What would you do if you had access to a software specialist at any time?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;

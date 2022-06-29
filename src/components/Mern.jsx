import React from 'react';
import projectOne from '../assets/projectOne.png'
import projectTwo from '../assets/projectTwo.png'
import projectEight from '../assets/projectEight.png';

const Mern = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div
                style={{ backgroundImage: `url(${projectOne})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        MERN Stack Project
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" rel="noreferrer" href='https://assignment12-685d7.web.app/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                        <a href='https://github.com/AyonJD/MERN-project-assignment-12-hardware-point' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${projectTwo})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        MERN Stack Project
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://flavoro-4fd30.web.app/' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                        <a href='https://github.com/AyonJD/assignment-11-flavoro-warhouse' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${projectEight})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        MERN Stack Project
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://deskala-task.web.app/' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                        <a href='https://github.com/AyonJD/deskala-task' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mern;
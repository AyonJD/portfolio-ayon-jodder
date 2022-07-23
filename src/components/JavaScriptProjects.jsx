import React from 'react';
import projectSix from '../assets/projectSix.png';

const JavaScriptProjects = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div
                style={{ backgroundImage: `url(${projectSix})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        JavaScript Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://live-weather-ayon.netlify.app/' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                        <a href='https://github.com/AyonJD/weather-react-app' target="_blank" rel="noreferrer">
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

export default JavaScriptProjects;
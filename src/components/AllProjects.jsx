import React from 'react';
import projectOne from '../assets/projectOne.png'
import projectTwo from '../assets/projectTwo.png'
import projectEight from '../assets/projectEight.png';
import projectThree from '../assets/projectThree.png'
import projectFour from '../assets/projectFour.png'
import projectFive from '../assets/projectFive.png';
import projectSeven from '../assets/projectSeven.png';
import projectSix from '../assets/projectSix.png';
import projectNine from '../assets/projectNine.png'
import projectTen from '../assets/projectTen.PNG'

const AllProjects = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
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
            {/* Grid Item */}
            <div
                style={{ backgroundImage: `url(${projectThree})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React Project
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://ivent-3c76f.web.app/' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                        <a href='https://github.com/AyonJD/ivent-personal-service-provider-assignment-10' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div
                style={{ backgroundImage: `url(${projectFour})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React Project
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://ema-john-ayon.netlify.app/' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                        <a href='https://github.com/AyonJD/ema-john-shop-react' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            {/* Grid Item */}
            <div
                style={{ backgroundImage: `url(${projectFive})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React Project
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://crypto-caffe-ayon.netlify.app/' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                        <a href='https://github.com/AyonJD/react-router-crypto-cafe' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
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
            <div
                style={{ backgroundImage: `url(${projectSeven})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React Pagination
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://smart-data-table-bb6f7.web.app/' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                        <a href='https://github.com/AyonJD/react-smart-table' target="_blank" rel="noreferrer">
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
                        MERN Project
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

            <div
                style={{ backgroundImage: `url(${projectNine})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        JavaScript Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://ayonjd.github.io/practice-01/' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                        <a href='https://github.com/AyonJD/practice-01.git' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
            <div
                style={{ backgroundImage: `url(${projectTen})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        JavaScript Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://ayonjd.github.io/practice-02-bootstrap/' target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                        <a href='https://github.com/AyonJD/practice-02-bootstrap' target="_blank" rel="noreferrer">
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

export default AllProjects;
import React from 'react';
import projectThree from '../assets/projectThree.png'
import projectFour from '../assets/projectFour.png'
import projectFive from '../assets/projectFive.png';
import projectSeven from '../assets/projectSeven.png';

const ReactProject = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
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
        </div>
    );
};

export default ReactProject;
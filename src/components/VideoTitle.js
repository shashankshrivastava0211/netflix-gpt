import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='md:pt-36 pt-6 px-4 md:px-12 absolute   md:left-0 left-0 top-60 md:top-80 md:bottom-0 md:w-full  md:bg-gradient-to-t from-black via-transparent to-transparent text-white'>
            <h1 className='md:text-6xl text-xl  font-extrabold'>{title}</h1>
            <p className='py-6 text-lg md:w-2/5 hidden md:inline-block'>{overview}</p>
            <div className='flex space-x-4'>
                <button className='bg-white text-black font-bold md:py-2 md:px-6 px-2 py-1 rounded hover:bg-gray-300 transition duration-200'>
                  ▶️  Play
                </button>
                <button className='bg-gray-700 text-white font-bold py-2 px-6 rounded hover:bg-gray-600 transition duration-200'>
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;

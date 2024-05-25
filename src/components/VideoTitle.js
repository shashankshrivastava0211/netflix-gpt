import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-36 px-12'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/3'>{overview}</p>
            <div className='flex space-x-4'>
                <button className='bg-gray-700 text-white font-bold py-2 px-6 rounded hover:bg-gray-600 transition duration-200'>
                    Play
                </button>
                <button className='bg-gray-700 text-white font-bold py-2 px-6 rounded hover:bg-gray-600 transition duration-200'>
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;

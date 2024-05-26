import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-36 px-12 absolute left-0 bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white'>
            <h1 className='text-6xl font-extrabold mb-4'>{title}</h1>
            <p className='py-6 text-lg w-2/5'>{overview}</p>
            <div className='flex space-x-4'>
                <button className='bg-white text-black font-bold py-2 px-6 rounded hover:bg-gray-300 transition duration-200'>
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

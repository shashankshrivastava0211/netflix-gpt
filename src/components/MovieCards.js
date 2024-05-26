import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCards = ({ posterPath }) => {
    return (
        <div className='p-2 transform transition-transform duration-300 hover:scale-105'>
            <div className='w-40'>
                <img
                    alt='movie card'
                    src={IMG_CDN + posterPath}
                    className='w-full h-auto rounded-lg shadow-lg'
                />
            </div>
        </div>
    );
};

export default MovieCards;

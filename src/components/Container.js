import React, { useEffect, useState } from 'react';
import { api_options } from '../utils/constants';

const Container = ({ movieId }) => {
    const [key, setKey] = useState(null);

    const getWatchMovie = async () => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
        const data = await fetch(url, api_options);
        const json = await data.json();
        console.log("test", json);

        const filterData = json.results.filter((video) => video.type === "Trailer");

        const watch = filterData.length ? filterData[0] : json.results[0];
        
        if (watch) {
            setKey(watch.key);
        }
    };

    useEffect(() => {
        getWatchMovie();
    }, [movieId]);

    return (
        <div className="flex items-center justify-center h-screen ">
            {key ? (
                <div className="w-screen h-full">
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=0`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Container;

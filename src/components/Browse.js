
import Header from './Header';

import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';

const Browse = () => {
    useNowPlayingMovies()
    return (
        <div>
            <Header />
            {/* {we can devide our app in two sections basically vedio container and vidio lists
            video container has vedio background titile 
            another container has lists 
                cards*n} */}
            <MainContainer />
            <SecondryContainer />

            
        </div>
    )
}

export default Browse ;


import Header from './Header';


import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import usePopularMovies from '../utils/hooks/usePopularMovies';
import useToprated from '../utils/hooks/useTopRated';
import useUpcomming from '../utils/hooks/useUpComming';

const Browse = () => {
    useNowPlayingMovies()
    usePopularMovies()
    useToprated()
    useUpcomming()

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

import styles from "../styles/Box2.module.css";
import Loader from "./Loader";
import MovieDetails from "./MovieDetails";
// import WatchedMovieList from "./WatchedMovieList";
// import WatchSummery from "./WatchSummery";

function Box2({ movieDetails, handleCloseMovieDetails, isLoadingMovieDetails }) {

    return (
        <div className={styles.box2}>
             {isLoadingMovieDetails && <Loader />}
            {/* 
            <WatchSummery />
            <WatchedMovieList />  */}
  {!isLoadingMovieDetails && movieDetails && (
                <MovieDetails
                    movieDetails={movieDetails}
                    handleCloseMovieDetails={handleCloseMovieDetails}
                />
            )}
        </div>
    );
}

export default Box2;
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_STATUS } from '../../utilities/enums';

import Star from '../../assets/Star.svg';
import ListIcon from '../../assets/List.svg';
import useMovieStore from '../../store/store';
import ShowtimeIcon from '../../assets/Tickets.svg';
import Loader from '../../components/loader/Loader';
import ListWhiteIcon from '../../assets/ListWhite.svg';
import MockPicture from '../../assets/MockPicture.png';
import ExpandArrow from '../../assets/ExpandArrow.svg';
import Sidebar from '../../components/sidebar/Sidebar';

import './Movie.scss';

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [movieKey, setMovieKey] = useState(null);

  const [status, setStatus] = useState(API_STATUS.LOADING);

  const getMovie = useMovieStore((state) => state.getMovie);
  const fetchedMovie = useMovieStore((state) => state.movie.data);
  const movieStatus = useMovieStore((state) => state.movie.status);

  const getMovieKey = useMovieStore((state) => state.getMovieKey);
  const fetchedMovieKey = useMovieStore((state) => state.movieKey.data);
  const movieKeyStatus = useMovieStore((state) => state.movieKey.status);

  useEffect(() => {
    if (fetchedMovie) {
      setMovie(fetchedMovie);
    } else {
      setMovie(null);
    }
  }, [fetchedMovie]);

  useEffect(() => {
    if (fetchedMovie) {
      setMovieKey(fetchedMovieKey);
    } else {
      setMovieKey(null);
    }
  }, [fetchedMovieKey]);

  useEffect(() => {
    if (
      movieStatus === API_STATUS.SUCCEEDED &&
      movieKeyStatus === API_STATUS.SUCCEEDED
    ) {
      setStatus(API_STATUS.SUCCEEDED);
    } else if (
      movieStatus === API_STATUS.LOADING ||
      movieKeyStatus === API_STATUS.LOADING
    ) {
      setStatus(API_STATUS.SUCCEEDED);
    } else {
      setStatus(API_STATUS.FAILED);
    }
  }, [movieStatus, movieKeyStatus]);

  useEffect(() => {
    getMovie(movieId);
    getMovieKey(movieId);

    return () => {
      setMovie(null);
      setMovieKey(null);
      setStatus(API_STATUS.LOADING);
    };
  }, []);

  return (
    <main className="movie">
      <Sidebar />
      <section>
        {status === API_STATUS.SUCCEEDED ? (
          <>
            <div className="image-wrap">
              {movieKeyStatus === API_STATUS.SUCCEEDED ? (
                <iframe
                  title="YouTube Video Player"
                  src={`https://www.youtube.com/embed/${movieKey}`}
                  allowFullScreen
                ></iframe>
              ) : (
                <div>
                  <Loader />
                </div>
              )}
            </div>
            <div className="details">
              <div className="info">
                <div className="title">
                  <h1>{movie?.title}</h1>
                  {' • '}
                  <span>
                    {new Date(movie?.release_date).getFullYear() | 'Unknown'}
                  </span>
                  {' • '}
                  <span>PG-13</span>
                  {' • '}
                  <span>2h 10m</span>
                </div>

                <p className="genre">
                  {movie?.genres.map((gengre) => (
                    <span key={gengre.id}>{gengre.name}</span>
                  ))}
                </p>
                <div className="ratings">
                  <img src={Star} alt="star" />
                  <p>
                    <span>{movie?.vote_average.toFixed(1) || 0.0} </span>| 350k
                  </p>
                </div>
              </div>
              <div className="more-info">
                <div>
                  <p>{movie?.overview}</p>
                  <p>
                    Director: <span className="red">Joseph Kosinski</span>
                  </p>
                  <p>
                    Writers :{' '}
                    <span className="red">
                      Jim Cash, Jack Epps Jr, Peter Craig
                    </span>
                  </p>
                  <p>
                    Stars:{' '}
                    <span className="red">
                      {' '}
                      Tom Cruise, Jennifer Connelly, Miles Teller
                    </span>
                  </p>
                  <div>
                    <span>Top rated movie #65</span>
                    Awards 9 nominations
                    <img src={ExpandArrow} alt="Expand Icon" />
                  </div>
                </div>
                <div className="more">
                  <Link className="button">
                    <img src={ShowtimeIcon} alt="Ticket Icon" />
                    See Showtimes
                  </Link>
                  <Link className="button">
                    <img src={ListIcon} alt="Ticket Icon" />
                    More watch options
                  </Link>
                  <Link className="show">
                    <img src={MockPicture} alt="More shows" />
                    <span>
                      <img src={ListWhiteIcon} alt="List Icon" />
                      The Best Movies and Shows in September
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : null}
        {status === API_STATUS.FAILED ? (
          <div className="error">
            Something went wrong!
            <button
              type="button"
              onClick={() => {
                getMovie(movieId);
                getMovieKey(movieId);
              }}
            >
              Try again
            </button>
          </div>
        ) : null}
        {status === API_STATUS.LOADING ? <Loader /> : null}
      </section>
    </main>
  );
};

export default Movie;

import { useEffect, useState } from 'react';
import { API_STATUS } from '../../utilities/enums';
import { RedChevronRIghtIcon } from '../../assets/icons/Icons';

import useMovieStore from '../../store/store';

import Footer from '../../globals/footer/Footer';
import Header from '../../globals/header/Header';
import Loader from '../../components/loader/Loader';
import Headline from '../../components/headline/Headline';
import MovieCard from '../../components/movie-card/MovieCard';

import './HomePage.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = useMovieStore((state) => state.getMovies);
  const fetchedMovies = useMovieStore((state) => state.movies.data);
  const status = useMovieStore((state) => state.movies.status);

  useEffect(() => {
    if (fetchedMovies) {
      setMovies(fetchedMovies);
    } else {
      setMovies([]);
    }
  }, [fetchedMovies]);

  useEffect(() => {
    if (status === API_STATUS.LOADING) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [status]);

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <Header />
      <main className="home-main">
        <Headline />
        <section className="movies">
          <div className="sec-head">
            <h2>Featured Movies</h2>

            <Link to="#">
              See more
              <RedChevronRIghtIcon />
            </Link>
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <div className="content">
              {movies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

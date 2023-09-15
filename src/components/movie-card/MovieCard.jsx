import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeartIcon } from '../../assets/icons/Icons';
import { getGenreByIds } from '../../utilities/helpers';

import IMDbLogo from '../../assets/IMDb.png';
import TomatoeLogo from '../../assets/tomatoe.png';

import './MovieCard.scss';

const MovieCard = ({ movie }) => {
  const [favorite, setFavorite] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="movie-card" data-testid="movie-card">
      <button
        type="button"
        className="favorite"
        aria-label="add to favorite"
        onClick={() => setFavorite(!favorite)}
      >
        <HeartIcon fill={favorite} />
      </button>
      <Link to={`/movie/${movie?.id}`}>
        <div className="poster-wrap">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={movie.title}
            data-testid="movie-poster"
          />
        </div>
        <div className="detail">
          <p className="country">
            USA,{' '}
            <span data-testid="movie-release-date">
              {new Date(movie.release_date).getFullYear() | 'Unknown'}
            </span>
          </p>
          <p className="title" data-testid="movie-title">
            {movie?.title}
          </p>
          <p className="ratting">
            <span>
              <img src={IMDbLogo} alt="IMDb logo" />
              <span>{(movie?.vote_average * 10).toFixed(1)} / 100</span>
            </span>
            <span>
              <img src={TomatoeLogo} alt="IMDb logo" />
              <span>97%</span>
            </span>
          </p>
          <p className="genre">{getGenreByIds(movie?.genre_ids)}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;

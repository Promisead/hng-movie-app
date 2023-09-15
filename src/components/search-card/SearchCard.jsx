import { Link } from 'react-router-dom';
import { getGenreByIds } from '../../utilities/helpers';

import './SearchCard.scss';

const SearchCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie?.id}`}
      className="search-card"
      data-testid="movie-card"
    >
      <div className="poster-wrap">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt={movie?.title}
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

        <p className="genre">{getGenreByIds(movie?.genre_ids)}</p>
      </div>
    </Link>
  );
};

export default SearchCard;

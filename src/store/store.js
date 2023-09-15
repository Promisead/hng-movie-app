/**
 * Application Store
 */

import { create } from 'zustand';
import { API_STATUS } from '../utilities/enums';

import API from './api';

/**
 * Custom hook for managing movie-related state.
 *
 * @returns {Object} The movie store object with state and actions.
 */
const useMovieStore = create((set) => ({
  /**
   * State for managing movie search results.
   *
   * @type {Object}
   * @property {?Array} data - The search results data.
   * @property {API_STATUS} status - The API status for search.
   */
  search: {
    data: null,
    status: API_STATUS.IDLE,
  },

  /**
   * State for managing movie list.
   *
   * @type {Object}
   * @property {?Array} data - The list of movies.
   * @property {API_STATUS} status - The API status for movie list.
   */
  movies: {
    data: null,
    status: API_STATUS.IDLE,
  },

  /**
   * State for managing individual movie details.
   *
   * @type {Object}
   * @property {?Object} data - The movie details.
   * @property {API_STATUS} status - The API status for individual movie.
   */
  movie: {
    data: null,
    status: API_STATUS.IDLE,
  },

  /**
   * State for managing individual movie trailer key.
   *
   * @type {Object}
   * @property {?Object} data - The movie trailer key.
   * @property {API_STATUS} status - The API status for individual movie.
   */
  movieKey: {
    data: null,
    status: API_STATUS.IDLE,
  },

  /**
   * Action for retrieving a movie by its ID.
   *
   * @async
   * @param {number} movieId - The ID of the movie to retrieve.
   */
  getMovie: async (movieId) => {
    set((state) => ({
      ...state,
      movie: {
        ...state.movie,
        status: API_STATUS.LOADING,
      },
    }));

    const { data, status } = await API.getMovie(movieId);

    set((state) => ({
      ...state,
      movie: {
        ...state.movie,
        status,
        data,
      },
    }));
  },

  /**
   * Action for retrieving a list of movies.
   *
   * @async
   */
  getMovies: async () => {
    set((state) => ({
      ...state,
      movies: {
        ...state.movies,
        status: API_STATUS.LOADING,
      },
    }));

    const { data, status } = await API.getMovies();

    set((state) => ({
      ...state,
      movies: {
        ...state.movies,
        status,
        data: data ? data.slice(0, 10) : data,
      },
    }));
  },

  /**
   * Action for searching for movies based on a query.
   *
   * @async
   * @param {string} query - The search query.
   */
  searchMovies: async (query) => {
    set((state) => ({
      ...state,
      search: {
        ...state.search,
        status: API_STATUS.LOADING,
      },
    }));

    const { data, status } = await API.searchMovie(query);

    set((state) => ({
      ...state,
      search: {
        ...state.search,
        status,
        data,
      },
    }));
  },

  /**
   * Action for retrieving a movie tailer key by its ID.
   *
   * @async
   * @param {number} movieId - The ID of the movie to retrieve.
   */
  getMovieKey: async (movieId) => {
    set((state) => ({
      ...state,
      movieKey: {
        ...state.movieKey,
        status: API_STATUS.LOADING,
      },
    }));

    const { data, status } = await API.getVideoKey(movieId);

    set((state) => ({
      ...state,
      movieKey: {
        ...state.movieKey,
        status,
        data,
      },
    }));
  },
}));

export default useMovieStore;

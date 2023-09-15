/**
 * Application API Instance
 * @module API
 */

import axios from 'axios';

import { API_STATUS } from '../utilities/enums';

/**
 * Base URL for the Movie Database API.
 * @constant {string}
 */
const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * API Access Token for authentication.
 * @constant {string}
 */
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDdjYTM5ZTNkNDc0ZDRlMDgxZWY4MTEwYjQ2ODNkOCIsInN1YiI6IjY1MDA1YjE0ZmZjOWRlMGVlMjA5MmZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6jeQ8UvXwpQfnagjIav_EkdPqEEk479rq0q1vsF3GtQ';

/**
 * Axios instance for making API requests.
 * @const {AxiosInstance}
 */
const api = axios.create({
  baseURL: BASE_URL,
  //   timeout: 5000,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

/**
 * Object containing API request functions.
 * @const {object}
 * @property {function} getMovies - Function to get a list of top-rated movies.
 * @property {function} searchMovie - Function to search for movies based on a query.
 */
const API = {
  /**
   * Function to get a movie.
   * @async
   * @function getMovie
   * @returns {Promise<object>} An object with status and data properties.
   * @throws {Error} If an error occurs during the API request.
   */
  getMovie: async (movieId) => {
    try {
      const response = await api.get(`/movie/${movieId}?language=en-US`);

      const { status, data } = response;

      if (status === 200) {
        return {
          status: API_STATUS.SUCCEEDED, // 'IDLE' || 'SUCCEEDED' || 'FAILED' || 'LOADING'
          data,
        };
      } else {
        return {
          status: API_STATUS.ERROR, // 'IDLE' || 'SUCCEEDED' || 'FAILED' || 'LOADING'
          data: null,
        };
      }
    } catch (error) {
      return {
        status: API_STATUS.ERROR, // 'IDLE' || 'SUCCEEDED' || 'FAILED' || 'LOADING'
        data: null,
      };
    }
  },

  /**
   * Function to get a list of top-rated movies.
   * @async
   * @function getMovies
   * @returns {Promise<object>} An object with status and data properties.
   * @throws {Error} If an error occurs during the API request.
   */
  getMovies: async () => {
    try {
      const response = await api.get('/movie/top_rated');

      const { status } = response;
      const { results } = response.data;

      if (status === 200) {
        return {
          status: API_STATUS.SUCCEEDED, // 'IDLE' || 'SUCCEEDED' || 'FAILED' || 'LOADING'
          data: results,
        };
      } else {
        return {
          status: API_STATUS.ERROR, // 'IDLE' || 'SUCCEEDED' || 'FAILED' || 'LOADING'
          data: null,
        };
      }
    } catch (error) {
      return {
        status: API_STATUS.ERROR, // 'IDLE' || 'SUCCEEDED' || 'FAILED' || 'LOADING'
        data: null,
      };
    }
  },

  /**
   * Function to search for movies based on a query.
   * @async
   * @function searchMovie
   * @param {string} query - The search query for movies.
   * @returns {Promise<object>} An object with status and data properties.
   * @throws {Error} If an error occurs during the API request.
   */
  searchMovie: async (query) => {
    try {
      const response = await api.get(
        `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
      );

      const { status } = response;
      const { results } = response.data;

      if (status === 200) {
        return {
          status: API_STATUS.SUCCEEDED, // 'IDLE' || 'SUCCEEDED' || 'FAILED' || 'LOADING'
          data: results,
        };
      } else {
        return {
          status: API_STATUS.ERROR, // 'IDLE' || 'SUCCEEDED' || 'FAILED' || 'LOADING'
          data: null,
        };
      }
    } catch (error) {
      return {
        status: API_STATUS.ERROR, // 'IDLE' || 'SUCCEEDED' || 'FAILED' || 'LOADING'
        data: null,
      };
    }
  },

  /**
   * Function to get a movie youtube trailer video key.
   * @async
   * @function getVideoKey
   * @returns {Promise<object>} An object with status and data properties.
   * @throws {Error} If an error occurs during the API request.
   */
  getVideoKey: async (movieId) => {
    try {
      const response = await api.get(`/movie/${movieId}/videos`);

      const { status } = response;
      const { results } = response.data;
      const { key } = results[0];

      if (status === 200) {
        return {
          status: API_STATUS.SUCCEEDED, // 'IDLE' || 'SUCCEEDED' || 'FAILED' || 'LOADING'
          data: key,
        };
      } else {
        return {
          status: API_STATUS.ERROR, // 'IDLE' || 'SUCCEEDED' || 'FAILED' || 'LOADING'
          data: null,
        };
      }
    } catch (error) {
      return {
        status: API_STATUS.ERROR, // 'IDLE' || 'SUCCEEDED' || 'FAILED' || 'LOADING'
        data: null,
      };
    }
  },
};

export default API;

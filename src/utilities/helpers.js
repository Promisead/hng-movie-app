// Helper Functions

import { genres } from './variables';

/**
 * Retrieves genre names by their IDs and joins them with commas.
 *
 * @param {number[]} genreIds - An array of genre IDs to look up.
 * @returns {string} A string containing genre names separated by commas.
 */
export const getGenreByIds = (genreIds) => {
  const genreNames = genreIds.map((genreId) => {
    const genre = genres.find((item) => item.id === genreId);
    return genre ? genre.name : 'Unknown';
  });
  return genreNames.join(', ');
};

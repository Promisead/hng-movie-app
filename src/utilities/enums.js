// Application Enums

/**
 * Enum representing the status of an API request.
 * @readonly
 * @enum {string}
 * @property {string} IDLE - The API request is in an idle state.
 * @property {string} LOADING - The API request is currently loading.
 * @property {string} SUCCEEDED - The API request has succeeded.
 * @property {string} FAILED - The API request encountered an error.
 */
export const API_STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
};

/**
 * The debounce time (in milliseconds) used for search operations.
 * @type {number}
 * @constant
 */
export const SEARCH_DEBOUNCE = 300;

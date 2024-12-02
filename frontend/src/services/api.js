import axios from "axios";

/**
 * Base URL for the sentiment analysis backend API
 * During development, the API runs on localhost port 5000
 * @constant {string}
 */
const SENTIMENT_API_BASE_URL = "http://127.0.0.1:5000";

/**
 * Sends a text to the backend for sentiment analysis
 * @param {string} text - The text content to analyze
 * @returns {Promise<Object>} Response containing sentiment analysis results
 *    - score: number (sentiment score)
 *    - label: string (positive/negative/neutral)
 * @throws {Error} If the API request fails
 */
export const analyzeSentiment = (text) => {
    // Make POST request to the sentiment analysis endpoint
    return axios.post(`${SENTIMENT_API_BASE_URL}/analyze`, { text });
};
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  timeout: 5000,
});

export const apiRequest = async (url, method = 'GET', params = {}, data = {}) => {
  try {
    const response = await apiClient({
      url,
      method,
      params,
      data,
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    throw error; // Throw the error so the calling function can handle it if needed
  }
};

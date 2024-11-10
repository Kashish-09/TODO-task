import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:5000/api/todos';

export const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    // Check if the error is an AxiosError instance
    if (axios.isAxiosError(error)) {
      // Safely access error response data
      const errorMessage = error.response?.data?.error || 'Error fetching todos';
      console.log(error.response?.data);  // Log to inspect the structure (if needed)
      throw new Error(errorMessage);
    }
    // Fallback for non-Axios errors
    throw new Error('Unknown error occurred');
  }
};

export const createTodo = async (title: string, description: string) => {
  try {
    const response = await axios.post(API_URL, { title, description });
    return response.data;
  } catch (error) {
    // Check if the error is an AxiosError instance
    if (axios.isAxiosError(error)) {
      // Safely access error response data
      const errorMessage = error.response?.data?.error || 'Error creating todo';
      console.log(error.response?.data);  // Log to inspect the structure (if needed)
      throw new Error(errorMessage);
    }
    // Fallback for non-Axios errors
    throw new Error('Unknown error occurred');
  }
};

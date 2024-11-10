import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    // Type the error as AxiosError to access the response safely
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.error || 'Login failed');
    }
    // Fallback for non-Axios errors
    throw new Error('Unknown error occurred during login');
  }
};

export const signup = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { username, password });
    return response.data;
  } catch (error) {
    // Type the error as AxiosError to access the response safely
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.error || 'Signup failed');
    }
    // Fallback for non-Axios errors
    throw new Error('Unknown error occurred during signup');
  }
};

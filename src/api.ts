// src/api.ts
import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const signUp = async (username: string, password: string) => {
  return axios.post(`${API_URL}/auth/signup`, { username, password });
};

export const login = async (username: string, password: string) => {
  return axios.post(`${API_URL}/auth/login`, { username, password });
};

export const fetchTodos = async (token: string) => {
  return axios.get(`${API_URL}/todos`, { headers: { Authorization: `Bearer ${token}` } });
};

// Add more functions for todo creation, update, and delete as needed

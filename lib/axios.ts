// lib/axios.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api',  // Your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;

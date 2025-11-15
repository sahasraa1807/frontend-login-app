import axios from "axios";

const API = axios.create({
  baseURL: 'https://frontend-login-app-new-2.onrender.com/api', // <-- Add /api here
});

export default API;
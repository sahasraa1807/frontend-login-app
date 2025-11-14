import axios from "axios";

const API = axios.create({
  baseURL: "https://frontend-login-app.onrender.com/api",
});

export default API;

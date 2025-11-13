// frontend/src/utils/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ Must include http://
});

export default API;

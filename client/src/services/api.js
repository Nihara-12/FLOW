import axios from "axios";

const api = axios.create({
  baseURL: "https://flow-api-r8m6.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
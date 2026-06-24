import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // baseURL: "http://127.0.0.1:5001/api",
  withCredentials: true,
});
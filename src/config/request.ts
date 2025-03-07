import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3000/api/v1"
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token)
      config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);


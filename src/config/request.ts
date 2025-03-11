import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3000/api/v1"
});

request.interceptors.response.use(
  (response) => response,
  (error) => {
      if (error.response.status === 401) {
          // Masalan, token eskirgan bo'lsa
          localStorage.removeItem("token");
          window.location.href = "/login"; // Login sahifasiga yo'naltirish
      }
      return Promise.reject(error);
  }
);

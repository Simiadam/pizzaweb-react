import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("Hiba történt:", error.response.data);
    } else if (error.request) {
      console.error("Nincs válasz a szervertől:", error.request);
    } else {
      console.error("Hiba:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;

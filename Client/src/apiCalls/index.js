import axios from "axios";

// Create a function to generate the Axios instance with dynamic headers
export const createAxiosInstance = () => {
  const instance = axios.create({
    headers: {
      credentials: 'include',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  // Interceptor to update the Authorization header for each request
  instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  });

  return instance;
};

// Usage in your component or module
const axiosInstance = createAxiosInstance();

export default axiosInstance;

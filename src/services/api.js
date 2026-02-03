/**
 * API Service
 * Centralized API client configuration and utilities
 */

import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "/api";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor - handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 errors - token expired or invalid
    if (error.response && error.response.status === 401) {
      // Clear invalid token
      localStorage.removeItem("token");

      // Only redirect if not already on login page
      if (!window.location.pathname.includes("/login")) {
        window.location.href = "/login";
      }
    }

    // Extract error message from response
    const errorMessage =
      error.response?.data?.error ||
      error.response?.data?.message ||
      "An unexpected error occurred";

    return Promise.reject(new Error(errorMessage));
  },
);

// API methods
const apiService = {
  // GET request
  get: (url, params = {}) => api.get(url, { params }),

  // POST request
  post: (url, data) => api.post(url, data),

  // PUT request
  put: (url, data) => api.put(url, data),

  // PATCH request
  patch: (url, data) => api.patch(url, data),

  // DELETE request
  delete: (url) => api.delete(url),

  // Get raw file blob (for downloads)
  getBlob: (url, params = {}) =>
    api.get(url, {
      params,
      responseType: "blob",
    }),

  // Post form data (for file uploads)
  postForm: (url, formData) =>
    api.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
};

export default apiService;

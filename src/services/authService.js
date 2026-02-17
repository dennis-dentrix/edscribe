/**
 * Authentication Service
 * Handles all authentication-related API calls
 */

import api from "./api";

const AUTH_ENDPOINTS = {
  register: "/auth/register",
  login: "/auth/login",
  logout: "/auth/logout",
  getCurrentUser: "/auth/me",
  updateProfile: "/auth/profile",
  refreshToken: "/auth/refresh-token",
};

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @returns {Promise<Object>} - Response with user and token
 */
export const register = async (userData) => {
  const response = await api.post(AUTH_ENDPOINTS.register, userData);
  console.log(userData);
  return response.data;
};

/**
 * Login with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} - Response with user and token
 */
export const login = async (email, password) => {
  const response = await api.post(AUTH_ENDPOINTS.login, { email, password });
  // console.log(response);
  return response.data;
};

/**
 * Logout user
 * @returns {Promise<void>}
 */
export const logout = async () => {
  await api.post(AUTH_ENDPOINTS.logout);
};

/**
 * Get current authenticated user
 * @returns {Promise<Object>} - Current user data
 */
export const getCurrentUser = async () => {
  const response = await api.get(AUTH_ENDPOINTS.getCurrentUser);
  return response.data;
};

/**
 * Update user profile
 * @param {Object} userData - Updated user data
 * @returns {Promise<Object>} - Updated user data
 */
export const updateProfile = async (userData) => {
  const response = await api.put(AUTH_ENDPOINTS.updateProfile, userData);
  return response.data;
};

/**
 * Refresh authentication token
 * @returns {Promise<Object>} - New token
 */
export const refreshToken = async () => {
  const response = await api.post(AUTH_ENDPOINTS.refreshToken);
  return response.data;
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
  updateProfile,
  refreshToken,
};

export default authService;

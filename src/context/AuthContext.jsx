/**
 * Authentication Context
 * Manages user authentication state across the application
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import authService from '../services/authService';

const AuthContext = createContext(null);

const extractAuthPayload = (responseData) => {
  const payload = responseData?.data ?? responseData ?? {};
  const token = payload?.token ?? responseData?.token ?? null;
  const user = payload?.user ?? responseData?.user ?? null;

  return { token, user };
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is authenticated on mount
  useEffect(() => {
    checkAuth();
  }, []);

  // Check authentication status
  const checkAuth = useCallback(async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const userData = await authService.getCurrentUser();
      setUser(userData);
    } catch (err) {
      console.error('Auth check failed:', err);
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // Login with email/password
  const login = async (email, password) => {
    try {
      setError(null);
      setLoading(true);

      const data = await authService.login(email, password);
      const { token, user: loggedInUser } = extractAuthPayload(data);

      if (!token || !loggedInUser) {
        throw new Error('Invalid login response from server.');
      }

      localStorage.setItem('token', token);
      setUser(loggedInUser);

      return loggedInUser;
    } catch (err) {
      const message = err.message || 'Login failed. Please check your credentials.';
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  // Register new user
  const register = async (userData) => {
    try {
      setError(null);
      setLoading(true);

      const data = await authService.register(userData);
      const { token, user: registeredUser } = extractAuthPayload(data);

      if (!token || !registeredUser) {
        throw new Error('Invalid registration response from server.');
      }

      localStorage.setItem('token', token);
      setUser(registeredUser);

      return registeredUser;
    } catch (err) {
      const message = err.message || 'Registration failed. Please try again.';
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  // Login with Google OAuth
  const loginWithGoogle = async () => {
    try {
      setError(null);

      // Redirect to Google OAuth endpoint
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
      const redirectUri = `${window.location.origin}/auth/google/callback`;
      const scope = 'openid email profile';

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${clientId}&` +
        `redirect_uri=${encodeURIComponent(redirectUri)}&` +
        `response_type=code&` +
        `scope=${encodeURIComponent(scope)}&` +
        `access_type=offline&` +
        `prompt=consent`;

      window.location.href = authUrl;
    } catch (err) {
      const message = err.message || 'Google login failed.';
      setError(message);
      throw new Error(message);
    }
  };

  // Logout user
  const logout = useCallback(async () => {
    try {
      setLoading(true);
      await authService.logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      localStorage.removeItem('token');
      setUser(null);
      setLoading(false);
    }
  }, []);

  // Update user profile
  const updateProfile = async (userData) => {
    try {
      setError(null);
      setLoading(true);

      const updatedUser = await authService.updateProfile(userData);
      setUser(updatedUser);

      return updatedUser;
    } catch (err) {
      const message = err.message || 'Profile update failed.';
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  // Clear error
  const clearError = () => {
    setError(null);
  };

  // Value provided to consumers
  const value = {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    login,
    register,
    loginWithGoogle,
    logout,
    updateProfile,
    clearError,
    checkAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

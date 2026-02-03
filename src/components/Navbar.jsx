/**
 * Navbar Component
 * Main navigation bar with branding and menu
 */

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize theme from saved preference or system
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("theme-dark", savedTheme === "dark");
      return;
    }

    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    const initialTheme = prefersDark ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("theme-dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("theme-dark", nextTheme === "dark");
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Check if a route is active
  const isActive = (path) => {
    return location.pathname === path
      ? 'nav-link active'
      : 'nav-link';
  };

  return (
    <nav className="navbar bg-white shadow-sm sticky top-0 z-[1020]">
      <div className="container flex items-center justify-between py-4">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <BookOpen className="w-10 h-10 text-primary-700" aria-hidden="true" />
          <span className="font-serif text-xl font-bold text-neutral-900">AcademicPro</span>
        </Link>

        {/* Navigation Links */}
        <div className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/')}>
            Home
          </Link>
          <Link to="/#services" className="nav-link">
            Services
          </Link>
          <Link to="/#how-it-works" className="nav-link">
            How It Works
          </Link>
          <Link to="/#pricing" className="nav-link">
            Pricing
          </Link>
        </div>

        {/* Auth Actions */}
        <div className="navbar-actions flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn btn-secondary btn-sm"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className={isActive('/dashboard')}>
                Dashboard
              </Link>
              <Link to="/orders/new" className="btn btn-primary btn-sm">
                New Order
              </Link>
              <span style={{ marginLeft: '8px' }} className="text-neutral-500">
                {user?.name?.split(' ')[0] || 'User'}
              </span>
              <button onClick={handleLogout} className="btn btn-secondary btn-sm ml-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary btn-sm">
                Log In
              </Link>
              <Link to="/signup" className="btn btn-primary btn-sm">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          className="btn btn-secondary btn-sm theme-toggle-mobile"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggle hidden p-2 text-neutral-600"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

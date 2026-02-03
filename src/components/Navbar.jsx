/**
 * Navbar Component
 * Main navigation bar with branding and menu
 */

import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-primary-700">
            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
          </svg>
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
              <button
                onClick={handleLogout}
                className="btn btn-secondary btn-sm ml-2"
              >
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

        {/* Mobile Toggle */}
        <button
          className="navbar-toggle hidden p-2 text-neutral-600"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 12h18M3 6h18M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;


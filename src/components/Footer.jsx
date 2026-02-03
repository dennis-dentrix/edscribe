/**
 * Footer Component
 * Site footer with links and branding
 */

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-neutral-900 text-neutral-300 py-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-primary-400">
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
              <h3 className="text-xl font-bold text-white font-serif">AcademicPro</h3>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              Professional academic services for students. Quality writing,
              editing, and tutoring to help you succeed in your studies.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg mb-4">Services</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/#services" className="text-neutral-400 hover:text-white transition-colors duration-150">Academic Writing</Link></li>
              <li><Link to="/#services" className="text-neutral-400 hover:text-white transition-colors duration-150">Research Papers</Link></li>
              <li><Link to="/#services" className="text-neutral-400 hover:text-white transition-colors duration-150">Editing & Proofreading</Link></li>
              <li><Link to="/#services" className="text-neutral-400 hover:text-white transition-colors duration-150">Tutoring</Link></li>
              <li><Link to="/#services" className="text-neutral-400 hover:text-white transition-colors duration-150">Thesis Writing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-lg mb-4">Company</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/#about" className="text-neutral-400 hover:text-white transition-colors duration-150">About Us</Link></li>
              <li><Link to="/#how-it-works" className="text-neutral-400 hover:text-white transition-colors duration-150">How It Works</Link></li>
              <li><Link to="/#pricing" className="text-neutral-400 hover:text-white transition-colors duration-150">Pricing</Link></li>
              <li><Link to="/#faq" className="text-neutral-400 hover:text-white transition-colors duration-150">FAQ</Link></li>
              <li><Link to="/#contact" className="text-neutral-400 hover:text-white transition-colors duration-150">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-sm">&copy; {currentYear} AcademicPro. All rights reserved.</p>
          <p className="text-neutral-500 text-sm mt-2">
            AcademicPro is a professional academic services platform.
            All work is original and custom-written.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


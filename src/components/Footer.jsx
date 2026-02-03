/**
 * Footer Component
 * Site footer with links and branding
 */

import React from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-neutral-900 text-neutral-300 py-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-12 h-12 text-primary-400" aria-hidden="true" />
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

/**
 * Landing Page
 * Main entry point showcasing services and value proposition
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LandingPage() {
  const { isAuthenticated } = useAuth();

  // Form state for pricing calculator
  const [calculatorData, setCalculatorData] = useState({
    educationLevel: 'undergraduate',
    taskType: 'essay',
    deadline: '7',
    complexity: 'standard',
  });

  // Calculate estimated price
  const calculatePrice = () => {
    const basePrices = {
      high_school: 10,
      undergraduate: 15,
      graduate: 20,
      phd: 30,
    };

    const taskMultipliers = {
      essay: 1,
      research_paper: 1.5,
      thesis: 3,
      dissertation: 5,
      technical: 1.3,
      report: 1.1,
      editing: 0.5,
      proofreading: 0.3,
    };

    const deadlineMultipliers = {
      '24': 2.0,
      '48': 1.75,
      '72': 1.5,
      '168': 1.25,
      '336': 1.0,
      '720': 0.9,
    };

    const complexityMultipliers = {
      standard: 1,
      advanced: 1.3,
      expert: 1.5,
    };

    const base = basePrices[calculatorData.educationLevel] || 15;
    const taskMult = taskMultipliers[calculatorData.taskType] || 1;
    const deadlineMult = deadlineMultipliers[calculatorData.deadline] || 1;
    const complexityMult = complexityMultipliers[calculatorData.complexity] || 1;

    return Math.round(base * taskMult * deadlineMult * complexityMult * 250);
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCalculatorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-br from-primary-950 to-primary-800 text-white py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-content">
            <h1 className="text-5xl font-bold mb-6 leading-tight text-white">Expert Academic Writing Services</h1>
            <p className="text-lg text-neutral-200 mb-8">
              Get professional academic assistance from experienced writers.
              Essays, research papers, theses, and more — delivered on time,
              every time.
            </p>
            <div className="flex flex-wrap gap-4">
              {isAuthenticated ? (
                <Link to="/orders/new" className="btn btn-primary btn-lg">
                  Place an Order
                </Link>
              ) : (
                <>
                  <Link to="/signup" className="btn btn-primary btn-lg">
                    Get Started Free
                  </Link>
                  <Link to="/login" className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary-800">
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="hero-image flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full max-w-[400px] text-primary-300">
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Academic Services</h2>
            <p>Comprehensive academic support for every type of assignment</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card service-card p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-250">
              <div className="service-icon w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>
              <h3 className="mb-2">Essay Writing</h3>
              <p className="text-neutral-600 text-sm">Persuasive, analytical, and argumentative essays crafted to your specifications.</p>
            </div>
            <div className="card service-card p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-250">
              <div className="service-icon w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h3 className="mb-2">Research Papers</h3>
              <p className="text-neutral-600 text-sm">In-depth research with proper citations and academic formatting.</p>
            </div>
            <div className="card service-card p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-250">
              <div className="service-icon w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3 className="mb-2">Thesis & Dissertation</h3>
              <p className="text-neutral-600 text-sm">Comprehensive support for your most important academic work.</p>
            </div>
            <div className="card service-card p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-250">
              <div className="service-icon w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="mb-2">Editing & Proofreading</h3>
              <p className="text-neutral-600 text-sm">Polish your work for clarity, grammar, and academic standards.</p>
            </div>
            <div className="card service-card p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-250">
              <div className="service-icon w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="mb-2">Tutoring</h3>
              <p className="text-neutral-600 text-sm">One-on-one guidance to help you understand complex subjects.</p>
            </div>
            <div className="card service-card p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-250">
              <div className="service-icon w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
              <h3 className="mb-2">Technical Writing</h3>
              <p className="text-neutral-600 text-sm">Documentation, reports, and technical content with precision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section bg-neutral-50">
        <div className="container">
          <div className="section-title">
            <h2>How It Works</h2>
            <p>Simple, straightforward process to get your academic work done</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="step-card text-center relative">
              <div className="step-number w-12 h-12 mx-auto mb-4 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="mb-2">Submit Your Order</h3>
              <p className="text-neutral-600 text-sm">Fill out our simple form with your requirements, deadline, and specifications.</p>
            </div>
            <div className="step-card text-center relative">
              <div className="step-number w-12 h-12 mx-auto mb-4 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="mb-2">Get a Price Quote</h3>
              <p className="text-neutral-600 text-sm">Receive an instant price estimate based on your specific requirements.</p>
            </div>
            <div className="step-card text-center relative">
              <div className="step-number w-12 h-12 mx-auto mb-4 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="mb-2">Make Payment</h3>
              <p className="text-neutral-600 text-sm">Secure payment processing. Your payment is held until you're satisfied.</p>
            </div>
            <div className="step-card text-center relative">
              <div className="step-number w-12 h-12 mx-auto mb-4 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
              <h3 className="mb-2">Receive Your Work</h3>
              <p className="text-neutral-600 text-sm">Get your completed work before your deadline with free revisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Transparent Pricing</h2>
            <p>Calculate your estimated price instantly</p>
          </div>
          <div className="pricing-calculator bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="form-group">
                <label className="form-label">Education Level</label>
                <select
                  name="educationLevel"
                  className="form-input form-select"
                  value={calculatorData.educationLevel}
                  onChange={handleChange}
                >
                  <option value="high_school">High School</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Task Type</label>
                <select
                  name="taskType"
                  className="form-input form-select"
                  value={calculatorData.taskType}
                  onChange={handleChange}
                >
                  <option value="essay">Essay</option>
                  <option value="research_paper">Research Paper</option>
                  <option value="thesis">Thesis</option>
                  <option value="dissertation">Dissertation</option>
                  <option value="technical">Technical Writing</option>
                  <option value="report">Report</option>
                  <option value="editing">Editing</option>
                  <option value="proofreading">Proofreading</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Deadline</label>
                <select
                  name="deadline"
                  className="form-input form-select"
                  value={calculatorData.deadline}
                  onChange={handleChange}
                >
                  <option value="24">24 hours</option>
                  <option value="48">48 hours</option>
                  <option value="72">3 days</option>
                  <option value="168">7 days</option>
                  <option value="336">14 days</option>
                  <option value="720">30 days</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Complexity</label>
                <select
                  name="complexity"
                  className="form-input form-select"
                  value={calculatorData.complexity}
                  onChange={handleChange}
                >
                  <option value="standard">Standard</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
            </div>
            <div className="pricing-result text-center p-8 bg-primary-50 rounded-xl">
              <p className="price-label text-neutral-600 mb-2">Estimated Price (per 250 words)</p>
              <p className="price-amount text-4xl font-bold text-primary-700 mb-4">${calculatePrice()}</p>
              {isAuthenticated ? (
                <Link to="/orders/new" className="btn btn-primary btn-lg">
                  Place Order Now
                </Link>
              ) : (
                <Link to="/signup" className="btn btn-primary btn-lg">
                  Create Account to Order
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-800 to-primary-950">
        <div className="container text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Ready to Excel Academically?</h2>
          <p className="text-neutral-200 text-lg mb-6 max-w-[600px] mx-auto">
            Join thousands of students who have achieved academic success with our professional services.
          </p>
          {isAuthenticated ? (
            <Link to="/orders/new" className="btn btn-lg bg-white text-primary-800 hover:bg-neutral-100">
              Start Your Order
            </Link>
          ) : (
            <Link to="/signup" className="btn btn-lg bg-white text-primary-800 hover:bg-neutral-100">
              Get Started Free
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;


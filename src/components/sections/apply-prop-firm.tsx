"use client";

import React, { useState } from 'react';

export default function ApplyPropFirm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    tradingStyle: '',
    capitalRequirement: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative dotted-background section-padding-y bg-white">
      <div className="container">
        <h2 className="text-center font-bold text-accent mb-4 text-[36px] leading-[1.3]">
          Apply for Prop Firm
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Take the next step in your trading career. Apply now to get funded and trade with professional capital.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              {/* Trading Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                  Trading Experience <span className="text-red-500">*</span>
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-1 year)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3-5 years)</option>
                  <option value="expert">Expert (5+ years)</option>
                </select>
              </div>

              {/* Trading Style and Capital */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="tradingStyle" className="block text-sm font-semibold text-gray-700 mb-2">
                    Trading Style <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="tradingStyle"
                    name="tradingStyle"
                    value={formData.tradingStyle}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select trading style</option>
                    <option value="day-trading">Day Trading</option>
                    <option value="swing-trading">Swing Trading</option>
                    <option value="scalping">Scalping</option>
                    <option value="position-trading">Position Trading</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="capitalRequirement" className="block text-sm font-semibold text-gray-700 mb-2">
                    Capital Requirement <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="capitalRequirement"
                    name="capitalRequirement"
                    value={formData.capitalRequirement}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select capital range</option>
                    <option value="10k-25k">₹10,000 - ₹25,000</option>
                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                    <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                    <option value="100k+">₹1,00,000+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your trading goals and why you want to join a prop firm..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-lg uppercase tracking-wider"
              >
                Submit Application
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Our team will review your application and get back to you within 2-3 business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client" 

import React, { useState } from 'react';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('order');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const resetForms = () => {
    setShowSuccess(false);
    setActiveTab('order');
    // Would reset form fields in a real implementation
  };

  return (
    <div className="bg-white min-h-screen pt-28 md:pt-24">
      {/* Decorative elements */}
      <div className="fixed top-20 left-10 w-36 h-36 bg-purple-50 rounded-full opacity-50 -z-10"></div>
      <div className="fixed bottom-20 right-10 w-36 h-36 bg-purple-50 rounded-full opacity-50 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-serif text-pink-600 mb-4">Contact Dee&apos;s Cake</h1>
          <p className="text-lg text-gray-600 italic">We&apos;d love to create something sweet for your special occasion</p>
        </header>

        {!showSuccess ? (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Info Section */}
            <div className="bg-pink-50 rounded-lg shadow-sm p-6 md:w-1/3">
              <h2 className="text-2xl font-serif text-pink-700 mb-6">How to Reach Us</h2>
              
              <div className="mb-6">
                <h3 className="text-lg text-pink-600 mb-2">Our Location</h3>
                <p className="text-gray-600">123 Pastry Lane</p>
                <p className="text-gray-600">Sweet Valley, CA 90210</p>
              </div>
              
              <div className="h-px bg-pink-100 my-6"></div>
              
              <div className="mb-6">
                <h3 className="text-lg text-pink-600 mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                <p className="text-gray-600">Saturday: 10am - 4pm</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
              
              <div className="h-px bg-pink-100 my-6"></div>
              
              <div>
                <h3 className="text-lg text-pink-600 mb-2">Get in Touch</h3>
                <p className="text-gray-600">Phone: (555) 123-4567</p>
                <p className="text-gray-600">Email: hello@deescake.com</p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-pink-100 md:w-2/3">
              <h2 className="text-2xl font-serif text-pink-700 mb-6">How Can We Help?</h2>
              
              {/* Tabs */}
              <div className="flex flex-wrap border-b border-pink-100 mb-6">
                <button 
                  onClick={() => setActiveTab('order')}
                  className={`px-4 py-2 transition-colors ${
                    activeTab === 'order' 
                      ? 'text-pink-600 border-b-2 border-pink-600' 
                      : 'text-gray-600 hover:text-pink-700'
                  }`}
                >
                  Place an Order
                </button>
                <button 
                  onClick={() => setActiveTab('call')}
                  className={`px-4 py-2 transition-colors ${
                    activeTab === 'call' 
                      ? 'text-pink-600 border-b-2 border-pink-600' 
                      : 'text-gray-600 hover:text-pink-700'
                  }`}
                >
                  Schedule a Call
                </button>
                <button 
                  onClick={() => setActiveTab('tasting')}
                  className={`px-4 py-2 transition-colors ${
                    activeTab === 'tasting' 
                      ? 'text-pink-600 border-b-2 border-pink-600' 
                      : 'text-gray-600 hover:text-pink-700'
                  }`}
                >
                  Book a Tasting
                </button>
                <button 
                  onClick={() => setActiveTab('inquiry')}
                  className={`px-4 py-2 transition-colors ${
                    activeTab === 'inquiry' 
                      ? 'text-pink-600 border-b-2 border-pink-600' 
                      : 'text-gray-600 hover:text-pink-700'
                  }`}
                >
                  General Inquiry
                </button>
              </div>
              
              {/* Order Form */}
              {activeTab === 'order' && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="order-name" className="block text-gray-600 mb-2 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      id="order-name" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="order-email" className="block text-gray-600 mb-2 font-medium">Email Address</label>
                    <input 
                      type="email" 
                      id="order-email" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="order-phone" className="block text-gray-600 mb-2 font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      id="order-phone" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="order-date" className="block text-gray-600 mb-2 font-medium">Event Date</label>
                    <input 
                      type="date" 
                      id="order-date" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="order-type" className="block text-gray-600 mb-2 font-medium">Cake Type</label>
                    <select 
                      id="order-type" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    >
                      <option value="">Select a cake type</option>
                      <option value="wedding">Wedding Cake</option>
                      <option value="birthday">Birthday Cake</option>
                      <option value="anniversary">Anniversary Cake</option>
                      <option value="custom">Custom Design</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="order-details" className="block text-gray-600 mb-2 font-medium">Order Details</label>
                    <textarea 
                      id="order-details" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100 min-h-36"
                      placeholder="Please provide details about your desired cake, number of servings, flavor preferences, and any design ideas."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded font-medium transition-colors"
                  >
                    Submit Order Request
                  </button>
                </form>
              )}
              
              {/* Schedule Call Form */}
              {activeTab === 'call' && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="call-name" className="block text-gray-600 mb-2 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      id="call-name" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="call-email" className="block text-gray-600 mb-2 font-medium">Email Address</label>
                    <input 
                      type="email" 
                      id="call-email" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="call-phone" className="block text-gray-600 mb-2 font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      id="call-phone" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="call-date" className="block text-gray-600 mb-2 font-medium">Preferred Date</label>
                    <input 
                      type="date" 
                      id="call-date" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="call-time" className="block text-gray-600 mb-2 font-medium">Preferred Time</label>
                    <select 
                      id="call-time" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (1pm - 4pm)</option>
                      <option value="evening">Evening (4pm - 6pm)</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="call-topic" className="block text-gray-600 mb-2 font-medium">Topic of Discussion</label>
                    <textarea 
                      id="call-topic" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100 min-h-36"
                      placeholder="Please let us know what you'd like to discuss during our call."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded font-medium transition-colors"
                  >
                    Schedule a Call
                  </button>
                </form>
              )}
              
              {/* Tasting Form */}
              {activeTab === 'tasting' && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="tasting-name" className="block text-gray-600 mb-2 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      id="tasting-name" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="tasting-email" className="block text-gray-600 mb-2 font-medium">Email Address</label>
                    <input 
                      type="email" 
                      id="tasting-email" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="tasting-phone" className="block text-gray-600 mb-2 font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      id="tasting-phone" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="tasting-date" className="block text-gray-600 mb-2 font-medium">Preferred Date</label>
                    <input 
                      type="date" 
                      id="tasting-date" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="tasting-time" className="block text-gray-600 mb-2 font-medium">Preferred Time</label>
                    <select 
                      id="tasting-time" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (10am - 12pm)</option>
                      <option value="afternoon">Afternoon (1pm - 3pm)</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="tasting-event" className="block text-gray-600 mb-2 font-medium">Event Type</label>
                    <select 
                      id="tasting-event" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    >
                      <option value="">Select your event</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="tasting-guests" className="block text-gray-600 mb-2 font-medium">Number of Attendees for Tasting</label>
                    <input 
                      type="number" 
                      id="tasting-guests" 
                      min="1" 
                      max="4" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                    <p className="text-sm text-gray-600 mt-1">Maximum 4 guests per tasting session</p>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="tasting-notes" className="block text-gray-600 mb-2 font-medium">Special Requests or Dietary Restrictions</label>
                    <textarea 
                      id="tasting-notes" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100 min-h-36"
                      placeholder="Please let us know about any flavor preferences, allergies, or dietary restrictions."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded font-medium transition-colors"
                  >
                    Book a Tasting
                  </button>
                </form>
              )}
              
              {/* Inquiry Form */}
              {activeTab === 'inquiry' && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="inquiry-name" className="block text-gray-600 mb-2 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      id="inquiry-name" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="inquiry-email" className="block text-gray-600 mb-2 font-medium">Email Address</label>
                    <input 
                      type="email" 
                      id="inquiry-email" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="inquiry-subject" className="block text-gray-600 mb-2 font-medium">Subject</label>
                    <input 
                      type="text" 
                      id="inquiry-subject" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="inquiry-message" className="block text-gray-600 mb-2 font-medium">Your Message</label>
                    <textarea 
                      id="inquiry-message" 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100 min-h-36"
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded font-medium transition-colors"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
              
              <div className="text-center text-gray-600 mt-8 text-sm">
                <p>We typically respond to all inquiries within 24-48 business hours.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-purple-50 p-8 rounded-lg text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif text-pink-700 mb-4">Thank You for Reaching Out!</h3>
            <p className="text-gray-600">We&apos;ve received your submission and will be in touch with you shortly.</p>
            <button 
              onClick={resetForms}
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded font-medium transition-colors mt-6"
            >
              Submit Another Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
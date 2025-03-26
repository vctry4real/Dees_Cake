import React from 'react';
import { ArrowRight, Phone, Calendar, Mail } from 'lucide-react';

const AboutCTA = () => {
  return (
    <div className="w-full bg-gradient-to-br from-purple-50 to-pink-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Main CTA */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Ready to Create Your Perfect Cake?
            </h2>
            <p className="text-lg text-gray-600">
              Let&apos;s bring your vision to life. Schedule a free consultation and tasting session with our expert cake designers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition-colors">
                View Our Gallery
              </button>
            </div>
          </div>

          {/* Right Column - Contact Cards */}
          <div className="grid gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <Phone className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Talk to Us</h3>
                  <p className="text-gray-600">Schedule a quick call with our team</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Book a Tasting</h3>
                  <p className="text-gray-600">Try our flavors in person</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <Mail className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Send an Inquiry</h3>
                  <p className="text-gray-600">Get a custom quote for your event</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCTA;
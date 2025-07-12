import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>info@royaltouchcatering.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>123 Main Street, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="hover:text-gray-300 transition-colors">Services</a>
              </li>
              <li>
                <a href="/menu" className="hover:text-gray-300 transition-colors">Menu</a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-gray-300 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-full bg-gray-800 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-r hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Royal Touch Catering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

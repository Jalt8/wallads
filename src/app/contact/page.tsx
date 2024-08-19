'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name*"
          required
          className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
        />
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Name of Company*"
          required
          className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address*"
          required
          className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
        />
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number*"
          required
          className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
        />
      </div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message*"
        required
        rows={4}
        className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-auburn text-white py-3 px-4 rounded-md hover:bg-redwood transition-colors duration-300 flex items-center justify-center"
      >
        Submit
        <Send className="ml-2 h-5 w-5" />
      </button>
    </form>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dun to-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center text-auburn mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.p 
          className="text-xl text-center text-rawUmber mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get in touch and let's create impactful wall advertising together.
        </motion.p>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              className="p-6 sm:p-10 bg-gradient-to-br from-auburn to-redwood text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold mb-6">Let's Connect</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6" />
                  <span>contact@walladcompany.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6" />
                  <span>123 Ad Street, Marketing City, AD 12345</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 sm:p-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-semibold text-auburn mb-6">How Can We Help?</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
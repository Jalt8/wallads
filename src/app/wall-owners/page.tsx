'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, MapPin, Info, Send } from 'lucide-react';
import { Tooltip } from '@/components/common/Tooltip';

const WallOwnersPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    contactNumber: '',
    email: '',
    wallLength: '',
    additionalNotes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dun to-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center text-auburn mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Turn Your Wall into a Revenue Stream
        </motion.h1>
        <motion.p 
          className="text-xl text-center text-rawUmber mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join our network of homeowners and turn your exterior wall into a valuable advertising space.
        </motion.p>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              className="p-6 sm:p-10 bg-gradient-to-br from-auburn to-redwood text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
              <ol className="space-y-4 list-decimal list-inside">
                <li>Fill out the form with your wall&apos;s details.</li>
                <li>Our team will review your submission and assess the potential of your wall.</li>
                <li>If approved, we&apos;ll reach out to discuss terms and schedule an on-site evaluation.</li>
                <li>Once an agreement is in place, we&apos;ll handle all aspects of ad design and installation.</li>
                <li>You start earning passive income from your wall space!</li>
              </ol>
              <p className="mt-6 font-semibold">
                Partner with WALLADS and maximize the value of your property today!
              </p>
            </motion.div>

            <motion.div
              className="p-6 sm:p-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-semibold text-auburn mb-6">Submit Your Wall</h2>
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
                  <div className="relative">
                    <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Address*"
                      required
                      className="w-full p-2 pl-8 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Contact Number*"
                    required
                    className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address*"
                    required
                    className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
                  />
                </div>
                <div className="relative">
                  <input
                    type="number"
                    name="wallLength"
                    value={formData.wallLength}
                    onChange={handleChange}
                    placeholder="Length of Wall (in meters)*"
                    required
                    className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
                  />
                  <Tooltip content="Measure the length of your wall from end to end">
                    <Info size={18} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-help" />
                  </Tooltip>
                </div>
                <div className="border-2 border-brownSugar border-dashed rounded-md p-4">
                  <label className="flex flex-col items-center cursor-pointer">
                    <Upload className="h-12 w-12 text-gray-400" />
                    <span className="mt-2 text-sm text-gray-600">Upload a Photo of the Wall</span>
                    <input type="file" className="hidden" />
                  </label>
                </div>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  placeholder="Additional Notes"
                  rows={4}
                  className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-auburn text-white py-3 px-4 rounded-md hover:bg-redwood transition-colors duration-300 flex items-center justify-center"
                >
                  Submit My Wall
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallOwnersPage;
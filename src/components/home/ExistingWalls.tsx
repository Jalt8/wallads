'use client';

import React from 'react';
import Image from 'next/image';

const walls = [
  {
    name: "Solomon Mahlangu Drive",
    length: "121 meters",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7280847314885!2d28.329311815011867!3d-25.045343983958783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956299a383aaab%3A0x4f89f6747193a466!2sSolomon%20Mahlangu%20Dr%2C%20Pretoria%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1629308491234!5m2!1sen!2sus"
  },
  {
    name: "De Villa Bois Drive (Wingate Golf Club)",
    length: "235 meters",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.0123456789!2d28.123456789!3d-25.987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956299a383aaab%3A0x4f89f6747193a466!2sWingate%20Park%20Country%20Club!5e0!3m2!1sen!2sus!4v1629308491234!5m2!1sen!2sus"
  },
  {
    name: "LYNNWOOD NEW MALL (PIVOTS PLACE)",
    length: "",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.0123456789!2d28.234567890!3d-25.876543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956299a383aaab%3A0x4f89f6747193a466!2sLynnwood%2C%20Pretoria%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1629308491234!5m2!1sen!2sus"
  }
];

const ExistingWalls = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          OUR EXISTING <span className="text-red-600 border-b-4 border-red-600">WALLS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {walls.map((wall, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-48">
                <iframe
                  src={wall.mapUrl}
                  width="100%"
                  height="100%"
                  style={{border:0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-red-600 mb-2">{wall.name}</h3>
                {wall.length && <p className="text-gray-600">({wall.length})</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExistingWalls;
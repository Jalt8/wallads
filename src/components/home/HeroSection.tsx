'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlayCircle, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/ad-formats/Fanta-LINK-I-784x569.jpg',
    '/images/ad-formats/F-G-Scottish-leader.jpg',
    '/images/ad-formats/Heineken-Zero-Wall-Mural-Shoreditch-London.jpeg',
    '/images/ad-formats/Hermes12.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black text-dun overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-auburn to-black opacity-50 z-10"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brownSugar to-redwood">Outdoor Advertising</span>
            </h1>
            <p className="text-xl mb-8 max-w-lg text-rawUmber">
              Capture audience attention on the go with our cutting-edge Digital Out-of-Home (DOOH) solutions. Elevate your brand visibility and engagement.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => {/* Handle demo booking */}}
                className="bg-auburn text-dun px-8 py-3 rounded-full font-semibold hover:bg-redwood transition duration-300 ease-in-out flex items-center justify-center"
              >
                Book Demo
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-transparent border-2 border-dun px-8 py-3 rounded-full font-semibold hover:bg-dun hover:text-auburn transition duration-300 ease-in-out flex items-center justify-center"
              >
                Watch Video
                <PlayCircle className="ml-2" size={20} />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image 
                src={images[currentImageIndex]}
                alt="Digital billboard in urban setting"
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-dun p-4 rounded-lg shadow-lg">
              <p className="text-auburn font-semibold">500+ Cities</p>
              <p className="text-rawUmber">Global Reach</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-dun p-4 rounded-lg shadow-lg">
              <p className="text-auburn font-semibold">10M+ Daily</p>
              <p className="text-rawUmber">Audience Impressions</p>
            </div>
          </div>
        </div>
      </div>
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-dun p-4 rounded-lg max-w-3xl w-full">
            <div className="aspect-w-16 aspect-h-9">
              {/* Replace with actual video embed */}
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
                title="Product Video"
              ></iframe>
            </div>
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="mt-4 bg-auburn text-dun px-4 py-2 rounded hover:bg-redwood transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const portfolioData = [
    {
      id: 1,
      title: "Downtown Revitalization",
      industry: "Urban Development",
      adStyle: "Large-scale Mural",
      image: "/images/ad-formats/Hermes12.jpg",
      clientName: "Jane Doe",
      clientPosition: "City Planner",
      testimonial: "The transformation of our downtown area was beyond our expectations. The wall ad not only beautified the space but also increased foot traffic significantly.",
    },
    {
      id: 2,
      title: "Tech Startup Launch",
      industry: "Technology",
      adStyle: "Interactive Digital Display",
      image: "/images/ad-formats/Hermes12.jpg",
      clientName: "John Smith",
      clientPosition: "Marketing Director",
      testimonial: "The interactive wall ad created a buzz around our product launch that traditional advertising simply couldn't match. It was a game-changer for our brand awareness.",
    },
    {
        id: 2,
        title: "Tech Startup Launch",
        industry: "Technology",
        adStyle: "Interactive Digital Display",
        image: "/images/ad-formats/Hermes12.jpg",
        clientName: "John Smith",
        clientPosition: "Marketing Director",
        testimonial: "The interactive wall ad created a buzz around our product launch that traditional advertising simply couldn't match. It was a game-changer for our brand awareness.",
      },  ];
  

const PortfolioItem = ({ item, onExpand }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className="bg-dun rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
  >
    <div className="relative h-48 cursor-pointer" onClick={() => onExpand(item.image)}>
      <Image
        src={item.image}
        alt={item.title}
        fill
        style={{ objectFit: 'cover' }}
        className="transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <Maximize2 className="text-dun w-8 h-8" />
      </div>
    </div>
    <div className="p-4 flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-auburn mb-2">{item.title}</h3>
        <p className="text-rawUmber text-sm mb-2">
          <span className="font-semibold">Industry:</span> {item.industry}<br />
          <span className="font-semibold">Ad Style:</span> {item.adStyle}
        </p>
      </div>
      <div>
        <blockquote className="italic text-brownSugar text-sm mb-2 relative pl-3 border-l-2 border-auburn">
          "{item.testimonial.length > 100 ? item.testimonial.slice(0, 100) + '...' : item.testimonial}"
        </blockquote>
        <p className="text-right text-auburn text-sm">
          - {item.clientName}, <span className="text-rawUmber">{item.clientPosition}</span>
        </p>
      </div>
    </div>
  </motion.div>
);

const ExpandedImage = ({ src, alt, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
  >
    <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'contain' }}
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-auburn transition-colors duration-300"
      >
        <X size={32} />
      </button>
    </div>
  </motion.div>
);

const PortfolioShowcase = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(portfolioData.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleExpand = (image) => {
    setExpandedImage(image);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'ArrowRight') nextPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentItems = portfolioData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className="py-16 bg-gradient-to-b from-black via-auburn to-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-12 text-dun">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {currentItems.map((item) => (
              <PortfolioItem key={item.id} item={item} onExpand={handleExpand} />
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevPage}
            className="bg-auburn text-dun p-3 rounded-full hover:bg-redwood transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-auburn"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center text-dun">
            {currentPage + 1} / {totalPages}
          </div>
          <button
            onClick={nextPage}
            className="bg-auburn text-dun p-3 rounded-full hover:bg-redwood transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-auburn"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {expandedImage && (
          <ExpandedImage
            src={expandedImage}
            alt="Expanded portfolio image"
            onClose={() => setExpandedImage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioShowcase;
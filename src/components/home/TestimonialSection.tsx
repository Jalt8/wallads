'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronRight, Quote, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    name: "John Doe",
    position: "Marketing Director",
    company: "JCDecaux",
    quote: "WallAds revolutionized our outdoor advertising strategy. Their innovative approach and stunning designs increased our brand visibility by 300% in just three months!",
    impact: "300% increase in brand visibility",
    rating: 5,
    logoSrc: "/path-to-jcdecaux-logo.png"
  },
  {
    name: "Jane Smith",
    position: "CEO",
    company: "Atmosphere",
    quote: "The ROI we've seen from WallAds' campaigns is unprecedented. Their data-driven approach and creative execution have directly contributed to a 45% boost in our quarterly revenue.",
    impact: "45% increase in quarterly revenue",
    rating: 5,
    logoSrc: "/path-to-atmosphere-logo.png"
  },
  {
    name: "Alex Johnson",
    position: "Brand Manager",
    company: "Urban Outfitters",
    quote: "WallAds doesn't just create advertisements; they craft experiences. Our latest campaign generated over 1 million social media impressions, far exceeding our expectations!",
    impact: "1 million+ social media impressions",
    rating: 5,
    logoSrc: "/path-to-urbanoutfitters-logo.png"
  },
];

const TestimonialCard = ({ testimonial, isExpanded, onClick }: { testimonial: any, isExpanded: boolean, onClick: () => void }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className={`bg-white rounded-xl shadow-lg p-6 flex flex-col cursor-pointer 
                ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`}
    onClick={onClick}
  >
    <div className="flex items-center mb-4">
      <div className="w-16 h-16 relative mr-4">
        <Image
          src={testimonial.logoSrc}
          alt={`${testimonial.company} logo`}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div>
        <h3 className="font-bold text-xl text-auburn">{testimonial.name}</h3>
        <p className="text-brownSugar">{testimonial.position}</p>
        <p className="text-rawUmber text-sm">{testimonial.company}</p>
      </div>
    </div>
    <Quote className="text-auburn w-8 h-8 mb-2 opacity-20" />
    <AnimatePresence>
      {isExpanded ? (
        <motion.p
          key="full-quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-base text-rawUmber mb-4 italic"
        >
          {testimonial.quote}
        </motion.p>
      ) : (
        <motion.p
          key="truncated-quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-base text-rawUmber mb-4 italic line-clamp-3"
        >
          {testimonial.quote}
        </motion.p>
      )}
    </AnimatePresence>
    <div className="bg-dun rounded-lg p-3 mt-auto">
      <p className="text-auburn font-semibold">Key Impact:</p>
      <p className="text-rawUmber font-bold">{testimonial.impact}</p>
    </div>
    <div className="flex justify-between items-center mt-4">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="text-yellow-400"
            fill="currentColor"
          />
        ))}
      </div>
      {!isExpanded && (
        <ArrowUpRight className="text-auburn" size={20} />
      )}
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-r from-black to-auburn">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
        >
          Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-12 text-dun max-w-3xl mx-auto"
        >
          See how our innovative wall advertising solutions have transformed businesses and driven remarkable results.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              isExpanded={expandedIndex === index}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="bg-white text-auburn font-bold text-lg py-4 px-8 rounded-full hover:bg-auburn hover:text-white transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl hover:scale-105"
          >
            Join Our Success Stories
            <ChevronRight className="ml-2" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
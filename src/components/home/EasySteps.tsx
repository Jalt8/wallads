'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clipboard, Paintbrush, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: "Establishment",
    icon: <Clipboard className="w-12 h-12 text-auburn" />,
    description: "We craft a tailored advertising strategy based on your brand's vision and goals.",
    details: "Our team analyzes your target audience and market position to develop a data-driven approach that maximizes impact and ROI.",
    cta: "Start Your Journey"
  },
  {
    title: "Installation",
    icon: <Paintbrush className="w-12 h-12 text-auburn" />,
    description: "Our expert designers bring your vision to life with stunning, attention-grabbing visuals.",
    details: "Using cutting-edge design techniques, we create wall ads that not only meet but exceed expectations, ensuring your message stands out.",
    cta: "View Our Portfolio"
  },
  {
    title: "Completion",
    icon: <Rocket className="w-12 h-12 text-auburn" />,
    description: "We handle the entire installation process, transforming blank walls into powerful marketing assets.",
    details: "Our installation team ensures your ad is perfectly placed and finished to the highest standards, creating a seamless transition from concept to reality.",
    cta: "See Our Process"
  }
];

const StepCard = ({ step, index, isActive, onClick }) => (
  <motion.div 
    className={`bg-white rounded-xl shadow-lg p-6 text-center h-full flex flex-col items-center cursor-pointer transition-all duration-300 ${isActive ? 'ring-4 ring-auburn' : 'hover:shadow-xl'}`}
    onClick={() => onClick(index)}
    whileHover={{ scale: 1.02 }}
    layout
  >
    <div className="bg-dun rounded-full p-4 mb-4">
      {step.icon}
    </div>
    <h3 className="text-2xl font-bold mb-2 text-auburn">{step.title}</h3>
    <p className="text-rawUmber mb-4">{step.description}</p>
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="w-full"
        >
          <p className="text-brownSugar mb-4">{step.details}</p>
          <button className="bg-auburn text-white py-2 px-4 rounded-full hover:bg-redwood transition-all duration-300 flex items-center justify-center group w-full">
            {step.cta}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const ModernEasySteps = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-dun to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-auburn"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Path to Impactful Advertising
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-16 text-rawUmber max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Transform your brand's visibility in three simple steps. Let us guide you through our seamless process to create advertising that truly stands out.
        </motion.p>
        <div className="relative mb-20">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-auburn transform -translate-y-1/2 hidden md:block"></div>
          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="md:w-1/3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StepCard 
                  step={step} 
                  index={index} 
                  isActive={activeStep === index}
                  onClick={setActiveStep}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#contact" className="bg-auburn text-white font-bold text-lg py-4 px-8 rounded-full hover:bg-redwood transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-xl">
            Start Your Advertising Journey
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernEasySteps;
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Target, DollarSign, Paintbrush, TrendingUp } from 'lucide-react';

const benefitsData = [
  {
    icon: <ArrowUpRight className="h-8 w-8 text-white" />,
    title: "Massive Exposure",
    description: "500% increase in brand recall with 200,000+ daily impressions",
  },
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: "Precision Targeting",
    description: "95% audience relevance, 3x higher engagement rates",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-white" />,
    title: "Cost Efficiency",
    description: "70% lower CPM than digital ads, 400% ROI on average",
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-white" />,
    title: "Creative Impact",
    description: "100% customizable designs, 5x higher recall than billboards",
  },
];

const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300">
    <div className="bg-auburn rounded-full p-3 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-auburn mb-2">{title}</h3>
      <p className="text-rawUmber">{description}</p>
    </div>
  </div>
);

const BenefitsOverview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-dun">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-auburn"
        >
          Skyrocket Your Brand with Wall Ads
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-12 text-rawUmber max-w-3xl mx-auto"
        >
          Dominate the urban landscape and captivate your audience with our innovative outdoor advertising solutions.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BenefitCard {...benefit} />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <a href="#contact" className="bg-auburn text-white font-bold text-lg py-4 px-8 rounded-full hover:bg-redwood transition-colors duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
            Transform Your Advertising Now
            <TrendingUp className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsOverview;
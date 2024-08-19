import React from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, Brush, TrendingUp } from 'lucide-react';

interface CTAProps {
  title: string;
  subtitle?: string;
  features: string[];
  buttonText: string;
  buttonLink?: string;
}

const CTA: React.FC<CTAProps> = ({ 
  title, 
  subtitle, 
  features,
  buttonText, 
  buttonLink = '/get-quote'
}) => {
  return (
    <section className="bg-gradient-to-br from-dun to-[#F0DFC4] py-24 px-6 sm:px-8 lg:px-12 rounded-xl shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-redwood opacity-5 z-0"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-auburn sm:text-6xl mb-6 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-2xl leading-8 text-rawUmber font-medium">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 bg-white bg-opacity-60 p-8 rounded-lg shadow-md">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-brownSugar">
                <div className="bg-auburn rounded-full p-2 mr-4">
                  {index === 0 && <Eye className="h-6 w-6 text-dun" />}
                  {index === 1 && <Brush className="h-6 w-6 text-dun" />}
                  {index === 2 && <TrendingUp className="h-6 w-6 text-dun" />}
                </div>
                <span className="text-xl font-semibold text-rawUmber">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-8 bg-auburn rounded-xl p-10 shadow-xl">
            <p className="text-dun text-2xl font-bold mb-4">Ready to make a statement?</p>
            <Link href={buttonLink} passHref>
              <span className="inline-flex items-center justify-center px-10 py-5 border-2 border-dun text-xl font-bold rounded-full text-auburn bg-dun hover:bg-brownSugar hover:text-white hover:border-transparent focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-brownSugar transition duration-300 ease-in-out cursor-pointer shadow-lg group">
                {buttonText}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <p className="text-base text-dun mt-4 font-medium">No commitment required for initial consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
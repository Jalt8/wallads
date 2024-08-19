import React from 'react';

const adSizes = [
  { size: '4M X 2.5M', imageUrl: '/api/placeholder/400/250', alt: 'KFC Drive-Thru Opening Soon' },
  { size: '6M X 2.5M', imageUrl: '/api/placeholder/600/250', alt: 'JML Plumbing & Maintenance' },
  { size: '8M X 2.5M', imageUrl: '/api/placeholder/800/250', alt: 'Kids Easter Project 2023' },
  { size: '12M X 2.5M', imageUrl: '/api/placeholder/1200/250', alt: 'Universal Paints Lynnwood' },
  { size: '16M X 2.5M', imageUrl: '/api/placeholder/1600/250', alt: 'Kings Meat Deli' },
];

const WallAdSizeGuide = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-100 to-dun">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-6xl font-bold text-center mb-6 text-gray-900">Size <span className="text-red-900 underline">GUIDE</span></h1>
        <p className="text-xl text-center mb-12 text-gray-600">
          Explore our range of wall ad sizes to find the perfect fit for your advertising needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {adSizes.map((ad, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
              <img 
                src={ad.imageUrl} 
                alt={ad.alt}
                className="w-full h-auto object-cover mb-4 rounded"
                style={{aspectRatio: ad.size.split('X')[0].trim() + '/2.5'}}
              />
              <p className="text-2xl font-semibold text-gray-800">{ad.size}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WallAdSizeGuide;
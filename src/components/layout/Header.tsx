'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-auburn to-black py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-14 h-14 relative">
              <Image
                src="/images/logos/wallads-logo3.png"
                alt="WALLADS logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div>
              <div className="text-2xl font-bold text-dun hover:text-brownSugar transition-colors">
                WALLADS
              </div>
              <div className="text-xs text-rawUmber">ADVERTISING EXCELLENCE</div>
            </div>
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {['Size Guide', 'Wall Owners', 'Ad Gallery', 'Client Stories', 'Company'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-dun hover:text-brownSugar transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/advertise" className="bg-auburn text-dun px-4 py-2 rounded-full hover:bg-redwood transition-colors">
              Advertise Now
            </Link>
            <Link href="/contact" className="border border-dun text-dun px-4 py-2 rounded-full hover:bg-dun hover:text-auburn transition-colors">
              Contact Us
            </Link>
          </div>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-dun hover:text-brownSugar transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {['Size Guide', 'Wall Owners', 'Ad Gallery', 'Client Stories', 'Company'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="block text-dun hover:text-brownSugar transition-colors">
                {item}
              </Link>
            ))}
          </nav>
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/advertise" className="block bg-auburn text-dun px-4 py-2 rounded-full hover:bg-redwood transition-colors text-center">
              Advertise Now
            </Link>
            <Link href="/contact" className="block border border-dun text-dun px-4 py-2 rounded-full hover:bg-dun hover:text-auburn transition-colors text-center">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
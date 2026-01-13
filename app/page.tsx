'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { WhyUsSection } from '@/components/WhyUsSection';
import { FeaturedSection } from '@/components/FeaturedSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { VisionSection } from '@/components/VisionSection';
import { LuxurySection } from '@/components/LuxurySection';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <main className="w-full bg-white">
      <div className="h-screen w-full p-1 md:p-2 pb-0">
        <div className="w-full h-full bg-[#D8E3E9] rounded-[2rem] overflow-hidden shadow-xl flex flex-col lg:flex-row relative">

          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2 p-6 md:p-16 lg:pl-16 lg:pr-24 flex flex-col justify-center relative z-10">

            {/* Logo */}
            <div className="absolute top-4 left-6 md:top-8 md:left-12 hidden md:block">
              <Image
                src="/keysplease-logo.png"
                alt="Keys Please Logo"
                width={96}
                height={96}
                className="h-16 w-auto md:h-24"
                priority
              />
            </div>

            {/* Header Content */}
            <header className="space-y-6 md:space-y-8 animate-fadeIn max-w-xl mt-48 md:mt-40">

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#1a2333] tracking-tighter leading-[0.9]">
                Buy & Sell. <br />
                <span className="text-slate-500">Better.</span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed pr-8">
                The modern marketplace for premium properties. <br className="hidden md:block" /> No hassle, just great results.
              </p>

              {/* Search Bar */}
              <div
                className="bg-white p-2 rounded-2xl flex items-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100/50 mt-8 w-full group focus-within:ring-2 ring-slate-200 transition-all"
                role="search"
              >
                <div className="pl-4 pr-2 text-slate-400">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="City, Neighborhood, or Zip..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="flex-1 text-[#1a2333] placeholder:text-slate-400 font-medium outline-none text-sm md:text-base h-12 bg-transparent"
                  aria-label="Search properties"
                />
                <button
                  onClick={handleSearch}
                  className="bg-[#c89e36] hover:bg-[#b08b2f] text-white px-4 md:px-6 h-12 rounded-xl transition-all duration-200 font-medium text-sm shadow-md"
                  aria-label="Submit search"
                >
                  Search
                </button>
              </div>
            </header>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2 h-[40vh] md:h-[35%] lg:h-full relative overflow-hidden lg:order-last min-h-[300px]">
            <Image
              src="https://framerusercontent.com/images/NFQRK3h14jdW9wII1yAzsLAMk.webp?width=2000&height=1333"
              alt="Modern Apartment Building"
              fill
              className="absolute inset-0 w-full h-full object-cover object-left-center"
              style={{ objectPosition: 'left center' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>

      <FeaturedSection />

      <WhyUsSection />

      <LuxurySection />

      <FeaturesSection />

      <VisionSection />
    </main>
  );
}

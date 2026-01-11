'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Tag } from 'lucide-react'; // Using Lucide for the generic tag icon seen in screenshot

// --- ICONS ---

const IconSatisfaction = () => (
  <svg viewBox="0 0 256 256" className="w-full h-full text-white fill-current">
    <path d="M173.19,155c-9.92,17.16-26.39,27-45.19,27s-35.27-9.84-45.19-27a6,6,0,0,1,10.38-6c7.84,13.54,20.2,21,34.81,21s27-7.46,34.81-21a6,6,0,1,1,10.38,6ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128ZM92,118a10,10,0,1,0-10-10A10,10,0,0,0,92,118Zm72-20a10,10,0,1,0,10,10A10,10,0,0,0,164,98Z"></path>
  </svg>
);

const IconSold = () => (
  <svg viewBox="0 0 256 256" className="w-full h-full text-white fill-current">
    <path d="M241.91,137.42,142.59,38.1a13.94,13.94,0,0,0-9.9-4.1H40a6,6,0,0,0-6,6v92.69a13.94,13.94,0,0,0,4.1,9.9l99.32,99.32a14,14,0,0,0,19.8,0l84.69-84.69A14,14,0,0,0,241.91,137.42Zm-8.49,11.31-84.69,84.69a2,2,0,0,1-2.83,0L46.59,134.1a2,2,0,0,1-.59-1.41V46h86.69a2,2,0,0,1,1.41.59l99.32,99.31A2,2,0,0,1,233.42,148.73ZM94,84A10,10,0,1,1,84,74,10,10,0,0,1,94,84Z"></path>
  </svg>
);

const IconAwards = () => (
  <svg viewBox="0 0 256 256" className="w-full h-full text-white fill-current">
    <path d="M214,96A86,86,0,1,0,74,162.87V240a6,6,0,0,0,2.85,5.1A5.93,5.93,0,0,0,80,246a6,6,0,0,0,2.68-.63L128,222.71l45.33,22.66A6,6,0,0,0,182,240V162.87A85.87,85.87,0,0,0,214,96ZM54,96a74,74,0,1,1,74,74A74.09,74.09,0,0,1,54,96ZM170,230.29l-39.33-19.66a6,6,0,0,0-5.36,0L86,230.29V171a85.75,85.75,0,0,0,84,0ZM128,150A54,54,0,1,0,74,96,54.06,54.06,0,0,0,128,150Zm0-96A42,42,0,1,1,86,96,42,42,0,0,1,128,54Z"></path>
  </svg>
);

const IconRevenue = () => (
  <svg viewBox="0 0 256 256" className="w-full h-full text-white fill-current">
    <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm38-70a26,26,0,0,1-26,26h-6v10a6,6,0,0,1-12,0V174H104a6,6,0,0,1,0-12h36a14,14,0,0,0,0-28H116a26,26,0,0,1,0-52h6V72a6,6,0,0,1,12,0V82h18a6,6,0,0,1,0,12H116a14,14,0,0,0,0,28h24A26,26,0,0,1,166,148Z"></path>
  </svg>
);

const IconGallery = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 text-white/50" fill="currentColor">
        <path d="M216,42H72A14,14,0,0,0,58,56V74H40A14,14,0,0,0,26,88V200a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V182h18a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM70,56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v67.57L204.53,110.1a14,14,0,0,0-19.8,0l-21.42,21.41L117.9,86.1a14,14,0,0,0-19.8,0L70,114.2ZM186,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2H58v82a14,14,0,0,0,14,14H186Zm30-30H72a2,2,0,0,1-2-2V131.17l36.58-36.58a2,2,0,0,1,2.83,0l49.66,49.66a6,6,0,0,0,8.49,0l25.65-25.66a2,2,0,0,1,2.83,0l22,22V168A2,2,0,0,1,216,170ZM162,84a10,10,0,1,1,10,10A10,10,0,0,1,162,84Z"></path>
    </svg>
)

// --- DATA ---

const STATS_DATA = [
  { label: 'Properties Sold', value: '120+', icon: IconSold },
  { label: 'Customer Satisfaction', value: '98%', icon: IconSatisfaction },
  { label: 'Industry Awards', value: '25+', icon: IconAwards },
  { label: 'Revenue Generated', value: '100M+', icon: IconRevenue },
];

const GALLERY_IMAGES = [
  "https://framerusercontent.com/images/j2QYWllgUp5uE041LD3o4xPMUIM.png?width=1200&height=686",
  "https://framerusercontent.com/images/I4QUqdsy1bHk8LY37a5gE3zcXA.png?width=1200&height=686",
  "https://framerusercontent.com/images/1edsZVsMVWnRJ8k1DuBKfQzSrI.png?width=1200&height=673",
  "https://framerusercontent.com/images/h47Rv2shExyEhkfIVA3PIrL5bY.png?width=960&height=1200",
];

const LOCATIONS = [
    { name: 'Colombo', coords: '6.9271° N, 79.8612° E', region: 'Western Province' },
    { name: 'Kandy', coords: '7.2906° N, 80.6337° E', region: 'Central Province' },
    { name: 'Galle', coords: '6.0535° N, 80.2210° E', region: 'Southern Province' },
    { name: 'Jaffna', coords: '9.6615° N, 80.0255° E', region: 'Northern Province' },
    { name: 'Negombo', coords: '7.2088° N, 79.8359° E', region: 'Western Province' },
    { name: 'Anuradhapura', coords: '8.3114° N, 80.4037° E', region: 'North Central' },
    { name: 'Trincomalee', coords: '8.5874° N, 81.2152° E', region: 'Eastern Province' },
    { name: 'Kurunegala', coords: '7.4863° N, 80.3649° E', region: 'North Western' },
    { name: 'Ratnapura', coords: '6.6828° N, 80.3992° E', region: 'Sabaragamuwa' },
    { name: 'Badulla', coords: '6.9934° N, 81.0550° E', region: 'Uva Province' }
];

export function FeaturedSection() {
    const [statIndex, setStatIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Stats Rotator
    useEffect(() => {
        const interval = setInterval(() => {
            setStatIndex((prev) => (prev + 1) % STATS_DATA.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Gallery Slideshow
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Locations Rotator
    const [activeLocIndex, setActiveLocIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveLocIndex((prev) => (prev + 1) % LOCATIONS.length);
        }, 3500); // Slower interval for better readability of data
        return () => clearInterval(interval);
    }, []);

    const activeStat = STATS_DATA[statIndex];
    const activeLocation = LOCATIONS[activeLocIndex];

    return (
        <section className="w-full py-8 md:py-16 bg-white overflow-hidden">
             {/* Styles for glassmorphism/3d animation */}
             <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotateX(0deg); }
                    50% { transform: translateY(-12px) rotateX(2deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float 7s ease-in-out infinite 1s;
                }
                .animate-float-slow {
                    animation: float 8s ease-in-out infinite 2s;
                }
                .liquid-glass {
                    /* Opaque base for 'solid glass' feel, not transparent */
                    background: linear-gradient(135deg, rgba(26, 35, 51, 1) 0%, rgba(20, 27, 40, 1) 100%);
                    
                    /* Frosted texture overlay using backdrop filter (even on solid bg it affects internal elements) */
                    position: relative;
                    
                    /* Glass borders/bevels */
                    border-top: 1px solid rgba(255, 255, 255, 0.4);
                    border-left: 1px solid rgba(255, 255, 255, 0.2);
                    border-right: 1px solid rgba(0, 0, 0, 0.1);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
                    
                    box-shadow: 
                        /* Inner glow for depth */
                        inset 0 0 30px rgba(255, 255, 255, 0.05),
                        /* Heavy drop shadow for floating effect */
                        0 20px 40px rgba(0, 0, 0, 0.3);
                        
                    transform-style: preserve-3d;
                    perspective: 1000px;
                }
                /* Noise Texture */
                .liquid-glass::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    opacity: 0.07;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                    pointer-events: none;
                    mix-blend-mode: overlay;
                    z-index: 1;
                }
                .liquid-glass::before {
                    content: '';
                    position: absolute;
                    top: 0; left: -100%;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(
                        to right,
                        transparent,
                        rgba(255, 255, 255, 0.15),
                        transparent
                    );
                    transform: skewX(-25deg);
                    transition: 0.5s;
                    animation: shine 6s infinite ease-in-out 3s; /* delayed shine */
                    pointer-events: none;
                    z-index: 2;
                }
                @keyframes shine {
                    0% { left: -100%; opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { left: 200%; opacity: 0; }
                }
            `}</style>
            
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 perspective-1000">
                    
                    {/* --- CARD 1: PERFORMANCE METRICS --- */}
                    <div className="liquid-glass animate-float relative h-[280px] rounded-[2.5rem] text-white p-8 flex flex-col justify-between overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                        {/* Background Ambiance */}
                        <div className="absolute -left-[20%] -top-[20%] w-[60%] h-[60%] bg-blue-500/20 rounded-full blur-[80px] animate-pulse"></div>
                        <div className="absolute -right-[20%] -bottom-[20%] w-[60%] h-[60%] bg-purple-500/20 rounded-full blur-[80px] animate-pulse [animation-delay:1s]"></div>

                        {/* Top Bar: Progress & Icon */}
                        <div className="flex justify-between items-start relative z-10 opacity-70">
                            {/* Animated Time Progress Bar */}
                            <div className="flex gap-1.5">
                                {STATS_DATA.map((_, i) => (
                                    <div key={i} className="h-1.5 w-6 rounded-full bg-white/10 overflow-hidden backdrop-blur-sm">
                                        <div 
                                            className={`h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 ${
                                                i === statIndex ? 'w-full scale-100' : 
                                                i < statIndex ? 'w-full opacity-30' : 'w-0'
                                            }`} 
                                        />
                                    </div>
                                ))}
                            </div>
                            
                            {/* Dynamic Icon */}
                            <div className="w-12 h-12 relative p-2 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10">
                                {STATS_DATA.map((stat, idx) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div 
                                            key={idx}
                                            className={`absolute inset-0 p-2 transition-all duration-500 transform ${
                                                idx === statIndex 
                                                    ? 'opacity-100 rotate-0 scale-100' 
                                                    : 'opacity-0 -rotate-90 scale-50'
                                            }`}
                                        >
                                            <Icon />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="relative z-10 mt-auto">
                            {STATS_DATA.map((stat, idx) => (
                                <div 
                                    key={idx} 
                                    className={`absolute bottom-0 left-0 w-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                                        idx === statIndex 
                                            ? 'opacity-100 translate-y-0 blur-0' 
                                            : 'opacity-0 translate-y-8 blur-lg'
                                    }`}
                                >
                                    {/* Value with glass text effect */}
                                    <h2 className="text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] mb-1">
                                        {stat.value}
                                    </h2>
                                    
                                    {/* Label */}
                                    <p className="text-xl text-blue-100/70 font-medium tracking-wide pl-1">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                            {/* Invisible Spacer */}
                             <div className="invisible pointer-events-none">
                                <h2 className="text-7xl font-black mb-2">000+</h2>
                                <p className="text-xl">Placeholder</p>
                            </div>
                        </div>
                    </div>


                    {/* --- CARD 2: GALLERY --- */}
                    <Link href="/gallery" className="liquid-glass animate-float-delayed relative h-[280px] rounded-[2.5rem] overflow-hidden group block hover:scale-[1.02] transition-transform duration-300">
                         {/* Slideshow Background */}
                         {GALLERY_IMAGES.map((src, idx) => (
                            <div 
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                    idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <img
                                    src={src}
                                    alt="Gallery"
                                    className="w-full h-full object-cover"
                                />
                                {/* Gradient Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2333] via-transparent to-transparent opacity-80" />
                            </div>
                         ))}
                         
                         {/* Glass Overlay on top */}
                         <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-500"></div>
                         
                         {/* Content */}
                         <div className="absolute top-6 right-6 z-20 p-3 bg-white/10 rounded-full backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all">
                            <IconGallery />
                         </div>
                         
                         <div className="absolute bottom-8 left-8 z-20">
                             <h3 className="text-5xl font-bold text-white tracking-tight drop-shadow-lg">Gallery</h3>
                             <p className="text-blue-200/80 mt-2 font-medium flex items-center gap-2">
                                View Collection 
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                             </p>
                         </div>
                    </Link>


                    {/* --- CARD 3: LOCATIONS (Holographic Map Theme) --- */}
                    <div className="liquid-glass animate-float-slow relative h-[280px] rounded-[2.5rem] text-white overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                         
                         {/* --- BACKGROUND ANIMATION --- */}
                         {/* Grid Pattern */}
                         <div className="absolute inset-0 opacity-30" 
                              style={{ 
                                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
                                  backgroundSize: '20px 20px' 
                              }} 
                         />

                        {/* Rotating Rings (Holographic Globe Feel) */}
                         <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 opacity-50 pointer-events-none perspective-[1000px]">
                             <div className="absolute inset-0 border border-blue-400/30 rounded-full animate-[spin_8s_linear_infinite] shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                             <div className="absolute inset-8 border border-cyan-400/20 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
                             <div className="absolute inset-20 border-[3px] border-dotted border-white/20 rounded-full animate-[spin_25s_linear_infinite]" />
                             {/* Scanning Line */}
                             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent w-full h-[1px] top-1/2 -translate-y-1/2 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                        </div>

                         {/* --- CONTENT --- */}
                        <div className="relative z-10 flex flex-col h-full p-8 justify-between">
                            <div className="flex items-center justify-between">
                                <div className="bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30 backdrop-blur-sm">
                                    <h3 className="text-blue-300 text-[10px] font-bold uppercase tracking-widest">Live Operations</h3>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="relative flex h-2 w-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                </div>
                            </div>
                            
                            {/* Animated Text Container */}
                            <div className="mt-4">
                               {LOCATIONS.map((loc, idx) => (
                                   <div 
                                       key={idx} 
                                       className={`transition-all duration-700 absolute inset-x-8 bottom-8 flex flex-col justify-end ${
                                        idx === activeLocIndex 
                                            ? 'opacity-100 translate-x-0 blur-0 scale-100' 
                                            : 'opacity-0 translate-x-12 blur-md scale-95 pointer-events-none'
                                       }`}
                                   >
                                       {/* Region Label */}
                                       <div className="text-sky-300/80 text-sm font-semibold mb-2 tracking-wider flex items-center gap-2">
                                           <div className="h-[1px] w-4 bg-sky-400"></div>
                                           {loc.region}
                                       </div>
                                       
                                       {/* City Name */}
                                       <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white/50 tracking-tight leading-none mb-3 drop-shadow-lg">
                                           {loc.name.toUpperCase()}
                                       </h2>

                                       {/* Coordinates Data */}
                                       <div className="flex items-center gap-3 font-mono text-[10px] text-blue-200/60 bg-black/20 px-3 py-1.5 rounded-lg w-fit backdrop-blur-md border border-white/5 shadow-inner">
                                           <svg className="w-3.5 h-3.5 text-blue-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                           </svg>
                                           <span className="">{loc.coords}</span>
                                       </div>
                                   </div>
                               ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

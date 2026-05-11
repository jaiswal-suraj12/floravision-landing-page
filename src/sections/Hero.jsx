import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-[#0B1208] overflow-hidden px-6 md:px-16 py-20">
      
      {/* 1. THE BACKGROUND PLANT (Sharp version - No Blur) */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <img 
          src="/assets/bigpotplant.png" 
          alt="background plant" 
          className="w-full max-w-5xl opacity-60 brightness-90 object-contain scale-110"
        />
      </div>

      {/* 2. BACKGROUND GLOW (Subtle green light on the left) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-900/10 blur-[120px] rounded-full z-0" />

      {/* 3. MAIN HERO CONTENT (Stacked above background via z-10) */}
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Text and Review Card */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="text-6xl md:text-[100px] font-bold leading-[0.9] mb-8 text-gradient">
            Earth's Exhale
          </h1>
          
          <p className="text-gray-300 text-lg max-w-md mb-10 leading-relaxed font-light">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural 
            environment and its essential role in sustaining life.
          </p>

          <div className="flex items-center gap-6 mb-16">
            <button className="bg-transparent border border-white/40 px-10 py-3 rounded-xl hover:bg-white hover:text-black transition-all font-semibold tracking-wide">
              Buy Now
            </button>
            <button className="flex items-center gap-3 text-white font-medium group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <span className="text-sm">▶</span>
              </div>
              <span className="text-sm tracking-wide">Live Demo...</span>
            </button>
          </div>

          {/* Ronnie Hamill Testimonial Card */}
          <div className="glass-card p-6 rounded-[35px] max-w-xs md:max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/Ronni.png" 
                alt="Ronnie" 
                className="w-10 h-10 rounded-full object-cover" 
              />
              <div>
                <p className="text-sm font-bold text-white">Ronnie Hamill</p>
                <div className="flex text-yellow-500 text-[10px]">
                   ★★★★★
                </div>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed italic">
              "I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home."
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: The Aglaonema Floating Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-24 lg:mt-0">
          <div className="glass-card p-10 rounded-[60px] w-full max-w-[400px] text-center relative">
            
            {/* The Plant Image popping out of the container */}
            <img 
              src="/assets/yellowgreen.png" 
              alt="Aglaonema plant" 
              className="w-full -mt-48 drop-shadow-[0_45px_45px_rgba(0,0,0,0.8)] animate-float"
            />
            
            <div className="mt-8 space-y-2">
              <p className="text-gray-500 text-xs tracking-[0.2em] uppercase font-semibold">Indoor Plant</p>
              <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white">Aglaonema plant</h3>
              
              <button className="w-full border border-white/30 py-4 rounded-2xl hover:bg-white hover:text-black transition-all font-bold text-xs tracking-widest text-white">
                BUY NOW
              </button>

              {/* Slider Dots */}
              <div className="flex justify-center gap-2 pt-8">
                <div className="w-8 h-1 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
              </div>
            </div>

            {/* Side Arrow Indicator */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/10 text-3xl hidden md:block select-none">
              ›
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
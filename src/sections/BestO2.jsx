import React from 'react';

const BestO2 = () => {
  return (
    <section className="relative py-24 bg-[#0B1208] overflow-hidden px-6 md:px-16">
      
      {/* Background Bracket Heading */}
      <div className="flex justify-center mb-20">
        <div className="relative inline-block">
          <span className="absolute -left-8 -top-2 text-5xl font-light text-white/20 select-none">[</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight px-4 text-white">
            Our Best <span className="italic">O2</span>
          </h2>
          <span className="absolute -right-8 -top-2 text-5xl font-light text-white/20 select-none">]</span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto relative flex flex-col md:flex-row items-center">
        
        {/* LEFT SIDE: The Plant Image */}
        <div className="relative z-20 w-full md:w-1/2 flex justify-center md:justify-end md:-mr-20">
          <img 
            src="/assets/yellowgreen.png" 
            alt="O2 Plant" 
            className="w-full max-w-[450px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] animate-float"
          />
        </div>

        {/* RIGHT SIDE: The Glass Card */}
        <div className="glass-card w-full md:w-3/5 p-10 md:p-16 rounded-[60px] pt-20 md:pt-16 md:pl-32">
          <div className="max-w-md">
            <h3 className="text-3xl font-semibold mb-6 text-white leading-tight">
              We Have Small And Best O2 Plants Collection's
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
            </p>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
            </p>

            <div className="flex items-center justify-between">
              <button className="border border-white/30 px-10 py-3 rounded-2xl hover:bg-white hover:text-black transition-all font-bold text-xs tracking-widest text-white">
                Explore
              </button>

              {/* Slider Controls */}
              <div className="flex items-center gap-6">
                <button className="text-white/40 hover:text-white transition">
                  <span className="text-xl">‹</span>
                </button>
                <div className="text-xs font-mono tracking-widest">
                  <span className="text-white">01</span>
                  <span className="text-white/20 mx-1">/</span>
                  <span className="text-white/20">04</span>
                </div>
                <button className="text-white/40 hover:text-white transition">
                  <span className="text-xl">›</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BestO2;
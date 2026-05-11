
import React from 'react';
import PlantCard from '../components/PlantCard';
import { TRENDING_PLANTS } from '../constants';

const Trending = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0B1208]">
      

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/*  THE BRACKET HEADING ([ Our Trendy plants ]) */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="relative inline-block">
             {/* Left Bracket */}
             <span className="absolute -left-8 -top-2 text-5xl font-light text-white/20 select-none">[</span>
             
             <h2 className="text-4xl md:text-5xl font-medium tracking-tight px-4">
               Our <span className="italic">Trendy</span> plants
             </h2>
             
             {/* Right Bracket */}
             <span className="absolute -right-8 -top-2 text-5xl font-light text-white/20 select-none">]</span>
          </div>
        </div>

        {/*  TRENDING CARD  */}
        
        <div className="glass-card rounded-[60px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 mb-12 relative overflow-hidden">
           {/* Plant Image */}
           <div className="w-full md:w-1/2 flex justify-center">
             <img 
               src="/assets/smallpot.png" 
               alt="Desk Decoration" 
               className="w-full max-w-[400px] drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
             />
           </div>
           

           {/* Content */}
           <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-4xl font-semibold">For Your Desks Decorations</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
              </p>
              <p className="text-3xl font-bold">Rs. 599/-</p>
              
              <div className="flex gap-4">
                <button className="border border-white/40 px-10 py-3 rounded-2xl hover:bg-white hover:text-black transition-all font-bold">
                  Explore
                </button>
                <button className="border border-white/40 p-4 rounded-2xl hover:bg-white hover:text-black transition-all">
                   <img src="/assets/bag.png" alt="add to cart" className="w-6 h-6" />

                </button>
              </div>
           </div>
        </div>
         <div className="glass-card rounded-[60px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 mb-12 relative overflow-hidden">
           {/* Plant Image */}
           <div className="w-full md:w-1/2 flex justify-center">
             <img 
               src="/assets/alleoverra.png" 
               alt="Desk Decoration" 
               className="w-full max-w-[400px] drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
             />
           </div>
           

           {/* Content */}
           <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-3xl font-semibold">For Your Desks Decorations</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming. 
              </p>
              <p className="text-3xl font-bold">Rs. 399/-</p>
              
              <div className="flex gap-4">
                <button className="border border-white/40 px-10 py-3 rounded-2xl hover:bg-white hover:text-black transition-all font-bold">
                  Explore
                </button>
                <button className="border border-white/40 p-4 rounded-2xl hover:bg-white hover:text-black transition-all">
                                  <img src="/assets/bag.png" alt="add to cart" className="w-6 h-6" />

                </button>
              </div>
           </div>
        </div>
       
      </div>
    </section>
  );
};

export default Trending;
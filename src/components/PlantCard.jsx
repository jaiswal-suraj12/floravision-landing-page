import React from 'react';

const PlantCard = ({ name, price, image, tag }) => {
  return (
    <div className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-[2rem] p-6 transition-all duration-500 hover:-translate-y-2">
      
      {/* Tag (e.g., Trending) */}
      {tag && (
        <span className="absolute top-4 left-6 bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-green-500/30">
          {tag}
        </span>
      )}

      {/* Image Container */}
      <div className="relative h-64 w-full mb-6 flex items-center justify-center overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
        />
      </div>

      {/* Info Section */}
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-xl font-medium text-white/90 mb-1">{name}</h3>
          <p className="text-green-400 font-bold text-lg">{price}</p>
        </div>
        
        {/* Add to Cart Button */}
        <button className="bg-white text-black p-3 rounded-2xl hover:bg-green-400 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
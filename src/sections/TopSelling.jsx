import React from 'react';
import PlantCard from '../components/PlantCard';
import { TOP_SELLING } from '../constants';

const TopSelling = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
         Our Top Selling <span className="italic">Plants</span>
        </h2>

        {/* Grid Layout - 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOP_SELLING.map((plant) => (
            <PlantCard key={plant.id} {...plant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
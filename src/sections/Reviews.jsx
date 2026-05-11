import React from 'react';
import { REVIEWS } from '../constants';

const Reviews = () => {
  return (
    <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
      <h2 className="text-4xl font-serif mb-16 italic">Customer Reviews </h2>
      
      <div className="flex justify-center">
        {REVIEWS.map((review) => (
          <div key={review.id} className="max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem]">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-8 italic">
              "{review.comment}"
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border border-green-400" />
              <div className="text-left">
                <p className="font-bold">{review.name}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
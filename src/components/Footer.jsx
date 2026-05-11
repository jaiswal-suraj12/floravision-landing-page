import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#070B05] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold tracking-widest mb-6">FLORAVISION</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Bringing the serenity of nature directly to your doorstep. We curate the finest air-purifying plants for modern homes.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 transition cursor-pointer">FB </span>
              <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 transition cursor-pointer"> TW </span>
              <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 transition cursor-pointer"> LI</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-green-400 cursor-pointer transition">Home</li>
              <li className="hover:text-green-400 cursor-pointer transition">Shop</li>
              <li className="hover:text-green-400 cursor-pointer transition">Sustainability</li>
              <li className="hover:text-green-400 cursor-pointer transition">Blog</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-green-400 cursor-pointer transition">Shipping Policy</li>
              <li className="hover:text-green-400 cursor-pointer transition">Returns & Exchanges</li>
              <li className="hover:text-green-400 cursor-pointer transition">FAQs</li>
              <li className="hover:text-green-400 cursor-pointer transition">Contact Us</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-6">Subscribe</h4>
            <p className="text-gray-500 text-sm mb-6">Join our green community and get 10% off your first order.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-green-500 transition"
              />
              <button className="bg-white text-black px-5 py-3 rounded-full text-sm font-bold hover:bg-green-400 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2026 FloraVision. All rights reserved.</p>
          <div className="flex gap-8 text-gray-600 text-xs">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
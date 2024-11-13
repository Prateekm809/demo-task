// LogoSection.js
import React from 'react';
import { Search } from 'lucide-react';

const LogoSection = () => {
  return (
    <div className="w-[300px] mb-4 flex flex-col items-center">
      <div className="mb-3">
        <img 
          src="/api/placeholder/150/50" 
          alt="LzyCrazy Logo" 
          className="h-12"
        />
      </div>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Coming Soon..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 pr-12"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-2">
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
              <line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
          </button>
          <Search className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default LogoSection;

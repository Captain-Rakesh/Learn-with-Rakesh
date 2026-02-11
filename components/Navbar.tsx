
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-8 py-3 rounded-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">R</div>
          <span className="text-xl font-bold tracking-tight">Learn with <span className="text-indigo-400">Rakesh</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-indigo-400 transition-colors">Home</a>
          <a href="#classes" className="hover:text-indigo-400 transition-colors">Classes</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Resources</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">About Rakesh</a>
        </div>

        <button className="bg-white text-slate-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10">
          Start Learning
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

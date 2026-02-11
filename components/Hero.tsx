
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 blur-[120px] rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full border border-white/10 text-cyan-400 text-xs font-bold tracking-widest uppercase bg-cyan-500/5">
          Dedicated Computer Science Portal
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Master the Language of the <span className="gradient-text">Future</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Premium coding tutorials, software mastery, and digital literacy resources tailored for students from Class 5 to 10.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#classes" className="w-full sm:w-auto px-10 py-4 bg-indigo-600 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30 active:scale-95">
            Explore Curriculums
          </a>
          <button className="w-full sm:w-auto px-10 py-4 glass border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all active:scale-95">
            View Syllabus
          </button>
        </div>
      </div>

      <div className="mt-20 w-full max-w-6xl glass p-1 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/40 relative">
        <div className="absolute top-4 left-4 flex gap-2 z-20">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&h=600" 
          alt="Modern Computer Science Interface" 
          className="w-full h-auto rounded-[22px] opacity-70 contrast-125"
        />
      </div>
    </section>
  );
};

export default Hero;

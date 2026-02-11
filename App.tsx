
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClassCard from './components/ClassCard';
import ChatAssistant from './components/ChatAssistant';
import LessonView from './components/LessonView';
import { CLASSES } from './constants';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>({ type: 'home' });

  const handleSelectChapter = (classId: number, chapter: string) => {
    setView({ type: 'lesson', classId, chapterName: chapter });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackHome = () => {
    setView({ type: 'home' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0f172a] selection:bg-indigo-500/30">
      <Navbar />
      
      <main>
        {view.type === 'home' ? (
          <>
            <Hero />

            {/* Classes Section */}
            <section id="classes" className="py-24 px-6 relative overflow-hidden">
              {/* Subtle background circuit lines */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                      <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Choose Your <span className="gradient-text">Tech Track</span></h2>
                  <p className="text-slate-400 max-w-xl mx-auto">
                    Explore dedicated Computer Science modules designed by Rakesh to transform you into a digital innovator.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {CLASSES.map((item) => (
                    <ClassCard 
                      key={item.id} 
                      item={item} 
                      onSelectChapter={(chapter) => handleSelectChapter(item.id, chapter)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 px-6 bg-indigo-600/5">
              <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "Code Lines Written", value: "1.2M+" },
                  { label: "CS Graduates", value: "15k+" },
                  { label: "Projects Built", value: "4,500+" },
                  { label: "Digital Literacy", value: "100%" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-indigo-300 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Feature Section */}
            <section className="py-24 px-6">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-8 leading-tight">
                    Why Students Code with <br />
                    <span className="text-indigo-400">Learn with Rakesh</span>
                  </h2>
                  <div className="space-y-6">
                    {[
                      { title: "Hands-on Programming", desc: "Learn by building real-world applications and scripts.", icon: "👨‍💻" },
                      { title: "Hardware Insights", desc: "Understand the silicon that powers the world around us.", icon: "⚙️" },
                      { title: "24/7 Tech Support", desc: "Debugging and concepts simplified by Rakesh Bot.", icon: "🤖" }
                    ].map((feature, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                        <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{feature.icon}</div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                          <p className="text-slate-400 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600&h=400" 
                    alt="Programming Feature" 
                    className="relative z-10 rounded-3xl shadow-2xl border border-white/5 grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </section>
          </>
        ) : (
          <LessonView 
            classId={view.classId} 
            chapterName={view.chapterName} 
            onBack={handleBackHome} 
          />
        )}
      </main>

      <footer className="py-12 px-6 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center font-bold text-[10px]">R</div>
              <span className="font-bold tracking-tight">Learn with <span className="text-indigo-400">Rakesh</span></span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Empowering students to build the digital world of tomorrow.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Course Catalog</a>
            <a href="#" className="hover:text-white transition-colors">Resources</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-slate-500 text-sm">
            © 2024 Learn with Rakesh. Computer Science Excellence.
          </div>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  );
};

export default App;

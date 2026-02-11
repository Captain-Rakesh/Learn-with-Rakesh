
import React from 'react';
import { ClassItem } from '../types';

interface Props {
  item: ClassItem;
  onSelectChapter: (chapter: string) => void;
}

const ClassCard: React.FC<Props> = ({ item, onSelectChapter }) => {
  return (
    <div 
      onClick={() => onSelectChapter(item.chapters[0])}
      className="glass-card glass p-8 rounded-3xl transition-all duration-300 group cursor-pointer border border-white/5 relative overflow-hidden flex flex-col h-full"
    >
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
      
      {/* Decorative background gradient */}
      <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${item.color} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="text-4xl">{item.icon}</div>
        <div className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 uppercase tracking-tighter">CS Specialist</div>
      </div>

      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {item.description}
      </p>
      
      <div className="flex-1">
        <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mb-4">Curriculum Chapters</p>
        <div className="space-y-3">
          {item.chapters.map((chapter, idx) => (
            <div key={idx} className="flex items-center gap-3 group/item">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color} group-hover/item:scale-125 transition-transform`}></div>
              <span className="text-sm text-slate-300 group-hover/item:text-white transition-colors">{chapter}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5">
        <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all active:scale-[0.98] group-hover:border-indigo-500/30">
          Access Course Materials
        </button>
      </div>
    </div>
  );
};

export default ClassCard;

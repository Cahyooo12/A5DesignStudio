
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { SectionId, View } from '../types';

interface HeroProps {
  onViewChange: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onViewChange }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id={SectionId.Home} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10">
        {/* Artistic & Powerful Headline */}
        <h1 className="mb-10 select-none">
          <span className="block text-5xl md:text-7xl lg:text-[100px] font-black text-white leading-[0.9] uppercase tracking-[-0.05em] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.2)]">Kreatif</span>
          </span>
          <span className="block text-4xl md:text-6xl lg:text-[85px] font-medium text-white/80 leading-[1.1] uppercase tracking-[-0.05em] animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            <span className="italic font-black text-white">Digital</span> Anda.
          </span>
        </h1>

        {/* Minimalist & Elegant Description */}
        <p className="text-zinc-500 text-base md:text-lg max-w-lg mx-auto mb-16 leading-relaxed font-medium tracking-tight animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
          Transformasi visi menjadi realitas digital prestisius <br className="hidden md:block" /> 
          melalui desain strategis yang melampaui ekspektasi.
        </p>

        {/* Action Buttons with Refined Effects */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-600">
          <button 
            onClick={() => onViewChange(View.Portfolio)}
            className="group w-full sm:w-auto bg-white text-black px-12 py-5 rounded-full font-black text-sm hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center justify-center space-x-4 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-blue-500/20"
          >
            <span className="tracking-widest uppercase">Lihat Portofolio</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
          </button>
          
          <button 
            onClick={() => scrollTo(SectionId.Services)}
            className="w-full sm:w-auto flex items-center justify-center space-x-4 text-zinc-500 font-bold text-[11px] uppercase tracking-[0.3em] hover:text-white transition-all py-3 group"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-400/50 group-hover:bg-blue-400/5 transition-all duration-500">
              <Play size={16} className="fill-current ml-1 text-zinc-700 group-hover:text-blue-400 transition-colors" />
            </div>
            <span>Jelajahi Solusi</span>
          </button>
        </div>
      </div>

      {/* Decorative Horizontal Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
    </section>
  );
};

export default Hero;


import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { SectionId, View } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onViewChange: (view: View) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onViewChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: SectionId.Home, view: View.Home },
    { name: 'Portfolio', id: 'portfolio', view: View.Portfolio },
    { name: 'Tentang', id: SectionId.About, view: View.Home },
    { name: 'Layanan', id: SectionId.Services, view: View.Home },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (currentView !== link.view) {
      onViewChange(link.view);
      // If going to home and it has a section ID, wait for render then scroll
      if (link.view === View.Home) {
        setTimeout(() => scrollTo(link.id), 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (link.view === View.Home) {
      scrollTo(link.id);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

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
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-blue-500/30">
      <header className="fixed w-full z-50 top-0 left-0 flex justify-center pointer-events-none pt-4 transition-all duration-500">
        <nav 
          className={`
            pointer-events-auto flex items-center justify-between transition-all duration-500 ease-in-out
            ${scrolled 
              ? 'w-[92%] md:w-[85%] lg:w-[70%] bg-zinc-950/60 backdrop-blur-2xl border border-white/10 py-3 px-6 md:px-8 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
              : 'w-full bg-transparent py-6 px-6 md:px-12 rounded-none border-transparent'
            }
          `}
        >
          <div 
            className="flex items-center space-x-2.5 group cursor-pointer" 
            onClick={() => { onViewChange(View.Home); window.scrollTo({top:0, behavior:'smooth'}); }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative w-9 h-9 bg-gradient-to-tr from-blue-600 to-purple-700 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[10deg] shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <Sparkles size={18} className="text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter uppercase leading-none">A5 Studio</span>
              <span className={`text-[8px] font-bold tracking-[0.3em] uppercase transition-opacity duration-500 ${scrolled ? 'opacity-50' : 'opacity-30'}`}>Creative Agency</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={`${link.view}-${link.id}`}
                onClick={() => handleNavClick(link)}
                className={`relative group text-[11px] font-bold transition-colors uppercase tracking-[0.15em] ${
                  (currentView === link.view && link.id === (currentView === View.Portfolio ? 'portfolio' : SectionId.Home)) 
                  ? 'text-white' 
                  : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                  (currentView === link.view && link.id === (currentView === View.Portfolio ? 'portfolio' : SectionId.Home)) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button 
               onClick={() => { if(currentView !== View.Home) onViewChange(View.Home); setTimeout(() => scrollTo(SectionId.Contact), 150); }}
               className="relative overflow-hidden group bg-white text-black px-7 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all hover:pr-10"
            >
              <span className="relative z-10">Mulai Proyek</span>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                <ArrowUpRight size={16} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white -z-0"></div>
            </button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? 'bg-white/5' : 'bg-transparent'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center p-8 pointer-events-auto animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="absolute top-8 right-8 p-3 bg-white/5 rounded-full"
            >
              <X size={32} />
            </button>
            
            <div className="space-y-8 text-center">
              {navLinks.map((link) => (
                <button
                  key={`mobile-${link.view}-${link.id}`}
                  onClick={() => handleNavClick(link)}
                  className="block w-full text-4xl font-black uppercase tracking-tighter hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <button 
              onClick={() => { if(currentView !== View.Home) onViewChange(View.Home); setTimeout(() => scrollTo(SectionId.Contact), 150); setIsMenuOpen(false); }}
              className="mt-16 w-full max-w-xs bg-gradient-to-r from-blue-600 to-purple-600 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl"
            >
              Mulai Konsultasi
            </button>
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-black border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={() => {onViewChange(View.Home); window.scrollTo({top:0, behavior:'smooth'})}}>
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <span className="text-xl font-black uppercase tracking-tighter">A5 DESIGN STUDIO</span>
              </div>
              <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed font-medium">
                Kami merancang strategi digital dan visual yang membawa brand Anda ke level berikutnya.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-[10px] opacity-40">Halaman</h4>
              <ul className="space-y-4 text-zinc-400 text-xs font-bold uppercase tracking-wider">
                <li><button onClick={() => onViewChange(View.Home)} className="hover:text-blue-400">Beranda</button></li>
                <li><button onClick={() => onViewChange(View.Portfolio)} className="hover:text-blue-400">Portofolio</button></li>
                <li><button onClick={() => {onViewChange(View.Home); setTimeout(() => scrollTo(SectionId.About), 100)}} className="hover:text-blue-400">Tentang</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-[10px] opacity-40">Tautan</h4>
              <ul className="space-y-4 text-zinc-400 text-xs font-bold uppercase tracking-wider">
                <li><button onClick={() => {onViewChange(View.Home); setTimeout(() => scrollTo(SectionId.Services), 100)}} className="hover:text-blue-400">Layanan</button></li>
                <li><button onClick={() => {onViewChange(View.Home); setTimeout(() => scrollTo(SectionId.Contact), 100)}} className="hover:text-blue-400">Kontak</button></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[9px] font-black tracking-[0.25em] uppercase">
            <p>© 2024 A5 DESIGN STUDIO. ARCHITECTING DIGITAL PRESENCE.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">TikTok</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

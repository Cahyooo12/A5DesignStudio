
import React, { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import { SectionId, View } from './types';
import { Send, Instagram } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.Home);

  const handleViewChange = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <Layout currentView={currentView} onViewChange={handleViewChange}>
      {currentView === View.Home ? (
        <>
          <Hero onViewChange={handleViewChange} />
          <About />
          <Services />
          <Process />
          
          {/* Contact Section - Sleek & High Impact */}
          <section id={SectionId.Contact} className="py-24 lg:py-40 relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-12 lg:p-24 border border-white/10 overflow-hidden shadow-2xl">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] -z-10"></div>

                <div className="max-w-4xl mx-auto text-center">
                  <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">Project Inquiry</span>
                  <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-10 leading-[0.9]">
                    Mari Wujudkan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Ide Kreatif</span> Anda Bersama Kami.
                  </h2>
                  <p className="text-zinc-400 text-lg md:text-xl mb-16 opacity-80 font-medium">
                    Konsultasikan kebutuhan brand Anda secara gratis. Klik tombol di bawah untuk terhubung langsung dengan tim kami.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                    <a 
                      href="https://wa.me/6281234567890" 
                      className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-full font-black text-lg hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center space-x-3 shadow-xl"
                    >
                      <Send size={20} />
                      <span>WHATSAPP KAMI</span>
                    </a>
                    <a 
                      href="https://instagram.com/a5design.studio" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center space-x-3 text-white font-black text-lg group transition-all"
                    >
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-purple-500 transition-colors">
                        <Instagram size={24} />
                      </div>
                      <span className="group-hover:text-purple-400">INSTAGRAM</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Portfolio />
      )}
    </Layout>
  );
};

export default App;

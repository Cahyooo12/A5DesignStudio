
import React from 'react';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.About} className="py-24 lg:py-40 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="Creative Hub" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-10 left-10">
                 <p className="text-4xl font-black text-white">EST. 2024</p>
                 <p className="text-blue-400 font-bold uppercase tracking-widest text-xs mt-2">Creative Excellence</p>
               </div>
            </div>
          </div>
          
          <div>
            <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Kisah Kami</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight uppercase tracking-tighter">Membentuk Identitas Visual Di Era <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 italic">Digital.</span></h2>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-medium">
              <p>
                A5 Design Studio lahir dari visi untuk menjembatani antara kebutuhan bisnis dan estetika konten modern. Kami percaya bahwa setiap brand memiliki cerita unik yang pantas disampaikan dengan cara yang memukau.
              </p>
              <p>
                Kami adalah tim kreatif yang berdedikasi untuk membantu UMKM dan Kreator membangun kehadiran yang kuat di media sosial melalui desain strategis dan video yang menarik perhatian.
              </p>
              <p>
                Fokus kami bukan hanya pada keindahan visual, tetapi pada bagaimana visual tersebut mampu meningkatkan keterlibatan audiens dan membangun loyalitas brand Anda.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
              <div>
                <p className="text-3xl font-black text-white">50+</p>
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Project Sukses</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">98%</p>
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Kepuasan Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

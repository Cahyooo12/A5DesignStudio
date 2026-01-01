
import React from 'react';
import { SectionId } from '../types';

const Process: React.FC = () => {
  const steps = [
    { num: '01', title: 'Briefing', desc: 'Sesi brainstorming untuk memahami visi dan target brand Anda.' },
    { num: '02', title: 'Conceptual', desc: 'Pembuatan moodboard dan strategi konten yang terstruktur.' },
    { num: '03', title: 'Production', desc: 'Eksekusi desain dan editing dengan standar kualitas premium.' },
    { num: '04', title: 'Review', desc: 'Finalisasi dan pengiriman aset konten yang siap tayang.' }
  ];

  return (
    <section id={SectionId.Process} className="py-24 lg:py-40 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Alur Kerja</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">Sederhana<br /><span className="text-zinc-600 italic">& Efektif.</span></h2>
          </div>
          <p className="text-zinc-400 text-lg max-w-sm font-medium leading-relaxed">Proses kami dirancang untuk menghemat waktu Anda sambil memberikan hasil maksimal.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
               <div className="absolute -top-10 -right-10 text-[120px] font-black text-white/[0.02] group-hover:text-blue-500/[0.05] transition-all select-none">
                 {step.num}
               </div>
               <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center font-black text-xs mb-8 shadow-lg">
                 {step.num}
               </div>
               <h4 className="text-xl font-bold uppercase tracking-tight mb-4 relative z-10">{step.title}</h4>
               <p className="text-zinc-500 text-sm leading-relaxed relative z-10 font-medium group-hover:text-zinc-400 transition-colors">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

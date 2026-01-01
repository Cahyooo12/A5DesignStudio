
import React from 'react';
import { Instagram, Video, Palette, ArrowRight } from 'lucide-react';
import { SectionId } from '../types';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Social Media Strategy',
      desc: 'Manajemen feed yang estetik, copywriting yang persuasif, dan optimasi growth audiens untuk meningkatkan kredibilitas brand.',
      icon: <Instagram className="text-blue-500" size={32} />,
      color: 'from-blue-500/20 to-transparent'
    },
    {
      title: 'Premium Video Editing',
      desc: 'Produksi video vertikal (Reels/TikTok) dengan teknik editing modern, hooks yang kuat, dan transisi yang dinamis.',
      icon: <Video className="text-purple-500" size={32} />,
      color: 'from-purple-500/20 to-transparent'
    },
    {
      title: 'Visual Identity Design',
      desc: 'Desain logo, palet warna, dan aset branding yang konsisten untuk menciptakan identitas brand yang tak terlupakan.',
      icon: <Palette className="text-blue-400" size={32} />,
      color: 'from-blue-400/20 to-transparent'
    }
  ];

  return (
    <section id={SectionId.Services} className="py-24 lg:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-purple-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Apa yang Kami Lakukan</span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">Solusi Kreatif <span className="text-zinc-500">End-to-End</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">Dari konsep hingga eksekusi, kami membantu Anda menguasai ruang digital dengan konten yang berkelas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group relative bg-white/[0.02] border border-white/5 p-12 rounded-[2.5rem] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-black border border-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-2xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight leading-none">{service.title}</h3>
                <p className="text-zinc-500 font-medium leading-relaxed mb-10 group-hover:text-zinc-300 transition-colors">
                  {service.desc}
                </p>
                <button className="flex items-center space-x-3 text-white font-bold text-xs uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                  <span>Pelajari Lebih Lanjut</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

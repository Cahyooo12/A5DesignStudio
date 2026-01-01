
import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Neon Pulse Branding',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    size: 'large'
  },
  {
    id: 2,
    title: 'Urban Motion Video',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop',
    size: 'small'
  },
  {
    id: 3,
    title: 'E-Commerce Social',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    size: 'small'
  },
  {
    id: 4,
    title: 'Futuristik App UI',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
    size: 'medium'
  },
  {
    id: 5,
    title: 'Cinematic Reel',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
    size: 'large'
  },
  {
    id: 6,
    title: 'Minimalist Poster',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1541462608141-d758f71e3a53?q=80&w=800&auto=format&fit=crop',
    size: 'small'
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Branding', 'Social', 'Video'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Portfolio */}
        <div className="mb-20">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Karya Kami</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            Studio <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 italic">Showcase.</span>
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl font-medium">
            Kumpulan proyek pilihan yang menggabungkan strategi, estetika, dan teknologi untuk menciptakan dampak digital yang nyata.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="p-2 rounded-full bg-white/5 border border-white/10 flex items-center space-x-2 mr-4">
            <Filter size={14} className="text-zinc-500 ml-2" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 pr-2">Filter</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                filter === cat 
                ? 'bg-white text-black border-white' 
                : 'bg-transparent text-zinc-500 border-white/10 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`group relative rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900 transition-all duration-700 hover:border-blue-500/30 ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                project.size === 'medium' ? 'md:col-span-2' : ''
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-3 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {project.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black">
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center p-16 rounded-[3rem] border border-white/5 bg-zinc-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 blur-[100px] -z-10"></div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">Siap Membuat Karya Luar Biasa?</h2>
          <button 
            onClick={() => { window.scrollTo({top: 0, behavior:'smooth'}); }}
            className="bg-white text-black px-12 py-5 rounded-full font-black text-sm hover:bg-blue-600 hover:text-white transition-all uppercase tracking-widest"
          >
            Hubungi Kami Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React, { useState } from 'react';
import { Play, Disc, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const filters = ['All', 'Producer & Mix', 'Mixing Engineer', 'Mastering'];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.role.includes(activeFilter));

  return (
    <section id="work" className="py-24 bg-darker relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
            <p className="text-slate-400 max-w-md">
              A curated collection of tracks that define my sound. From gritty rock to polished pop.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  activeFilter === filter 
                    ? 'bg-accent text-darker' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative bg-dark rounded-xl overflow-hidden border border-slate-800 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10">
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          <button className="p-3 bg-accent rounded-full text-darker hover:bg-white transition-colors transform scale-0 group-hover:scale-100 duration-300 delay-100">
            <Play className="w-6 h-6 fill-current" />
          </button>
          <button className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors transform scale-0 group-hover:scale-100 duration-300 delay-200">
            <ExternalLink className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
            <p className="text-accent font-medium text-sm">{project.artist}</p>
          </div>
          <Disc className="w-5 h-5 text-slate-600" />
        </div>
        <div className="flex justify-between items-end mt-4 border-t border-slate-800 pt-4">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{project.role}</span>
          <span className="text-xs text-slate-600">{project.year}</span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
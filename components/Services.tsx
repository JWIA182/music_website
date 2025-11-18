import React from 'react';
import { SERVICES, GEAR_LIST } from '../constants';
import { Sliders, Music, Mic2, Scissors, CheckCircle2 } from 'lucide-react';

const iconMap = {
  mix: Sliders,
  produce: Music,
  master: Mic2, // Using Mic2 as a placeholder for Master, logically could be anything
  edit: Scissors
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Studio Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Providing high-end audio solutions for artists, bands, and content creators. 
            Every project gets the attention it deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-darker transition-colors text-accent">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed min-h-[80px]">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-slate-700/50">
                  <p className="text-accent font-bold">{service.priceRange}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gear Section */}
        <div id="gear" className="bg-darker rounded-3xl p-8 md:p-12 border border-slate-800">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h3 className="text-3xl font-bold text-white mb-4">Selected Gear</h3>
              <p className="text-slate-400 mb-6">
                A hybrid setup combining the best of analog warmth with digital precision.
              </p>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://picsum.photos/800/600?grayscale" 
                  alt="Studio Gear" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
              </div>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {GEAR_LIST.map((category) => (
                <div key={category.category}>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {category.category}
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="text-slate-400 text-sm flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { ArrowDown, PlayCircle } from 'lucide-react';
import { TAGLINE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-darker via-dark to-slate-900 opacity-90"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-bold tracking-[0.2em] uppercase animate-fade-in-up">
          Available for Booking
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-6 tracking-tighter leading-tight">
          <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">SONIC</span>
          <span className="block text-accent/90">ALCHEMIST</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 font-light">
          {TAGLINE}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href="#work" 
            className="group relative px-8 py-4 bg-white text-darker font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="relative flex items-center gap-2">
              Listen to Portfolio <PlayCircle className="w-5 h-5" />
            </span>
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border border-slate-700 text-slate-300 font-semibold rounded-full hover:bg-slate-800 hover:border-slate-500 transition-all"
          >
            Get a Quote
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
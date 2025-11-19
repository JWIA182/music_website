import React from 'react';
import { Mail, Instagram, Disc, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-darker relative border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">LET'S MAKE<br />NOISE.</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-lg">
              Ready to take your sound to the next level? Fill out the form or shoot me an email. I usually reply within 24 hours.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-4 text-slate-300 hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">{SOCIAL_LINKS.email}</span>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-accent">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-lg">@jakubwiaderek_audio</span>
              </a>
               <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-accent">
                  <Disc className="w-5 h-5" />
                </div>
                <span className="text-lg">Spotify Playlist</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-1/2">
            <form className="space-y-6 p-8 rounded-3xl glass-panel" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                  <input type="text" className="w-full bg-slate-950/50 border border-slate-700 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Artist / Band</label>
                  <input type="text" className="w-full bg-slate-950/50 border border-slate-700 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="The Rockers" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Project Type</label>
                <select className="w-full bg-slate-950/50 border border-slate-700 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors">
                  <option>Mixing</option>
                  <option>Mastering</option>
                  <option>Full Production</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-950/50 border border-slate-700 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="Tell me about your project..."></textarea>
              </div>

              <button className="w-full bg-accent text-darker font-bold py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Jakub Wiaderek Audio. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
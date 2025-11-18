import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen text-slate-200 selection:bg-accent selection:text-darker font-sans">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <ChatAssistant />
    </div>
  );
};

export default App;
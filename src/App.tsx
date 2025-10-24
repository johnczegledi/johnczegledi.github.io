//import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Skills />
      <Contact />
      <Footer />
    </div>;
}
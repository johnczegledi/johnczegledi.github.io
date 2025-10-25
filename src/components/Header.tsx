import { useEffect, useState } from 'react';
import { Menu, X, Mail, Linkedin, Clock } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // NEW STATE: Holds the ID of the section we need to scroll to
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // NEW EFFECT: This runs ONLY after the component re-renders (i.e., after the menu closes)
  useEffect(() => {
    if (pendingScrollId) {
      const element = document.getElementById(pendingScrollId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
        // Clear the state after scrolling to prevent re-running
        setPendingScrollId(null); 
      }
    }
  }, [pendingScrollId]); // Dependency: Runs whenever pendingScrollId changes

  // UPDATED SCROLL LOGIC
  const scrollToSection = (id: string) => {
    // 1. Set the ID to scroll to
    setPendingScrollId(id);
    
    // 2. Close the menu immediately. This triggers the re-render.
    setIsMenuOpen(false); 
    
    // The useEffect hook will handle the scroll *after* the menu closes.
  };

  return <>
      {/* Top Info Bar */}
      <div className="bg-gray-900 text-white py-2.5 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-teal-400" />
              <span>czegledijohn@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} className="text-teal-400" />
              <a
                href="https://linkedin.com/in/johnczegledi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-400 hover:underline hover:text-teal-300"
              >
                linkedin.com/in/johnczegledi
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-teal-400" />
              <span>Open Hours: Mon - Sat 9:00 - 18:00 (UTC+8)</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <nav className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-gray-900">John Czegledi</div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Industries
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Contact
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-600 transition-colors text-left font-medium py-2">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 transition-colors text-left font-medium py-2">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 transition-colors text-left font-medium py-2">
                  Services
                </button>
                <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-teal-600 transition-colors text-left font-medium py-2">
                  Industries
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 transition-colors text-left font-medium py-2">
                  Contact
                </button>
              </div>
            </div>}
        </nav>
      </header>
    </>;
}
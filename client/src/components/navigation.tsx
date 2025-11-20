import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animation/Reveal";


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <Reveal>
      <nav className="fixed top-0 w-full bg-cyber-slate/90 backdrop-blur-md border-b border-cyber-gold/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="font-orbitron text-xl font-bold text-cyber-gold">CryptoOpsec</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('foundations')}
                  className="text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  Foundations
                </button>
                <button
                  onClick={() => scrollToSection('journey')}
                  className="text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  Security Journey
                </button>
                <button
                  onClick={() => scrollToSection('toolkit')}
                  className="text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  Toolkit
                </button>
                <button
                  onClick={() => scrollToSection('tools')}
                  className="text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  Tools
                </button>
                <button
                  onClick={() => scrollToSection('resources')}
                  className="text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  Resources
                </button>
                <Button className="bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold shadow-none">
                  Launch APP
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-cyber-gold"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cyber-slate/95">
                <button
                  onClick={() => scrollToSection('foundations')}
                  className="block text-gray-300 hover:text-cyber-gold px-3 py-2 text-base font-medium w-full text-left"
                >
                  Foundations
                </button>
                <button
                  onClick={() => scrollToSection('journey')}
                  className="block text-gray-300 hover:text-cyber-gold px-3 py-2 text-base font-medium w-full text-left"
                >
                  Security Journey
                </button>
                <button
                  onClick={() => scrollToSection('toolkit')}
                  className="block text-gray-300 hover:text-cyber-gold px-3 py-2 text-base font-medium w-full text-left"
                >
                  Toolkit
                </button>
                <button
                  onClick={() => scrollToSection('tools')}
                  className="block text-gray-300 hover:text-cyber-gold px-3 py-2 text-base font-medium w-full text-left"
                >
                  Tools
                </button>
                <button
                  onClick={() => scrollToSection('resources')}
                  className="block text-gray-300 hover:text-cyber-gold px-3 py-2 text-base font-medium w-full text-left"
                >
                  Resources
                </button>
              </div>
            </div>
          )}


        </div>
      </nav>
    </Reveal>
  );
}

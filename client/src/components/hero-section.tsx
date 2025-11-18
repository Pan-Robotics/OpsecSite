import { Shield, Download, ChevronDown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animation/Reveal";


export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Reveal>
      <section className="relative min-h-screen flex items-center justify-center cyber-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/50 to-cyber-dark"></div>

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute h-px w-full bg-cyber-gold animate-grid-flow top-1/4"></div>
          <div className="absolute h-px w-full bg-cyber-gold animate-grid-flow top-3/4" style={{ animationDelay: '-10s' }}></div>
          <div className="absolute w-px h-full bg-cyber-gold animate-grid-flow left-1/4" style={{ animationDelay: '-5s' }}></div>
          <div className="absolute w-px h-full bg-cyber-gold animate-grid-flow left-3/4" style={{ animationDelay: '-15s' }}></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8 animate-float">
            <Shield className="w-20 h-20 text-cyber-gold mx-auto" />
          </div>

          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            Secure Your Crypto Life.
            <span className="text-cyber-gold block">Start Here.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            The complete best practices guide to <em><strong>Not</strong></em> losing your crypto !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-full">
            <Button
              onClick={() => scrollToSection('journey')}
              className="bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold px-6 sm:px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-none w-full sm:w-auto"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Security Journey
            </Button>

            <Button
              variant="outline"
              asChild
              className="border-2 border-cyber-gold text-cyber-gold hover:bg-cyber-gold hover:text-cyber-dark font-semibold px-6 sm:px-8 py-4 rounded-lg transition-all duration-300 bg-transparent backdrop-blur-sm shadow-none w-full sm:w-auto"
            >
              <a href="/downloads/CryptoOPSEC_Crypto_Security_Checklist.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Security Checklist
              </a>
            </Button>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() =>
                document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })
              }
              className="transition"
            >
              <p className="text-cyber-gold font-mono text-sm mb-2">Scroll to begin</p>
              <ChevronDown className="w-6 h-6 text-cyber-gold animate-bounce mx-auto" />
            </button>
          </div>
        </div>

      </section>
    </Reveal>
  );
}

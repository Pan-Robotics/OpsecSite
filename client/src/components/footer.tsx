import { SiX, SiTelegram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animation/Reveal";


export default function Footer() {

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }


  return (
    <Reveal>
      <footer className="bg-cyber-dark border-t border-cyber-gold/20 py-12">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="md:col-span-2 mb-8">
            <div className="flex flex-col items-start">
              <p className="font-orbitron text-xl font-bold text-cyber-gold">CryptoOpsec</p>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering crypto users with practical operational security knowledge.
                Your financial sovereignty depends on your security practices.
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/cryptoopseccom" target="_blank" rel="noopener noreferrer">
                  <SiX className="w-6 h-6 text-cyber-steel hover:text-cyber-gold cursor-pointer transition-colors" />
                </a>
                <a href="https://t.me/cryptoopseccom" target="_blank" rel="noopener noreferrer">
                  <SiTelegram className="w-6 h-6 text-cyber-steel hover:text-cyber-gold cursor-pointer transition-colors" />
                </a>
              </div>
            </div>

          </div>
          <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">

            <div>
              <p className="text-gray-400 mb-4 max-w-md text-lg">Resources</p>
              <div className="flex flex flex-col items-start gapy-8 text-start">
                <button
                  className="text-start text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  <a href="/downloads/CryptoOPSEC_Crypto_Fundamentals_Guide.pdf" download>
                    Core Concepts Guide
                  </a>
                </button>
                <button
                  className="text-start text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  <a href="/downloads/CryptoOPSEC_Crypto_Security_Checklist.pdf" download>
                    Security Checklist
                  </a>
                </button>
                <button
                  className="text-start text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  <a href="/downloads/CryptoOPSEC_Crypto_Exchange_Security_Checklist.pdf" download>
                    Exchange Audit Checklist
                  </a>
                </button>
                <button
                  className="text-start text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  <a href="/downloads/CryptoOPSEC_Hot_Wallet_Guide.pdf" download>
                    Hot Wallet Setup Guide
                  </a>
                </button>
                <button
                  className="text-start text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  <a href="/downloads/CryptoOPSEC_Cold_Wallet_Guide.pdf" download>
                    Cold Storage Setup Guide
                  </a>
                </button>
                <button
                  className="text-start text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  <a href="/downloads/CryptoOPSEC_Crypto_Scam_Cheat_Sheet.pdf" download>
                    Scam Cheat Sheet
                  </a>
                </button>
                <button
                  className="text-start text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  <a href="/downloads/CryptoOPSEC_50_Point_Security_Checklist.pdf" download>
                    CryptoOPSEC Security
                  </a>
                </button>
                <button
                  className="text-start text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  <a href="/downloads/CryptoOPSEC_Scam_Detection_Guide.pdf" download>
                    Threat Detection Guide
                  </a>
                </button>

              </div>
            </div>
            <div>
              <p className="text-gray-400 mb-4 max-w-md text-lg">Sections</p>
              {/* Desktop Navigation */}

              <div className="flex flex flex-col items-start gapy-8">
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

              </div>
            </div>


            <div>
              <p className="text-gray-400 mb-4 max-w-md text-lg">Developers</p>
              <div className="flex flex flex-col items-start gapy-8 text-start">
                <button
                  className="text-start text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  <a href="https://github.com/alexdada555" download>
                    Alexander Dada
                  </a>
                </button>
                <button
                  className="text-start text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  <a href="https://github.com/sylvia5555" download>
                    Sylvia Yousif
                  </a>
                </button>
                <button
                  className="text-start text-gray-300 hover:text-cyber-gold transition-colors duration-200"
                >
                  <a href="https://github.com/ai-28" download>
                    Aiman Jamil
                  </a>
                </button>
              </div>


            </div>

          </div>
          <div className="border-t border-cyber-steel mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 CryptoOpsec.com. Educational content only. Not financial advice.
              <span className="text-cyber-gold"> Stay safe out there.</span>
            </p>
          </div>
        </div>
      </footer>
    </Reveal>
  );
}

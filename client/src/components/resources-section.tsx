import { FileText, Shield, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/animation/Reveal";


export default function ResourcesSection() {
  return (
    <Reveal>
      <section id="resources" className="py-20 bg-cyber-slate">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-cyber-gold">Download Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take these comprehensive security guides with you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cyber-dark p-8 rounded-xl border border-cyber-gold/20 shadow-none">
              <div className="flex items-center mb-6">
                <FileText className="text-cyber-gold w-8 h-8 mr-4" />
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white">Complete Security Checklist</h3>
                  <p className="text-gray-400">50-point comprehensive audit</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Step-by-step security audit checklist covering exchanges, wallets,
                operational security, and emergency procedures.
              </p>
              <Button asChild className="w-full bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold shadow-none">
                <a href="/downloads/CryptoOPSEC_50_Point_Security_Checklist.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF (38 KB)
                </a>
              </Button>
            </div>

            <div className="bg-cyber-dark p-8 rounded-xl border border-cyber-gold/20 shadow-none">
              <div className="flex items-center mb-6">
                <Shield className="text-cyber-gold w-8 h-8 mr-4" />
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white">Scam Detection Guide</h3>
                  <p className="text-gray-400">Visual identification handbook</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Real examples of phishing attempts, social engineering tactics,
                and red flags to watch for in the crypto space.
              </p>
              <Button asChild className="w-full bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold shadow-none">
                <a href="/downloads/CryptoOPSEC_Scam_Detection_Guide.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Threat Detection Guide (47 KB)
                </a>
              </Button>
            </div>
          </div>

          {/* Follow on X */}
          <div className="mt-16 bg-gradient-to-r from-cyber-gold/10 to-cyber-gold/5 p-8 rounded-xl border border-cyber-gold/30">
            <div className="text-center">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest security alerts, tool recommendations, and threat intelligence
                by following us on X (formerly Twitter).
              </p>
              <div className="flex justify-center space-x-4">
                <Button asChild className="bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold shadow-none px-8 py-3">
                  <a href="https://x.com/cryptoopseccom" target="_blank" rel="noopener noreferrer">
                    Follow on X
                  </a>
                </Button>
                <Button asChild className="bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold shadow-none px-8 py-3">
                  <a href="https://t.me/cryptoopseccom" target="_blank" rel="noopener noreferrer">
                    Follow on Telegram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

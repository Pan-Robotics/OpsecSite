import { Network, KeyRound, ShieldAlert, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animation/Reveal";

export default function FoundationsSection() {
  return (
    <Reveal>
      <section id="foundations" className="py-20 bg-cyber-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-cyber-gold">Security Foundations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master these core concepts before diving into advanced security practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Blockchain Basics */}
            <div className="bg-cyber-slate p-8 rounded-xl border border-cyber-gold/20 hover:border-cyber-gold/40 transition-all duration-300 shadow-none">
              <div className="text-center mb-6">
                <h3 className="font-orbitron text-xl font-bold text-cyber-gold">Blockchain Basics</h3>
              </div>
              <div className="mb-4">
                {/* <Network className="w-12 h-12 text-cyber-gold mt-4 mx-auto" /> */}

              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                Understand distributed ledgers, consensus mechanisms, and why decentralization
                matters for your financial sovereignty.
              </p>
            </div>

            {/* Wallets & Keys */}
            <div className="bg-cyber-slate p-8 rounded-xl border border-cyber-gold/20 hover:border-cyber-gold/40 transition-all duration-300 shadow-none">
              <div className="text-center mb-6">

                <h3 className="font-orbitron text-xl font-bold text-cyber-gold">Wallets & Keys</h3>
              </div>
              <div className="mb-4">
                {/* <KeyRound className="w-12 h-12 text-cyber-gold mb-4 mx-auto" /> */}
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                Learn the difference between public/private keys, seed phrases, and why
                "not your keys, not your crypto" is the golden rule.
              </p>
            </div>

            {/* Threat Landscape */}
            <div className="bg-cyber-slate p-8 rounded-xl border border-cyber-gold/20 hover:border-cyber-gold/40 transition-all duration-300 shadow-none">
              <div className="text-center mb-6">
                <h3 className="font-orbitron text-xl font-bold text-cyber-gold">Threat Landscape</h3>
              </div>
              <div className="mb-4">
                {/* <ShieldAlert className="w-12 h-12 text-cyber-gold mb-4 mx-auto" /> */}

              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                Identify common attack vectors: phishing, SIM swaps, clipboard malware,
                social engineering, and smart contract vulnerabilities.
              </p>
            </div>
          </div>

          {/* Core Concepts Guide Download */}
          <div className="mt-16 text-center">
            <Button asChild className="bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold px-8 py-4 rounded-lg shadow-none">
              <a href="/downloads/CryptoOPSEC_Crypto_Fundamentals_Guide.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Core Concepts Guide
              </a>
            </Button>
            <p className="text-gray-400 text-sm mt-2">Essential foundations for crypto security (PDF, 42 KB)</p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

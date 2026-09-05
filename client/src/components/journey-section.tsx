import { AlertCircle, X, Check, Download, List, Lightbulb, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import cryptogold from '../../../attached_assets/images/—Pngtree—gold bitcoin cryptocurrency coin 3d_16672635.png';
import exchangingimg from '../../../attached_assets/images/wmremove-transformed.png'
import wallet from '../../../attached_assets/images/wallet.png'
import { motion } from "motion/react"
import bitcoin from '../../../attached_assets/images/bitcoin.png'
import { Reveal } from "@/components/animation/Reveal";

export default function JourneySection() {
  return (
    <Reveal>
      <section id="journey" className="py-20 bg-cyber-slate">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-cyber-gold">Your Security Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow this step-by-step path from crypto beginner to security expert.
            </p>
          </div>

          {/* Step 1: Exchanges */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Computer security warning and digital threat protection"
                className="rounded-xl shadow-2xl w-full h-auto border border-red-500/20"
              /> */}
                <img
                  src={exchangingimg}
                  alt="Computer security warning and digital threat protection"
                  className="w-[80%] mx-auto"
                />

              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <h3 className="font-orbitron text-2xl font-bold text-white">Understand Exchange Risks</h3>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-lg mb-6">
                  <div className="flex items-center mb-3">
                    <AlertCircle className="text-red-400 w-5 h-5 mr-2" />
                    <span className="text-red-400 font-semibold">Critical Warning</span>
                  </div>
                  <p className="text-red-300">
                    <strong>Still storing on exchanges? You're gambling.</strong> FTX, Mt. Gox, and countless others
                    have shown that centralized exchanges are single points of failure.
                  </p>
                </div>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <X className="text-red-400 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <span>Exchange hacks cost users billions annually</span>
                  </li>
                  <li className="flex items-start">
                    <X className="text-red-400 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <span>Regulatory seizures can freeze your funds</span>
                  </li>
                  <li className="flex items-start">
                    <X className="text-red-400 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <span>You don't control your private keys</span>
                  </li>
                </ul>

                <Button asChild className="mt-6 bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold shadow-none">
                  <a href="/downloads/CryptoOPSEC_Crypto_Exchange_Security_Checklist.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Exchange Audit Checklist
                  </a>
                </Button>
              </div>

            </div>
          </div>

          {/* Step 2: Hot Wallets */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              <div className="order-2 md:order-1">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <h3 className="font-orbitron text-2xl font-bold text-white">Setup Hot Wallets Properly</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Hot wallets give you control of your keys while staying connected to the internet.
                  Perfect for daily DeFi activities, but require careful setup.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Check className="text-green-400 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-white font-semibold">Recommended Wallets:</span>
                      <span className="text-gray-300"> MetaMask, Trust Wallet, Phantom</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="text-green-400 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-white font-semibold">Security Essentials:</span>
                      <span className="text-gray-300"> Hardware 2FA, Password manager, Seed phrase backup</span>
                    </div>
                  </div>
                </div>

                <div className="bg-cyber-gold/10 border border-cyber-gold/30 p-4 rounded-lg mb-6">
                  <div className="flex items-center">
                    <Lightbulb className="text-cyber-gold w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="text-cyber-gold font-semibold">Pro Tip: </span>
                    <span className="text-gray-300">Never store your seed phrase digitally. Physical backup only.</span>
                  </div>
                </div>

                <Button asChild className="bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold shadow-none">
                  <a href="/downloads/CryptoOPSEC_Hot_Wallet_Guide.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Hot Wallet Setup Guide
                  </a>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                {/* <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Cryptocurrency wallet interface and mobile security setup"
                className="rounded-xl shadow-2xl w-full h-auto border border-cyber-gold/20"
              /> */}
                {/* <img src="https://mkt-site-asset.crypto.com/assets/home-page/defi.webp" alt="iPhone showing Defi Earn page of the Crypto.com App" loading="lazy" className="w-full" /> */}
                <img src={wallet} alt="iPhone showing Defi Earn page of the Crypto.com App" loading="lazy" className="w-full" />

              </div>
            </div>
          </div>

          {/* Step 3: Cold Storage */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={bitcoin}
                  alt="Hardware cryptocurrency wallet device for cold storage security"
                  className="w-[90%] mx-auto"
                />

              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <h3 className="font-orbitron text-2xl font-bold text-white">Master Cold Storage</h3>
                </div>

                <p className="text-cyber-gold text-lg font-semibold mb-4">Secure your future. Cold is the new gold.</p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Cold storage keeps your private keys completely offline, providing maximum security
                  for long-term holdings. Essential for any serious crypto investor.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-cyber-dark p-4 rounded-lg border border-cyber-gold/20 text-center">
                    <svg className="w-8 h-8 mx-auto mb-2 text-cyber-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <circle cx="12" cy="12" r="2" />
                      <path d="M6 12h.01M18 12h.01" />
                    </svg>
                    <div className="text-sm font-semibold text-white">Hardware Wallets</div>
                    <div className="text-xs text-gray-400">Ledger, Trezor</div>
                  </div>
                  <div className="bg-cyber-dark p-4 rounded-lg border border-cyber-gold/20 text-center">
                    <svg className="w-8 h-8 mx-auto mb-2 text-cyber-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10,9 9,9 8,9" />
                    </svg>
                    <div className="text-sm font-semibold text-white">Paper Wallets</div>
                    <div className="text-xs text-gray-400">Offline generation</div>
                  </div>
                  <div className="bg-cyber-dark p-4 rounded-lg border border-cyber-gold/20 text-center">
                    <svg className="w-8 h-8 mx-auto mb-2 text-cyber-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                      <path d="M7 11h10" />
                      <path d="M10 7h4" />
                    </svg>
                    <div className="text-sm font-semibold text-white">Air-gapped</div>
                    <div className="text-xs text-gray-400">Offline devices</div>
                  </div>
                </div>

                <Button asChild className="bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold shadow-none">
                  <a href="/downloads/CryptoOPSEC_Cold_Wallet_Guide.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Cold Storage Setup Guide
                  </a>
                </Button>
              </div>

            </div>
          </div>

          {/* Step 4: Scam Detection */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              <div className="order-2 md:order-1">
                <div className="flex items-center mb-6">
                  <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <h3 className="font-orbitron text-2xl font-bold text-white">Detect Scams & Social Engineering</h3>
                </div>

                <p className="text-red-400 text-lg font-semibold mb-4">Don't trust links. Trust yourself.</p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Social engineering attacks target the weakest link: you. Learn to identify and
                  avoid the most common crypto scams before they cost you everything.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-red-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span className="text-red-400 font-semibold">Email Phishing</span>
                    </div>
                    <p className="text-red-300 text-sm">Fake exchange notifications, wallet "security alerts"</p>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-red-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span className="text-red-400 font-semibold">Discord/Telegram Scams</span>
                    </div>
                    <p className="text-red-300 text-sm">Fake moderators offering "support", DM scams</p>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-red-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      <span className="text-red-400 font-semibold">Fake DApps</span>
                    </div>
                    <p className="text-red-300 text-sm">Copycat sites, malicious smart contracts</p>
                  </div>
                </div>

                <Button asChild className="bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold shadow-none">
                  <a href="/downloads/CryptoOPSEC_Crypto_Scam_Cheat_Sheet.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Scam Cheat Sheet
                  </a>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/man-doing-crypto-scam-illustration-svg-download-png-12141714.png" alt="Cybersecurity shield protecting against digital threats and fraud" className="w-[80%] mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

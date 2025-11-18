import { Lock, Shield, Globe, Monitor, HardDrive, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animation/Reveal";

export default function ToolkitSection() {
  return (
    <Reveal>
      <section id="toolkit" className="py-20 bg-cyber-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-cyber-gold">Security Toolkit</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential tools and services to fortify your crypto security posture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Password Managers */}
            <div className="bg-cyber-slate p-6 rounded-xl border border-cyber-gold/20 shadow-none">
              <div className="text-center mb-4">
                <Lock className="w-12 h-12 text-cyber-gold mb-3 mx-auto" />
                <h3 className="font-orbitron text-lg font-bold text-white">Password Managers</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• <a href="https://bitwarden.com" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">Bitwarden</a> (Open source)</li>
                <li>• <a href="https://1password.com" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">1Password</a></li>
                <li>• <a href="https://keepass.info" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">KeePass</a> (Local storage)</li>
              </ul>
            </div>

            {/* 2FA Apps */}
            <div className="bg-cyber-slate p-6 rounded-xl border border-cyber-gold/20 shadow-none">
              <div className="text-center mb-4">
                <Shield className="w-12 h-12 text-cyber-gold mb-3 mx-auto" />
                <h3 className="font-orbitron text-lg font-bold text-white">2FA Apps</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• <a href="https://authy.com" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">Authy</a></li>
                <li>• <a href="https://support.google.com/accounts/answer/1066447" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">Google Authenticator</a></li>
                <li>• Hardware keys (<a href="https://www.yubico.com" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">YubiKey</a>)</li>
              </ul>
            </div>

            {/* VPN Services */}
            <div className="bg-cyber-slate p-6 rounded-xl border border-cyber-gold/20 shadow-none">
              <div className="text-center mb-4">
                <Globe className="w-12 h-12 text-cyber-gold mb-3 mx-auto" />
                <h3 className="font-orbitron text-lg font-bold text-white">VPN Services</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• <a href="https://protonvpn.com" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">ProtonVPN</a></li>
                <li>• <a href="https://mullvad.net" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">Mullvad</a></li>
                <li>• <a href="https://nordvpn.com" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">NordVPN</a></li>
              </ul>
            </div>

            {/* Secure OS */}
            <div className="bg-cyber-slate p-6 rounded-xl border border-cyber-gold/20 shadow-none">
              <div className="text-center mb-4">
                <Monitor className="w-12 h-12 text-cyber-gold mb-3 mx-auto" />
                <h3 className="font-orbitron text-lg font-bold text-white">Secure Operating Systems</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• <a href="https://www.qubes-os.org" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">Qubes OS</a></li>
                <li>• <a href="https://tails.boum.org" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">Tails</a></li>
                <li>• <a href="https://grapheneos.org" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">GrapheneOS</a> (Mobile)</li>
              </ul>
            </div>

            {/* Hardware */}
            <div className="bg-cyber-slate p-6 rounded-xl border border-cyber-gold/20 shadow-none">
              <div className="text-center mb-4">
                <HardDrive className="w-12 h-12 text-cyber-gold mb-3 mx-auto" />
                <h3 className="font-orbitron text-lg font-bold text-white">Hardware Security</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• <a href="https://www.ledger.com" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">Ledger Nano S/X</a></li>
                <li>• <a href="https://trezor.io" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">Trezor Model T</a></li>
                <li>• <a href="https://coldcard.com" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:text-cyber-gold-dark transition-colors">Coldcard</a></li>
              </ul>
            </div>


          </div>
        </div>
      </section>
    </Reveal>
  );
}

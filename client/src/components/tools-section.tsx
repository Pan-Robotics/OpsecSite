import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animation/Reveal";

// DYOR app URL — override with VITE_DYOR_URL at build time if the subdomain changes.
const DYOR_URL = import.meta.env.VITE_DYOR_URL ?? "https://dyor.cryptoopsec.com";

const DYOR_FEATURES = [
  "Asset-class-aware scoring",
  "A–D conviction tiers",
  "Token screener",
  "Portfolio & barbell tools",
  "Agent-callable (MCP)",
];

export default function ToolsSection() {
  return (
    <Reveal>
      <section
        id="tools"
        className="relative py-20 flex flex-col justify-start items-center p-4 overflow-x-hidden min-h-[480px] m-0 bg-[url('https://mkt-site-asset.crypto.com/assets/home-page/bento-layout/win-btc-mobile-v2.webp')] bg-center bg-cover bg-no-repeat box-border"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-cyber-gold">
              CryptoOpsec Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Self-custody-friendly security and research tools. The first is live now.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {/* DYOR — live */}
            <div className="rounded-2xl border border-cyber-gold/30 bg-cyber-slate/80 backdrop-blur-md p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyber-gold text-cyber-dark text-xl">
                  🧭
                </span>
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white leading-tight">DYOR</h3>
                  <p className="text-xs text-gray-400">Do Your Own Research</p>
                </div>
                <span className="ml-auto text-xs font-semibold px-2 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/30">
                  ● LIVE
                </span>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                A crypto-token qualification engine — resolves any token cross-chain and scores it on
                fundamentals, tokenomics, on-chain, social, and dev activity, judged against its own
                asset class. Opinionated A–D tiers with hard disqualifier gates. Research aid, not advice.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {DYOR_FEATURES.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-2 py-1 rounded-full bg-cyber-gray/60 text-cyber-steel border border-cyber-gold/10"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <Button
                asChild
                className="mt-auto w-full bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold shadow-none"
              >
                <a href={DYOR_URL} target="_blank" rel="noopener noreferrer">
                  Launch DYOR →
                </a>
              </Button>
            </div>

            {/* Next tool — placeholder */}
            <div className="rounded-2xl border border-cyber-gold/10 bg-cyber-slate/40 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyber-gray/60 text-cyber-steel text-xl mb-3">
                🛡️
              </span>
              <h3 className="font-orbitron text-lg font-bold text-gray-300 mb-1">OpsecViz</h3>
              <p className="text-sm text-gray-500 mb-4">
                Multi-chain portfolio analytics &amp; reporting.
              </p>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyber-gray/60 text-cyber-steel border border-cyber-gold/10">
                Coming soon
              </span>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            More tools on the way — join our Telegram for early access.
          </p>
        </div>
      </section>
    </Reveal>
  );
}

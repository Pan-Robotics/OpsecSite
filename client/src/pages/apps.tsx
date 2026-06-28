import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Compass,
  BarChart3,
  ExternalLink,
  Search,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animation/Reveal";

type AppStatus = "live" | "soon";

interface AppDef {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  status: AppStatus;
  url?: string;
  category: string;
  features: string[];
}

// The CryptoOpsec app catalogue. Add new tools here — the launcher renders them.
const APPS: AppDef[] = [
  {
    id: "dyor",
    name: "DYOR",
    tagline: "Do Your Own Research",
    description:
      "Crypto-token qualification engine — resolves any token cross-chain and scores it on fundamentals, tokenomics, on-chain, social, and dev activity, judged against its own asset class. Opinionated A–D tiers with hard disqualifier gates.",
    icon: Compass,
    status: "live",
    url: "https://dyor.cryptoopsec.com",
    category: "Research",
    features: [
      "Asset-class-aware scoring",
      "A–D conviction tiers",
      "Token screener",
      "Portfolio & barbell tools",
      "Agent-callable (MCP)",
    ],
  },
  {
    id: "opsecviz",
    name: "OpsecViz",
    tagline: "Portfolio & wallet analytics",
    description:
      "Multi-chain portfolio analytics & reporting — visualise wallet exposure, track holdings across chains, and surface risk concentrations at a glance. Currently in development.",
    icon: BarChart3,
    status: "soon",
    category: "Security",
    features: [
      "Multi-chain portfolio view",
      "Wallet risk analytics",
      "Exposure reporting",
    ],
  },
];

function StatusPill({ status }: { status: AppStatus }) {
  if (status === "live") {
    return (
      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/30 whitespace-nowrap">
        ● LIVE
      </span>
    );
  }
  return (
    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyber-gray/60 text-cyber-steel border border-cyber-gold/10 whitespace-nowrap">
      SOON
    </span>
  );
}

function AppCard({ app }: { app: AppDef }) {
  const Icon = app.icon;
  const live = app.status === "live";
  return (
    <div
      className={`group relative flex flex-col rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 ${
        live
          ? "border-cyber-gold/30 bg-cyber-slate/80 hover:border-cyber-gold/60 hover:cyber-glow"
          : "border-cyber-gold/10 bg-cyber-slate/40"
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${
            live
              ? "bg-cyber-gold text-cyber-dark cyber-glow"
              : "bg-cyber-gray/60 text-cyber-steel"
          }`}
        >
          <Icon className="h-7 w-7" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-orbitron text-xl font-bold text-white truncate">
              {app.name}
            </h3>
            <StatusPill status={app.status} />
          </div>
          <p className="text-xs text-cyber-steel mt-0.5">{app.tagline}</p>
        </div>
      </div>

      <p className="text-sm text-gray-300 mb-4 flex-1">{app.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {app.features.map((f) => (
          <span
            key={f}
            className="text-xs px-2 py-1 rounded-full bg-cyber-gray/60 text-cyber-steel border border-cyber-gold/10"
          >
            {f}
          </span>
        ))}
      </div>

      {live && app.url ? (
        <Button
          asChild
          className="mt-auto w-full bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold shadow-none"
        >
          <a href={app.url} target="_blank" rel="noopener noreferrer">
            Launch {app.name}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      ) : (
        <Button
          disabled
          className="mt-auto w-full bg-cyber-gray/60 text-cyber-steel font-semibold shadow-none cursor-not-allowed"
        >
          Coming soon
        </Button>
      )}
    </div>
  );
}

function ComingSoonTile() {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-cyber-gold/15 bg-cyber-slate/20 p-6 text-center">
      <Sparkles className="mb-3 h-8 w-8 text-cyber-steel" />
      <h3 className="font-orbitron text-lg font-bold text-gray-300 mb-1">
        More apps coming
      </h3>
      <p className="text-sm text-cyber-steel">
        New security &amp; research tools are in the works.
      </p>
    </div>
  );
}

export default function Apps() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return APPS;
    return APPS.filter((a) =>
      [a.name, a.tagline, a.description, a.category, ...a.features]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cyber-dark text-white">
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-40" />

      {/* Top bar */}
      <header className="relative z-10 border-b border-cyber-gold/20 bg-cyber-slate/60 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="font-orbitron text-xl font-bold text-cyber-gold">
              CryptoOpsec
            </span>
            <span className="rounded-full border border-cyber-gold/30 bg-cyber-gold/15 px-2 py-0.5 text-[10px] uppercase tracking-widest text-cyber-gold">
              Apps
            </span>
          </div>
          <a
            href="https://cryptoopsec.com"
            className="inline-flex items-center gap-1.5 text-sm text-gray-300 transition-colors hover:text-cyber-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </a>
        </div>
      </header>

      {/* Hero + search */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-16 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div>
            <h1 className="font-orbitron text-4xl font-bold text-cyber-gold text-shadow md:text-5xl">
              App Launcher
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Self-custody-friendly security &amp; research tools, all in one place.
              Pick an app to launch.
            </p>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-8 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyber-steel" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search apps…"
            aria-label="Search apps"
            className="w-full rounded-full border border-cyber-gold/20 bg-cyber-slate/80 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-cyber-steel transition-all focus:border-cyber-gold/50 focus:outline-none"
          />
        </div>
      </section>

      {/* App grid */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-cyber-steel">
            No apps match “{query}”.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
            {!query && <ComingSoonTile />}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyber-gold/20 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-gray-400">
          More tools on the way —{" "}
          <a
            href="https://t.me/cryptoopseccom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-gold hover:underline"
          >
            join our Telegram
          </a>{" "}
          for early access.
          <div className="mt-2 text-xs text-cyber-steel">
            © 2025 CryptoOpsec.com · Research aid, not financial advice.
          </div>
        </div>
      </footer>
    </div>
  );
}

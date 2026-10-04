import { ExternalLink, Wallet } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";
import { ACCOUNTS_URL, APPS, APPS_URL, type AppDef } from "@/lib/apps";

function StatusPill({ status }: { status: AppDef["status"] }) {
  return status === "live" ? (
    <span className="whitespace-nowrap rounded-full border border-green-500/30 bg-green-500/15 px-2 py-0.5 text-[10px] font-semibold text-green-400">LIVE</span>
  ) : (
    <span className="whitespace-nowrap rounded-full border border-cyber-gold/10 bg-cyber-gray/60 px-2 py-0.5 text-[10px] font-semibold text-cyber-steel">SOON</span>
  );
}

function ToolCard({ app }: { app: AppDef }) {
  const Icon = app.icon;
  const live = app.status === "live";
  return (
    <div className={`flex flex-col rounded-2xl border p-6 backdrop-blur-md ${live ? "border-cyber-gold/30 bg-cyber-slate/80" : "border-cyber-gold/10 bg-cyber-slate/40"}`}>
      <div className="mb-3 flex items-center gap-3">
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${live ? "bg-cyber-gold text-cyber-dark" : "bg-cyber-gray/60 text-cyber-steel"}`}>
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h3 className="font-orbitron text-xl font-bold leading-tight text-white">{app.name}</h3>
          <p className="text-xs text-gray-400">{app.tagline}</p>
        </div>
        <span className="ml-auto"><StatusPill status={app.status} /></span>
      </div>
      <p className="mb-4 flex-1 text-sm text-gray-300">{app.description}</p>
      <div className="mb-5 flex flex-wrap gap-2">
        {app.features.map((f) => (
          <span key={f} className="rounded-full border border-cyber-gold/10 bg-cyber-gray/60 px-2 py-1 text-xs text-cyber-steel">{f}</span>
        ))}
      </div>
      {live && app.url ? (
        <a href={app.url} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-cyber-gold px-4 text-sm font-semibold text-cyber-dark transition-colors hover:bg-cyber-gold-dark">
          Launch {app.name} <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      ) : (
        <span className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-cyber-gray/60 text-sm font-semibold text-cyber-steel">Coming soon</span>
      )}
    </div>
  );
}

export default function ToolsSection() {
  return (
    <Reveal>
      <section id="tools" className="relative overflow-hidden bg-cyber-dark py-20">
        <div className="pointer-events-none absolute inset-0 cyber-grid opacity-40" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyber-gold/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-orbitron text-3xl font-bold text-cyber-gold md:text-4xl">CryptoOpsec Apps</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Self-custody-friendly security and research tools. Free to use, open data, one wallet sign-in across all of them.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {APPS.map((app) => <ToolCard key={app.id} app={app} />)}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={APPS_URL} className="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-cyber-gold px-6 text-sm font-semibold text-cyber-gold transition-colors hover:bg-cyber-gold hover:text-cyber-dark">
              Open the App Launcher
            </a>
            <a href={`${ACCOUNTS_URL}/login`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-cyber-gold/30 px-6 text-sm font-semibold text-gray-200 transition-colors hover:border-cyber-gold hover:text-cyber-gold">
              <Wallet className="h-4 w-4" aria-hidden /> Sign in with a wallet
            </a>
          </div>
          <p className="mt-6 text-center text-sm text-gray-400">
            One account for every app, no password and no email: an Ethereum or Solana wallet signs a message, nothing more.{" "}
            More tools are on the way;{" "}
            <a href="https://t.me/cryptoopseccom" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:underline">join the Telegram</a> for early access.
          </p>
        </div>
      </section>
    </Reveal>
  );
}

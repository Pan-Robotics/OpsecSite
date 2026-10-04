import { useMemo, useState } from "react";
import { ArrowLeft, ExternalLink, Search, Sparkles, Wallet } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";
import AccountMenu from "@/components/account-menu";
import { useAccount } from "@/lib/account";
import { ACCOUNTS_URL, APPS, SITE_URL, type AppDef, type AppStatus } from "@/lib/apps";

function StatusPill({ status }: { status: AppStatus }) {
  if (status === "live") {
    return <span className="whitespace-nowrap rounded-full border border-green-500/30 bg-green-500/15 px-2 py-0.5 text-[10px] font-semibold text-green-400">LIVE</span>;
  }
  return <span className="whitespace-nowrap rounded-full border border-cyber-gold/10 bg-cyber-gray/60 px-2 py-0.5 text-[10px] font-semibold text-cyber-steel">SOON</span>;
}

function AppCard({ app, signedIn }: { app: AppDef; signedIn: boolean }) {
  const Icon = app.icon;
  const live = app.status === "live";
  return (
    <div className={`group relative flex flex-col rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 ${live ? "border-cyber-gold/30 bg-cyber-slate/80 hover:border-cyber-gold/60 hover:cyber-glow" : "border-cyber-gold/10 bg-cyber-slate/40"}`}>
      <div className="mb-4 flex items-start gap-4">
        <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${live ? "bg-cyber-gold text-cyber-dark cyber-glow" : "bg-cyber-gray/60 text-cyber-steel"}`}>
          <Icon className="h-7 w-7" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate font-orbitron text-xl font-bold text-white">{app.name}</h3>
            <StatusPill status={app.status} />
          </div>
          <p className="mt-0.5 text-xs text-cyber-steel">{app.tagline}</p>
        </div>
      </div>

      <p className="mb-4 flex-1 text-sm text-gray-300">{app.description}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {app.features.map((f) => (
          <span key={f} className="rounded-full border border-cyber-gold/10 bg-cyber-gray/60 px-2 py-1 text-xs text-cyber-steel">{f}</span>
        ))}
        {app.signIn && (
          <span className="inline-flex items-center gap-1 rounded-full border border-cyber-gold/30 bg-cyber-gold/10 px-2 py-1 text-xs text-cyber-gold">
            <Wallet className="h-3 w-3" aria-hidden /> {signedIn ? "Recognises your account" : "Wallet sign-in"}
          </span>
        )}
      </div>

      {live && app.url ? (
        <a href={app.url} className="mt-auto inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-cyber-gold px-4 text-sm font-semibold text-cyber-dark transition-colors hover:bg-cyber-gold-dark">
          Launch {app.name} <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      ) : (
        <span className="mt-auto inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-cyber-gray/60 text-sm font-semibold text-cyber-steel">Coming soon</span>
      )}
    </div>
  );
}

function ComingSoonTile() {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-cyber-gold/15 bg-cyber-slate/20 p-6 text-center">
      <Sparkles className="mb-3 h-8 w-8 text-cyber-steel" />
      <h3 className="mb-1 font-orbitron text-lg font-bold text-gray-300">More apps coming</h3>
      <p className="text-sm text-cyber-steel">New security and research tools are in the works.</p>
    </div>
  );
}

export default function Apps() {
  const [query, setQuery] = useState("");
  const { user } = useAccount();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return APPS;
    return APPS.filter((a) => [a.name, a.tagline, a.description, a.category, ...a.features].join(" ").toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="relative min-h-screen bg-cyber-dark text-white">
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-40" />

      <header className="relative z-10 border-b border-cyber-gold/20 bg-cyber-slate/60 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/icon.svg" alt="" width={28} height={28} className="h-7 w-7 rounded-lg" />
            <span className="font-orbitron text-xl font-bold text-cyber-gold">CryptoOpsec</span>
            <span className="rounded-full border border-cyber-gold/30 bg-cyber-gold/15 px-2 py-0.5 text-[10px] uppercase tracking-widest text-cyber-gold">Apps</span>
          </a>
          <div className="flex items-center gap-3">
            <a href={SITE_URL} className="hidden items-center gap-1.5 text-sm text-gray-300 transition-colors hover:text-cyber-gold sm:inline-flex">
              <ArrowLeft className="h-4 w-4" /> Back to site
            </a>
            <AccountMenu compact />
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-12 text-center sm:px-6 sm:pt-16 lg:px-8">
        <Reveal>
          <div>
            <h1 className="font-orbitron text-4xl font-bold text-cyber-gold text-shadow md:text-5xl">App Launcher</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Self-custody-friendly security and research tools, all in one place. Pick an app to launch.
            </p>
            {user ? (
              <p className="mx-auto mt-3 max-w-2xl text-sm text-cyber-steel">
                Signed in as <span className="text-white">@{user.handle}</span>. Apps marked with the wallet badge recognise you automatically.
              </p>
            ) : (
              <p className="mx-auto mt-3 max-w-2xl text-sm text-cyber-steel">
                <a href={`${ACCOUNTS_URL}/login?return_to=https://apps.cryptoopsec.com/`} className="text-cyber-gold hover:underline">Sign in with a wallet</a> once and every app recognises you. No password, no email.
              </p>
            )}
          </div>
        </Reveal>

        <div className="relative mx-auto mt-8 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyber-steel" aria-hidden />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search apps"
            aria-label="Search apps"
            className="w-full rounded-full border border-cyber-gold/20 bg-cyber-slate/80 py-2.5 pl-10 pr-4 text-base text-white placeholder:text-cyber-steel transition-all focus:border-cyber-gold/50 focus:outline-none sm:text-sm"
          />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-cyber-steel">No apps match &ldquo;{query}&rdquo;.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((app) => <AppCard key={app.id} app={app} signedIn={Boolean(user)} />)}
            {!query && <ComingSoonTile />}
          </div>
        )}
      </section>

      <footer className="relative z-10 border-t border-cyber-gold/20 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-gray-400">
          More tools on the way.{" "}
          <a href="https://t.me/cryptoopseccom" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:underline">Join the Telegram</a> for early access.
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-cyber-steel">
            <a href={SITE_URL} className="hover:text-cyber-gold">cryptoopsec.com</a>
            <a href={`${ACCOUNTS_URL}/account`} className="hover:text-cyber-gold">Your account</a>
            <span>&copy; {new Date().getFullYear()} CryptoOpsec.com. Research aid, not financial advice.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogOut, UserRound, Wallet } from "lucide-react";
import { accountUrl, loginUrl, signOut, useAccount } from "@/lib/account";

// Sign-in control shared by the site header and the App Launcher. Anonymous:
// a link to the hosted wallet login that returns here. Signed in: the handle
// with a small menu (account page, sign out).
export default function AccountMenu({ compact = false }: { compact?: boolean }) {
  const { loading, user, setUser } = useAccount();
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (box.current && !box.current.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", close); document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", esc); };
  }, [open]);

  if (loading) return <span className="inline-block h-9 w-20 rounded-lg bg-cyber-gray/40" aria-hidden />;

  if (!user) {
    return (
      <a
        href={loginUrl()}
        onClick={(e) => { e.preventDefault(); window.location.assign(loginUrl(window.location.href)); }}
        className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-cyber-gold/40 px-3 text-sm font-semibold text-cyber-gold transition-colors hover:bg-cyber-gold/10"
      >
        <Wallet className="h-4 w-4" aria-hidden />
        {compact ? "Sign in" : "Sign in with wallet"}
      </a>
    );
  }

  const label = user.display_name || `@${user.handle}`;
  return (
    <div ref={box} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex min-h-9 max-w-[12rem] items-center gap-2 rounded-lg border border-cyber-gold/20 bg-cyber-gray/60 px-3 text-sm text-white transition-colors hover:border-cyber-gold/50"
      >
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyber-gold text-[11px] font-bold text-cyber-dark">
          {user.handle.replace(/^wallet-/, "").slice(0, 1).toUpperCase()}
        </span>
        <span className="truncate">{label}</span>
        <ChevronDown className="h-4 w-4 shrink-0 text-cyber-steel" aria-hidden />
      </button>
      {open && (
        <div role="menu" className="absolute right-0 z-50 mt-1 w-60 overflow-hidden rounded-lg border border-cyber-gold/20 bg-cyber-slate shadow-xl">
          <div className="border-b border-cyber-gold/10 px-3 py-2 text-xs text-cyber-steel">
            <div className="truncate text-white">@{user.handle}</div>
            <div>{user.plan === "free" ? "Free plan" : `${user.plan} plan`}, {user.wallets} wallet{user.wallets === 1 ? "" : "s"}</div>
          </div>
          <a role="menuitem" href={accountUrl} className="flex items-center gap-2 px-3 py-2 text-sm text-white hover:bg-cyber-gray/60">
            <UserRound className="h-4 w-4 text-cyber-steel" aria-hidden /> Account
          </a>
          <button
            role="menuitem"
            type="button"
            onClick={async () => { await signOut(); setUser(null); setOpen(false); }}
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-white hover:bg-cyber-gray/60"
          >
            <LogOut className="h-4 w-4 text-cyber-steel" aria-hidden /> Sign out
          </button>
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import { ACCOUNTS_URL } from "./apps";

// The CryptoOpsec account behind the browser's shared session cookie
// (accounts.cryptoopsec.com). One credentialed POST answers "who is this" and
// silently renews the cookie; the same call works on every *.cryptoopsec.com app.
export type AccountUser = {
  id: string; handle: string; display_name: string | null; avatar_url: string | null;
  plan: string; features: string[]; wallets: number;
};

// The header renders the control twice (desktop and phone variants) and other
// parts of a page may ask too: share one in-flight request for a short window.
let inflight: Promise<AccountUser | null> | null = null;
export function fetchSession(): Promise<AccountUser | null> {
  if (inflight) return inflight;
  inflight = (async () => {
    try {
      const r = await fetch(`${ACCOUNTS_URL}/auth/session`, { method: "POST", credentials: "include" });
      if (!r.ok) return null;
      return ((await r.json()) as { user: AccountUser | null }).user;
    } catch {
      return null;
    } finally {
      setTimeout(() => { inflight = null; }, 2000);
    }
  })();
  return inflight;
}

export async function signOut(): Promise<void> {
  try { await fetch(`${ACCOUNTS_URL}/auth/logout`, { method: "POST", credentials: "include" }); } catch { /* cookie may already be gone */ }
}

export const loginUrl = (returnTo?: string) =>
  `${ACCOUNTS_URL}/login?return_to=${encodeURIComponent(returnTo ?? (typeof window !== "undefined" ? window.location.href : SITE_FALLBACK))}`;
export const accountUrl = `${ACCOUNTS_URL}/account`;
const SITE_FALLBACK = "https://cryptoopsec.com/";

export function useAccount() {
  const [state, setState] = useState<{ loading: boolean; user: AccountUser | null }>({ loading: true, user: null });
  useEffect(() => {
    let alive = true;
    const load = () => fetchSession().then((user) => { if (alive) setState({ loading: false, user }); });
    load();
    window.addEventListener("focus", load);
    return () => { alive = false; window.removeEventListener("focus", load); };
  }, []);
  return { ...state, setUser: (user: AccountUser | null) => setState({ loading: false, user }) };
}

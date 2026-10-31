import { useEffect } from "react";
import { useLocation } from "wouter";
import { ACCOUNTS_URL } from "./apps";

// First-party, cookie-free usage counts for the CryptoOpsec admin panel: page
// views, outbound clicks (which app or guide a visitor opens) and any element
// marked data-track="name" (data-track-subject="..."). No cookie or identifier is
// set; the accounts service keeps a daily-rotating hash only. Browsers sending
// Global Privacy Control or Do Not Track send nothing.
const ENDPOINT = `${ACCOUNTS_URL}/p`;

function optedOut(): boolean {
  const n = navigator as Navigator & { globalPrivacyControl?: boolean };
  return n.globalPrivacyControl === true || n.doNotTrack === "1";
}

function send(payload: Record<string, unknown>) {
  if (typeof window === "undefined" || optedOut()) return;
  const body = JSON.stringify(payload);
  try { if (navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: "text/plain" }))) return; } catch { /* fall through */ }
  fetch(ENDPOINT, { method: "POST", body, keepalive: true, credentials: "include", headers: { "Content-Type": "text/plain" } }).catch(() => undefined);
}

export function track(name: string, subject?: string | null) {
  send({ k: "event", n: name, s: subject || undefined, p: window.location.pathname });
}

let firstView = true;
function pageview() {
  const q = new URLSearchParams(window.location.search);
  send({
    k: "pageview", p: window.location.pathname,
    r: firstView ? document.referrer || undefined : undefined,
    u: { source: q.get("utm_source"), medium: q.get("utm_medium"), campaign: q.get("utm_campaign") },
  });
  firstView = false;
}

/** Mount once inside the router: a page view per route change, plus click tracking. */
export function useAnalytics() {
  const [location] = useLocation();
  useEffect(() => { pageview(); }, [location]);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const tagged = target?.closest<HTMLElement>("[data-track]");
      if (tagged) { track(tagged.dataset.track!, tagged.dataset.trackSubject ?? null); return; }
      const a = target?.closest<HTMLAnchorElement>("a[href]");
      if (!a) return;
      try {
        const u = new URL(a.href, window.location.href);
        if ((u.protocol === "https:" || u.protocol === "http:") && u.host !== window.location.host) track("outbound", u.hostname.replace(/^www\./, ""));
      } catch { /* not a URL */ }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
}

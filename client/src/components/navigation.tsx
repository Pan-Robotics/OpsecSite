import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import AccountMenu from "@/components/account-menu";
import { APPS_URL } from "@/lib/apps";

const SECTIONS: [string, string][] = [
  ["foundations", "Foundations"],
  ["journey", "Security Journey"],
  ["toolkit", "Toolkit"],
  ["tools", "Apps"],
  ["resources", "Guides"],
];

// Fixed header: brand, section links (anchors, so they work from any page and
// with the keyboard), the App Launcher, and the account control. On phones the
// links live in a panel under the bar; it closes on navigation and on Escape.
export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [open]);

  const linkClass = "text-sm text-gray-300 transition-colors duration-200 hover:text-cyber-gold";

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-cyber-gold/20 bg-cyber-slate/90 backdrop-blur-md" aria-label="Primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 font-orbitron text-xl font-bold text-cyber-gold">
            <img src="/icon.svg" alt="" width={28} height={28} className="h-7 w-7 rounded-lg" />
            CryptoOpsec
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {SECTIONS.map(([id, label]) => (
              <a key={id} href={`/#${id}`} className={linkClass}>{label}</a>
            ))}
            <a
              href={APPS_URL}
              className="inline-flex min-h-9 items-center rounded-lg bg-cyber-gold px-4 text-sm font-semibold text-cyber-dark transition-colors hover:bg-cyber-gold-dark"
            >
              Launch Apps
            </a>
            <AccountMenu compact />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <AccountMenu compact />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-lg text-gray-300 hover:text-cyber-gold"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="border-t border-cyber-gold/10 pb-4 pt-2 md:hidden">
            {SECTIONS.map(([id, label]) => (
              <a key={id} href={`/#${id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-base text-gray-200 hover:bg-cyber-gray/40 hover:text-cyber-gold">
                {label}
              </a>
            ))}
            <a
              href={APPS_URL}
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-cyber-gold px-4 py-3 text-center text-base font-semibold text-cyber-dark hover:bg-cyber-gold-dark"
            >
              Launch Apps
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

import { SiGithub, SiTelegram, SiX } from "react-icons/si";
import { APPS, APPS_URL, ACCOUNTS_URL } from "@/lib/apps";
import { GUIDES, guideHref } from "@/lib/guides";

const SECTIONS: [string, string][] = [
  ["foundations", "Foundations"],
  ["journey", "Security Journey"],
  ["toolkit", "Toolkit"],
  ["tools", "Apps"],
  ["resources", "Guides"],
];

const DEVELOPERS: [string, string][] = [
  ["Alexander Dada", "https://github.com/alexdada555"],
  ["Sylvia Yousif", "https://github.com/sylvia5555"],
  ["Aiman Jamil", "https://github.com/ai-28"],
];

const colTitle = "mb-3 text-sm font-semibold uppercase tracking-wide text-cyber-steel";
const link = "text-gray-300 transition-colors duration-200 hover:text-cyber-gold";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cyber-gold/20 bg-cyber-dark py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-orbitron text-xl font-bold text-cyber-gold">CryptoOpsec</p>
            <p className="mt-2 text-gray-400">
              Practical operational security for people who hold their own keys. Guides, checklists and
              self-custody tools, free and open.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://x.com/cryptoopseccom" target="_blank" rel="noopener noreferrer" aria-label="CryptoOpsec on X" className="text-cyber-steel transition-colors hover:text-cyber-gold"><SiX className="h-6 w-6" /></a>
            <a href="https://t.me/cryptoopseccom" target="_blank" rel="noopener noreferrer" aria-label="CryptoOpsec on Telegram" className="text-cyber-steel transition-colors hover:text-cyber-gold"><SiTelegram className="h-6 w-6" /></a>
            <a href="https://github.com/Pan-Robotics" target="_blank" rel="noopener noreferrer" aria-label="CryptoOpsec on GitHub" className="text-cyber-steel transition-colors hover:text-cyber-gold"><SiGithub className="h-6 w-6" /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className={colTitle}>Guides</p>
            <ul className="space-y-2 text-sm">
              {GUIDES.map((g) => (
                <li key={g.file}><a href={guideHref(g)} download className={link}>{g.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className={colTitle}>Sections</p>
            <ul className="space-y-2 text-sm">
              {SECTIONS.map(([id, label]) => (
                <li key={id}><a href={`/#${id}`} className={link}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className={colTitle}>Apps</p>
            <ul className="space-y-2 text-sm">
              <li><a href={APPS_URL} className={link}>App Launcher</a></li>
              {APPS.filter((a) => a.status === "live" && a.url).map((a) => (
                <li key={a.id}><a href={a.url} className={link}>{a.name}</a></li>
              ))}
              <li><a href={`${ACCOUNTS_URL}/login`} className={link}>Sign in with wallet</a></li>
              <li><a href={`${ACCOUNTS_URL}/account`} className={link}>Your account</a></li>
            </ul>
          </div>
          <div>
            <p className={colTitle}>Developers</p>
            <ul className="space-y-2 text-sm">
              {DEVELOPERS.map(([name, url]) => (
                <li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className={link}>{name}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-cyber-gray pt-6 text-center text-sm text-gray-400">
          &copy; {year} CryptoOpsec.com. Educational content only, not financial advice. Usage is counted anonymously, without cookies; Global Privacy Control is respected.
          <span className="text-cyber-gold"> Stay safe out there.</span>
        </div>
      </div>
    </footer>
  );
}

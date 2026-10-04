import type { LucideIcon } from "lucide-react";
import { ArrowLeftRight, BarChart3, Compass } from "lucide-react";

// One catalogue for the home page's Tools section and the App Launcher at
// apps.cryptoopsec.com. Add a tool here and both render it.
export type AppStatus = "live" | "soon";

export interface AppDef {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  status: AppStatus;
  url?: string;
  category: string;
  features: string[];
  signIn?: boolean; // recognises the CryptoOpsec account
}

export const SITE_URL = "https://cryptoopsec.com";
export const APPS_URL = "https://apps.cryptoopsec.com";
export const ACCOUNTS_URL = (import.meta.env.VITE_ACCOUNTS_URL as string | undefined) ?? "https://accounts.cryptoopsec.com";
export const DYOR_URL = (import.meta.env.VITE_DYOR_URL as string | undefined) ?? "https://dyor.cryptoopsec.com";
export const BRIDGE_URL = (import.meta.env.VITE_BRIDGE_URL as string | undefined) ?? "https://bridge.cryptoopsec.com";

export const APPS: AppDef[] = [
  {
    id: "dyor",
    name: "DYOR",
    tagline: "Do Your Own Research",
    description:
      "Token qualification engine. Resolves any token across chains and scores it 0 to 100 on fundamentals, tokenomics, on-chain usage, social and developer activity, judged against its own asset class. A to D tiers with hard disqualifier gates, every figure shown.",
    icon: Compass,
    status: "live",
    url: DYOR_URL,
    category: "Research",
    features: [
      "Asset-class-aware 0 to 100 scores",
      "A to D tiers with hard gates",
      "Screener, compare and share",
      "Portfolio, barbell and backtest",
      "API and MCP for AI agents",
    ],
    signIn: true,
  },
  {
    id: "bridge",
    name: "Bridge",
    tagline: "Legacy OP token withdrawals",
    description:
      "Withdraw legacy OP Mainnet tokens (pre-Bedrock, invisible to Superbridge) to Ethereum through the canonical bridge. Resolve the token, verify its L1 route and escrow, withdraw, then prove and finalize from any wallet. Client-side only: no backend, no custody, no fees.",
    icon: ArrowLeftRight,
    status: "live",
    url: BRIDGE_URL,
    category: "Bridge",
    features: ["Canonical OP bridge", "Legacy token resolver", "Escrow and safety checks", "Prove and finalize tracker", "No custody, no fees"],
  },
  {
    id: "opsecviz",
    name: "OpsecViz",
    tagline: "Portfolio and wallet analytics",
    description:
      "Multi-chain portfolio analytics and reporting: visualise wallet exposure, track holdings across chains, and surface risk concentrations at a glance. In development.",
    icon: BarChart3,
    status: "soon",
    category: "Security",
    features: ["Multi-chain portfolio view", "Wallet risk analytics", "Exposure reporting"],
  },
];

export const LIVE_APPS = APPS.filter((a) => a.status === "live");

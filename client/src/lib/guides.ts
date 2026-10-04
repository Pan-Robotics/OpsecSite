// Every downloadable guide, in reading order. Sizes are the files in public/downloads.
export interface Guide { title: string; file: string; blurb: string; kb: number; step?: string }

export const GUIDES: Guide[] = [
  { title: "Core Concepts Guide", file: "CryptoOPSEC_Crypto_Fundamentals_Guide.pdf", blurb: "Blockchain basics, wallets and keys, the threat landscape.", kb: 42, step: "Foundations" },
  { title: "Security Checklist", file: "CryptoOPSEC_Crypto_Security_Checklist.pdf", blurb: "The essentials to tick off before you hold anything.", kb: 43 },
  { title: "Exchange Audit Checklist", file: "CryptoOPSEC_Crypto_Exchange_Security_Checklist.pdf", blurb: "Judge a centralized exchange before trusting it.", kb: 42, step: "Step 1" },
  { title: "Hot Wallet Setup Guide", file: "CryptoOPSEC_Hot_Wallet_Guide.pdf", blurb: "Set up a daily-use wallet without leaking your keys.", kb: 44, step: "Step 2" },
  { title: "Cold Storage Setup Guide", file: "CryptoOPSEC_Cold_Wallet_Guide.pdf", blurb: "Hardware, paper and air-gapped storage for the long term.", kb: 41, step: "Step 3" },
  { title: "Scam Cheat Sheet", file: "CryptoOPSEC_Crypto_Scam_Cheat_Sheet.pdf", blurb: "The common cons, in one page you can keep open.", kb: 43, step: "Step 4" },
  { title: "Threat Detection Guide", file: "CryptoOPSEC_Scam_Detection_Guide.pdf", blurb: "Real phishing and social-engineering examples, and the red flags.", kb: 47 },
  { title: "50-Point Security Checklist", file: "CryptoOPSEC_50_Point_Security_Checklist.pdf", blurb: "The full audit: exchanges, wallets, operations, emergencies.", kb: 38 },
];

export const guideHref = (g: Guide) => `/downloads/${g.file}`;

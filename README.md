# 🛡️ OpsecViz

> **Multi-chain Crypto Portfolio Analytics, Visualization, and Reporting**

![License](https://img.shields.io/badge/license-MIT-green)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-blue)
![Version](https://img.shields.io/badge/version-0.1.0-blue)

---

## 📘 Overview

**OpsecViz** is a non-custodial crypto portfolio analysis tool designed for deep visibility across multiple wallets, chains, and oracles.  
It allows users to view, compare, and export performance data across **EVM-compatible**, **Bitcoin**, and **Solana** networks — providing robust multi-oracle valuation, historical tracking, and custom reporting.

---

## ⚙️ Key Features

1. **Multi-Chain Wallet Integration**
   - Accepts wallet addresses across:
     - EVM-compatible chains (Ethereum, Polygon, BNB, Optimism, Arbitrum, PEAQ, etc.)
     - Non-EVM blockchains (Bitcoin, Solana)
   - Manual addition of new blockchains via custom RPC credentials (like MetaMask).

2. **Daily Historical Snapshots**
   - Automatic asset balance snapshots every day at **12 PM UTC**.
   - Tracks holdings across **mainnets**, **sidechains**, and **Layer-2s**.
   - Timestamps and stores all historical data.

3. **Oracle-Based Valuation**
   - Integrates with multiple pricing data sources:
     - [CoinGecko](https://www.coingecko.com/)
     - [CoinMarketCap](https://coinmarketcap.com/)
     - [Dex Screener](https://dexscreener.com/)
     - [Dex Tools](https://www.dextools.io/)
   - Enables users to view valuations from each oracle separately or as an average.

4. **Advanced Analytics & Visualization**
   - Unified dashboard for multiple wallets.
   - Time-series line charts for portfolio value over time.
   - Pie charts for daily asset distribution.
   - ROI, volatility, and other portfolio performance metrics.
   - Calendar interface for date-based exploration.

5. **Comprehensive Export & Reporting**
   - Export portfolio data in **CSV** or **PDF** format.
   - Generate **custom reports** with charts and performance summaries.

---

## 🧩 Application Design Overview

### 🪙 Wallet & Chain Management
- Add wallets from any supported blockchain.
- Add new networks manually with RPC, chain ID, and native currency symbol.

### 💰 Asset Tracking
- Aggregates holdings from multiple wallets.
- Tracks value changes and historical performance at a fixed snapshot time.

### 🔮 Price Oracles
- Fetches real-time and historical prices from multiple data providers.
- Allows toggling between oracles and an averaged aggregate view.

### 📊 Visualization & Analytics
- Tabbed dashboard with charts, tables, and toggle filters.
- Per-asset breakdowns and interactive performance graphs.
- Pie charts for asset allocation, volatility & ROI metrics.

### 📤 Reports & Exports
- Export daily, weekly, or custom time windows.
- Generate full portfolio performance summaries with visuals.

---

## 🧱 Technical Architecture

### Frontend
- **React.js** + **shadcn/ui**
- **Recharts** for line/pie/area charts
- **Framer Motion** for smooth UI transitions

### Backend
- **Python Flask** or **Node.js** API server
- **PostgreSQL** for structured historical portfolio data
- **Cron jobs** (12 PM UTC) for daily snapshots and pricing sync

### Integrations
- **Blockchain Queries**
  - `ethers.js` / `web3.js` for EVM networks
  - Custom RPC handlers for Bitcoin & Solana
- **Price Oracles**
  - REST API clients for CoinGecko, CoinMarketCap, Dex Screener, Dex Tools
- **Data Handling**
  - Caching and rate-limit management for APIs
  - Failover mechanisms and backup redundancy

### Security
- Non-custodial: Only wallet addresses are stored, no private keys.
- Encrypted storage of user configurations.
- Rate limiting and API throttling for DDoS protection.

---

## 🧭 User Flow

1. **Setup**
   - Add wallet addresses (EVM / BTC / SOL / Custom).
   - Configure oracles and select currencies.

2. **Analysis**
   - View daily valuations across multiple data sources.
   - Toggle between oracles, or use average price mode.
   - Visualize asset performance in charts and tables.

3. **Reporting**
   - Export portfolio data (CSV/PDF).
   - Generate visualized performance reports with metrics.

---

## 🧪 Example Use Case

> “Track my Ethereum, Bitcoin, and Solana wallets — show me how my overall portfolio’s USD value changed each day using both CoinMarketCap and CoinGecko data. Then export the weekly report as a PDF.”

Output:
- Line chart of portfolio value (CoinGecko / CMC)
- Pie chart of holdings distribution per day
- PDF export with ROI and volatility analysis

---

## 🐳 Deployment Strategy

- Containerized with **Docker**
- Backend hosted on **AWS / GCP**
- CDN front-end delivery
- Automated CI/CD with GitHub Actions

---

## 🧭 Roadmap

- [ ] API schema definition
- [ ] Oracle integrations
- [ ] Frontend dashboard prototyping
- [ ] Report generation engine
- [ ] Wallet import UI and security audit
- [ ] Cross-chain indexing performance optimization

---

## 🧑‍💻 Contributing

Contributions are welcome!  
Fork the repository, make your improvements, and submit a PR.

1. Fork it (https://github.com/yourusername/opsecviz/fork)
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Create a new Pull Request

---

## 📄 License

Distributed under the **MIT License**.  
See [`LICENSE`](./LICENSE) for more information.

---

## 🌐 Connect

**Project Lead:** [Akinola Dada (Pan Robotics)](https://github.com/alexdada555)  
**Organization:** [CryptoOPSEC.com](https://cryptoopsec.com)

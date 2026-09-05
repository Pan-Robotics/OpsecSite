import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// The Cold Wallet Guide was renamed CrytoOPSEC -> CryptoOPSEC. Without this the
// SPA catch-all below answers 200 text/html for the old URL, so a bookmarked or
// search-indexed link silently "downloads" the homepage instead of 404ing.
app.get("/downloads/CrytoOPSEC_Cold_Wallet_Guide.pdf", (_req, res) => {
  res.redirect(301, "/downloads/CryptoOPSEC_Cold_Wallet_Guide.pdf");
});

// Serve PDF downloads
app.use('/downloads', express.static(path.join(process.cwd(), 'public/downloads')));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;

  res.on("finish", () => {
    if (path.startsWith("/api")) {
      log(`${req.method} ${path} ${res.statusCode} in ${Date.now() - start}ms`);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    // The response may already be committed (streaming, or a throw after a
    // partial write). Writing again would raise ERR_HTTP_HEADERS_SENT, so hand
    // off to Express's default handler — it knows how to abort the socket.
    if (res.headersSent) return next(err);

    if (status >= 500) log(`${req.method} ${req.path} -> ${status}: ${message}`);
    res.status(status).json({ message });
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Loopback only: nginx terminates TLS on 80/443 and proxies here, and ufw
  // denies inbound on everything except 22/80/443. Binding 0.0.0.0 would not
  // expose the port, but it would bypass nginx if the firewall ever changed.
  const port = 3000;

  server.listen(port, '127.0.0.1', () => {
    console.log(`✅ Server running on http://127.0.0.1:${port}`);
  });
})();

import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Application routes go here, prefixed with /api. There are none yet: the
  // site is static content plus outbound links, and stores nothing.

  const httpServer = createServer(app);

  return httpServer;
}

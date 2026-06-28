import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Apps from "@/pages/apps";
import NotFound from "@/pages/not-found";
import { Reveal } from "@/components/animation/Reveal";

// When served from the apps.* subdomain (apps.cryptoopsec.com), the launcher IS
// the home page; on the main domain it lives at /apps.
const isAppsHost =
  typeof window !== "undefined" &&
  window.location.hostname.toLowerCase().startsWith("apps.");

function Router() {
  return (
    <Switch>
      <Route path="/" component={isAppsHost ? Apps : Home} />
      <Route path="/apps" component={Apps} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>

  );
}

export default App;

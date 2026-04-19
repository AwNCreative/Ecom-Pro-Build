import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/layout/Layout";

import Home from "@/pages/home";
import Store from "@/pages/store";
import Blog from "@/pages/blog";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";

import SmartFoundation from "@/pages/blog/smart-foundation";
import UxPsychology from "@/pages/blog/ux-psychology";
import ProductEngineering from "@/pages/blog/product-engineering";
import TechArsenal from "@/pages/blog/tech-arsenal";
import SalesMachine from "@/pages/blog/sales-machine";
import AbsoluteLoyalty from "@/pages/blog/absolute-loyalty";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/smart-foundation" component={SmartFoundation} />
        <Route path="/blog/ux-psychology" component={UxPsychology} />
        <Route path="/blog/product-engineering" component={ProductEngineering} />
        <Route path="/blog/tech-arsenal" component={TechArsenal} />
        <Route path="/blog/sales-machine" component={SalesMachine} />
        <Route path="/blog/absolute-loyalty" component={AbsoluteLoyalty} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

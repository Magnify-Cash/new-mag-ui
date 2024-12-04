import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route } from "react-router";
import Layout from "./pages/layout";
import Home from "./pages/home/page";
import Analytics from "./pages/analytics/page";
import Collections from "./pages/collections/page";
import Community from "./pages/community/page";
import Docs from "./pages/docs/page";
import Faucet from "./pages/faucet/page";
import LenderCreate from "./pages/lender/create/page";
import LenderDashboard from "./pages/lender/dashboard/page";
import LenderManage from "./pages/lender/manage/page";
import MagBridge from "./pages/mag/bridge/page";
import MagStaking from "./pages/mag/staking/page";
import MagSwap from "./pages/mag/swap/page";
import Network from "./pages/network/page";
import QuickLoan from "./pages/quick-loan/page";
import Support from "./pages/support/page";
import Transactions from "./pages/transactions/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/community" element={<Community />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/faucet" element={<Faucet />} />
        <Route path="/lender/create" element={<LenderCreate />} />
        <Route path="/lender/dashboard" element={<LenderDashboard />} />
        <Route path="/lender/manage" element={<LenderManage />} />
        <Route path="/mag/bridge" element={<MagBridge />} />
        <Route path="/mag/staking" element={<MagStaking />} />
        <Route path="/mag/swap" element={<MagSwap />} />
        <Route path="/network" element={<Network />} />
        <Route path="/quick-loan" element={<QuickLoan />} />
        <Route path="/support" element={<Support />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </Layout>
  </StrictMode>
);

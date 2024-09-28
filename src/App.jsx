import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";
import WalletBalance from './components/WalletBalance';
import TopUpWallet from './components/TopUpWallet';
import TransactionHistory from './components/TransactionHistory';
import OutstandingBills from './components/OutstandingBills';
import WalletTransfer from './components/WalletTransfer';
import BillHistory from './components/BillHistory';
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet-balance" element={<WalletBalance />} />
          <Route path="/top-up-wallet" element={<TopUpWallet />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/outstanding-bills" element={<OutstandingBills />} />
          <Route path="/wallet-transfer" element={<WalletTransfer />} />
          <Route path="/bill-history" element={<BillHistory />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
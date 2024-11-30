import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { BrokerApp } from './pages/BrokerApp';
import { ConsumerApp } from './pages/ConsumerApp';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/brokers/*" element={<BrokerApp />} />
      <Route path="/consumers/*" element={<ConsumerApp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
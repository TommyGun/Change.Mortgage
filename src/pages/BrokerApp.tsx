import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SchemaOrg } from '../components/shared/SchemaOrg';
import { Header } from '../components/broker/Header';
import { Hero } from '../components/broker/Hero';
import { Features } from '../components/broker/Features';
import { Pricing } from '../components/broker/Pricing';
import { Contact } from '../components/broker/Contact';
import { Footer } from '../components/shared/Footer';
import { DocumentViewer } from '../components/shared/DocumentViewer';

export function BrokerApp() {
  return (
    <>
      <Helmet>
        <title>Mortgage Broker Solutions | change.mortgage</title>
        <meta name="description" content="Transform your mortgage business with our cutting-edge platform. Process applications faster, access market intelligence, and grow your business." />
        <link rel="canonical" href="https://change.mortgage/brokers" />
      </Helmet>
      <SchemaOrg type="broker" />
      
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-16">
          <Hero />
          <Features />
          <Pricing />
          <Contact />
        </div>
        <Footer />
        <DocumentViewer />
      </div>
    </>
  );
}
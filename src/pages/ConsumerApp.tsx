import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SchemaOrg } from '../components/shared/SchemaOrg';
import { Header } from '../components/consumer/Header';
import { Hero } from '../components/consumer/Hero';
import { Benefits } from '../components/consumer/Benefits';
import { Calculator } from '../components/consumer/Calculator';
import { Process } from '../components/consumer/Process';
import { Contact } from '../components/consumer/Contact';
import { Footer } from '../components/shared/Footer';
import { DocumentViewer } from '../components/shared/DocumentViewer';

export function ConsumerApp() {
  return (
    <>
      <Helmet>
        <title>Save Money on Your Mortgage | change.mortgage</title>
        <meta name="description" content="Calculate your potential savings and switch to a better mortgage rate. Our easy process helps homeowners save thousands on their mortgage payments." />
        <link rel="canonical" href="https://change.mortgage/consumers" />
      </Helmet>
      <SchemaOrg type="consumer" />
      
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-16">
          <Hero />
          <Benefits />
          <Calculator />
          <Process />
          <Contact />
        </div>
        <Footer />
        <DocumentViewer />
      </div>
    </>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Building2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { SchemaOrg } from '../components/shared/SchemaOrg';
import { Footer } from '../components/shared/Footer';
import { DocumentViewer } from '../components/shared/DocumentViewer';

export function LandingPage() {
  return (
    <>
      <Helmet>
        <title>change.mortgage - Switch & Save on Your Mortgage</title>
        <meta name="description" content="Find better mortgage rates and switch providers easily. Save thousands on your monthly payments with our mortgage comparison and switching service." />
        <link rel="canonical" href="https://change.mortgage" />
      </Helmet>
      <SchemaOrg type="landing" />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to <span className="text-blue-600">change.mortgage</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Choose your path to better mortgage solutions
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
            <Link 
              to="/consumers"
              className="relative group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">For Homeowners</h2>
                <p className="text-gray-600">
                  Save money by finding better mortgage rates and switching providers easily.
                </p>
              </div>
            </Link>

            <Link 
              to="/brokers"
              className="relative group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                <Building2 className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">For Brokers</h2>
                <p className="text-gray-600">
                  Transform your mortgage business with our cutting-edge platform.
                </p>
              </div>
            </Link>
          </div>
        </main>
        <Footer />
        <DocumentViewer />
      </div>
    </>
  );
}
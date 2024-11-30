import React from 'react';
import { Banknote, Clock, Shield, ThumbsUp } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      name: 'Save Money',
      description: 'Find better rates and reduce your monthly mortgage payments significantly.',
      icon: Banknote,
    },
    {
      name: 'Quick Process',
      description: 'Complete your mortgage switch in as little as 3 weeks with our streamlined process.',
      icon: Clock,
    },
    {
      name: 'Safe & Secure',
      description: 'Your data is protected with bank-grade security throughout the entire process.',
      icon: Shield,
    },
    {
      name: 'Expert Support',
      description: 'Get personalized guidance from licensed mortgage professionals.',
      icon: ThumbsUp,
    },
  ];

  return (
    <div id="benefits" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Benefits</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Switch Your Mortgage?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover how easy it is to save money and get better terms on your mortgage.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <benefit.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{benefit.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
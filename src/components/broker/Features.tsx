import React from 'react';
import { Zap, Shield, TrendingUp, Clock } from 'lucide-react';

export function Features() {
  const features = [
    {
      name: 'Lightning Fast Processing',
      description: 'Process mortgage applications up to 10x faster with our AI-powered system.',
      icon: Zap,
    },
    {
      name: 'Bank-Grade Security',
      description: 'Enterprise-level security protocols protect sensitive customer data.',
      icon: Shield,
    },
    {
      name: 'Market Intelligence',
      description: 'Real-time market analysis and predictive insights for better decisions.',
      icon: TrendingUp,
    },
    {
      name: '24/7 Availability',
      description: 'Round-the-clock access to your mortgage platform and support.',
      icon: Clock,
    },
  ];

  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Better mortgage processing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Everything you need to modernize your mortgage business and stay ahead of the competition.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
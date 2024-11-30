import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: 299,
      features: [
        'Up to 50 applications/month',
        'Basic analytics',
        'Email support',
        'API access',
      ],
    },
    {
      name: 'Professional',
      price: 799,
      features: [
        'Up to 200 applications/month',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Team collaboration',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited applications',
        'Custom analytics',
        '24/7 dedicated support',
        'White-label solution',
        'Custom development',
        'SLA guarantee',
      ],
    },
  ];

  return (
    <div id="pricing" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Choose your plan
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className="flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10"
            >
              <div>
                <h3 className="text-lg font-semibold leading-8 text-white">{tier.name}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-300">
                  {typeof tier.price === 'number' ? (
                    <span className="flex items-baseline gap-x-2">
                      <span className="text-4xl font-bold tracking-tight text-white">${tier.price}</span>
                      <span className="text-sm font-semibold leading-6">/month</span>
                    </span>
                  ) : (
                    <span className="text-4xl font-bold tracking-tight text-white">Contact Us</span>
                  )}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-blue-400" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                className="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white bg-blue-600 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
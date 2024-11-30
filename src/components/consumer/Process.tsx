import React from 'react';
import { ClipboardCheck, MessageSquare, FileSearch, ThumbsUp } from 'lucide-react';

export function Process() {
  const steps = [
    {
      name: 'Quick Application',
      description: 'Fill out our simple online application form in just 5 minutes.',
      icon: ClipboardCheck,
    },
    {
      name: 'Expert Consultation',
      description: 'Discuss your options with a licensed mortgage professional.',
      icon: MessageSquare,
    },
    {
      name: 'Document Review',
      description: "We'll review your documents and find the best rates available.",
      icon: FileSearch,
    },
    {
      name: 'Complete Switch',
      description: 'Finalize your new mortgage and start saving money.',
      icon: ThumbsUp,
    },
  ];

  return (
    <div id="process" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Process</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our simple 4-step process makes switching your mortgage easy and hassle-free.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.name} className="relative">
                <div className="flex items-center justify-center">
                  <span className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                    <step.icon className="h-8 w-8 text-green-600" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center">
                    <span className="text-xl font-medium text-gray-900">Step {index + 1}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">{step.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
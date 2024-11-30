import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';
import { useFormattedNumber } from '../../hooks/useFormattedNumber';

export function Calculator() {
  const [currentRate, setCurrentRate] = useState('');
  const { value: loanAmount, formattedValue: formattedLoanAmount, handleChange: handleLoanAmountChange } = useFormattedNumber();
  const [newRate, setNewRate] = useState('');

  const calculateSavings = () => {
    const principal = parseFloat(loanAmount);
    const oldRate = parseFloat(currentRate) / 100 / 12;
    const newRateMonthly = parseFloat(newRate) / 100 / 12;
    const numberOfPayments = 30 * 12;

    const oldPayment = principal * (oldRate * Math.pow(1 + oldRate, numberOfPayments)) / (Math.pow(1 + oldRate, numberOfPayments) - 1);
    const newPayment = principal * (newRateMonthly * Math.pow(1 + newRateMonthly, numberOfPayments)) / (Math.pow(1 + newRateMonthly, numberOfPayments) - 1);

    return {
      monthlySavings: oldPayment - newPayment,
      yearlySavings: (oldPayment - newPayment) * 12,
    };
  };

  const savings = currentRate && loanAmount && newRate ? calculateSavings() : null;

  const inputClasses = "mt-1 block w-full px-4 py-3 text-lg rounded-lg border-0 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 focus:bg-white transition-colors duration-200";

  return (
    <div id="calculator" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Calculator</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Calculate Your Savings
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            See how much you could save by switching your mortgage.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="px-8 py-10">
            <div className="space-y-8">
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">Current Interest Rate (%)</label>
                <input
                  type="number"
                  step="0.01"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(e.target.value)}
                  placeholder="5.25"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">Loan Amount ($)</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={formattedLoanAmount}
                  onChange={handleLoanAmountChange}
                  placeholder="300,000"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">New Interest Rate (%)</label>
                <input
                  type="number"
                  step="0.01"
                  value={newRate}
                  onChange={(e) => setNewRate(e.target.value)}
                  placeholder="4.50"
                  className={inputClasses}
                />
              </div>
            </div>

            {savings && (
              <div className="mt-10 p-6 bg-green-50 rounded-xl border border-green-100">
                <h3 className="text-lg font-semibold text-green-900">Your Potential Savings</h3>
                <dl className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <dt className="text-sm font-medium text-green-500">Monthly Savings</dt>
                    <dd className="mt-1 text-3xl font-semibold text-green-900">
                      ${Math.round(savings.monthlySavings).toLocaleString()}
                    </dd>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <dt className="text-sm font-medium text-green-500">Yearly Savings</dt>
                    <dd className="mt-1 text-3xl font-semibold text-green-900">
                      ${Math.round(savings.yearlySavings).toLocaleString()}
                    </dd>
                  </div>
                </dl>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">change.mortgage</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#benefits" className="text-gray-600 hover:text-green-600">Benefits</a>
            <a href="#calculator" className="text-gray-600 hover:text-green-600">Calculator</a>
            <a href="#process" className="text-gray-600 hover:text-green-600">How It Works</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600">Contact</a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#benefits" className="block px-3 py-2 text-gray-600 hover:text-green-600">Benefits</a>
            <a href="#calculator" className="block px-3 py-2 text-gray-600 hover:text-green-600">Calculator</a>
            <a href="#process" className="block px-3 py-2 text-gray-600 hover:text-green-600">How It Works</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-green-600">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
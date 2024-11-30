import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">change.mortgage</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Making mortgage changes simple and efficient for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('openDocument', { detail: 'privacy' }))}
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('openDocument', { detail: 'terms' }))}
                  className="text-gray-400 hover:text-white"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('openDocument', { detail: 'cookies' }))}
                  className="text-gray-400 hover:text-white"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {currentYear} change.mortgage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { PrivacyPolicy } from '../documents/PrivacyPolicy';
import { TermsConditions } from '../documents/TermsConditions';
import { CookiePolicy } from '../documents/CookiePolicy';

export function DocumentViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [documentType, setDocumentType] = useState<'privacy' | 'terms' | 'cookies' | null>(null);

  useEffect(() => {
    const handleOpenDocument = (e: CustomEvent<'privacy' | 'terms' | 'cookies'>) => {
      setDocumentType(e.detail);
      setIsOpen(true);
    };

    window.addEventListener('openDocument', handleOpenDocument as EventListener);
    return () => window.removeEventListener('openDocument', handleOpenDocument as EventListener);
  }, []);

  if (!isOpen) return null;

  const renderDocument = () => {
    switch (documentType) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsConditions />;
      case 'cookies':
        return <CookiePolicy />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-4xl">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-6 sm:px-6 bg-white border-b">
                  <h2 className="text-lg font-semibold">
                    {documentType === 'privacy' && 'Privacy Policy'}
                    {documentType === 'terms' && 'Terms & Conditions'}
                    {documentType === 'cookies' && 'Cookie Policy'}
                  </h2>
                  <button
                    type="button"
                    className="rounded-md text-gray-400 hover:text-gray-500"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {renderDocument()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
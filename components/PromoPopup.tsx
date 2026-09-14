"use client";

import { useEffect, useState } from "react";

interface PromoPopupProps {
  imageUrl: string;
  linkUrl?: string;
  altText?: string;
}

export default function PromoPopup({ imageUrl, linkUrl = "#", altText = "Promotional Banner" }: PromoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Automatically show popup after a delay, e.g., 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 md:p-6 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative inline-block w-auto max-w-full rounded-xl shadow-2xl overflow-hidden bg-transparent animate-in zoom-in-95 duration-300">
        
        {/* Cancel/Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 md:top-3 md:right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Close promotion"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Banner Content */}
        <a 
          href={linkUrl} 
          className="block w-full max-h-[90vh]"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={imageUrl} 
            alt={altText} 
            className="w-auto h-auto max-w-full max-h-[90vh] object-contain block"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/askjack-logo.png"
            alt="Ask Jack"
            width={200}
            height={60}
            className="h-12 md:h-16 w-auto"
            priority
          />
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <a
            href="https://apps.apple.com/us/app/ask-jack-at-igpc/id6468837240"
            className="btn-gold text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Free Trial
          </a>
          <a href="#courses" className="btn-gold-text text-sm">
            En Español
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <div className="w-6 h-0.5 bg-crimson"></div>
          <div className="w-6 h-0.5 bg-crimson"></div>
          <div className="w-6 h-0.5 bg-crimson"></div>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-light-gray p-4 flex flex-col gap-4">
          <a
            href="https://apps.apple.com/us/app/ask-jack-at-igpc/id6468837240"
            className="btn-gold w-full text-center text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Free Trial
          </a>
          <a href="#courses" className="btn-gold-text text-sm" onClick={() => setIsOpen(false)}>
            En Español
          </a>
        </div>
      )}
    </nav>
  );
}

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/askjack-logo.png"
              alt="Ask Jack"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              © 2026 Ask Jack at IGPC — Infinity GPC. All rights reserved.
            </p>
          </div>

          <div className="flex justify-center md:justify-end gap-6">
            <a
              href="https://apps.apple.com/us/app/ask-jack-at-igpc/id6468837240"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition text-sm"
            >
              Apple App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.pacwm722gscf.p2yg7t8dapp&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition text-sm"
            >
              Google Play
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            AskJack.Pro · Ask.Jack@InfinityGPC.com · San Gabriel Valley, Los Angeles, CA
          </p>
        </div>
      </div>
    </footer>
  );
}

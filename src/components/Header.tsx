'use client';

import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1E1E3F]/80 backdrop-blur-md z-50">
      <nav className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-3xl font-bold text-[#FF00FF] font-[jaro] ">Yacinoxo</h1>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
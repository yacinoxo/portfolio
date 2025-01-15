'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('en');


  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setCurrentLang(newLang);
  };

  return (
    <Link href={currentLang === "en" ? "/ar" : "/"}
      onClick={toggleLanguage}
      className="px-4 py-2 rounded bg-[#2D2B55] text-white hover:bg-[#373561] transition-colors"
    >
      {currentLang === 'en' ? 'العربية' : 'English'}
    </Link>
  );
}
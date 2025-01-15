'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';



export default function Header() {

  const pathname = usePathname()

  const [currentLang, setCurrentLang] = useState(pathname === "/" ? "en" : "ar");
  
    const toggleLanguage = () => {
      const newLang = currentLang === 'en' ? 'ar' : 'en';
      setCurrentLang(newLang);
    };


  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1E1E3F]/80 backdrop-blur-md z-50" dir={currentLang === "en" ? "ltr" : "rtl"}>
      <nav className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-3xl font-bold text-[#FF00FF] font-[jaro] ">Yacinoxo</h1>
          <Link href={currentLang === "en" ? "/ar" : "/"}
            onClick={toggleLanguage}
            className={`${currentLang === 'en' ? "font-[lalezar]" : "font-[jaro]"} px-4 py-2 rounded bg-[#2D2B55] text-white hover:bg-[#373561] transition-colors`}
          >
            {currentLang === 'en' ? 'العربية' : 'English'}
          </Link>
        </div>
      </nav>
    </header>
  );
}
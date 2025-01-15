'use client';

import { Jaro, Lalezar } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';


const jaro = Jaro({ subsets : ['latin']})
const lalezar = Lalezar({
  subsets : ["latin"],
  weight : "400"
})


export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('en');


  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setCurrentLang(newLang);
  };

  return (
    <Link href={currentLang === "en" ? "/ar" : "/"}
      onClick={toggleLanguage}
      className={`${currentLang === 'en' ? "font-[lalezar]" : "font-[jaro]"} px-4 py-2 rounded bg-[#2D2B55] text-white hover:bg-[#373561] transition-colors`}
    >
      {currentLang === 'en' ? 'العربية' : 'English'}
    </Link>
  );
}
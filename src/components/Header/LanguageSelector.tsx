import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguageStore } from '../../store/languageStore';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'si', name: 'සිංහල' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'fr', name: 'Français' }
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage } = useLanguageStore();
  const selectedLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
      >
        <Globe className="h-5 w-5 text-gray-600" />
        <span className="text-sm text-gray-700">{selectedLang.name}</span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
import { create } from 'zustand';

interface LanguageState {
  currentLanguage: string;
  setLanguage: (language: string) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  currentLanguage: 'en',
  setLanguage: (language) => set({ currentLanguage: language }),
}));
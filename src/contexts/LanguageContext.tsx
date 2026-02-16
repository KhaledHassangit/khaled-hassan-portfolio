import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Lang } from "@/i18n/translations";

type TranslationType = typeof translations.en;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: TranslationType;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem("lang") as Lang) || "en";
  });

  const t = translations[lang] as TranslationType;
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};



import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";



import uzTr from "../public/Local/uzbek.json";
import ruTr from "../public/Local/rus.json";
import enTr from "../public/Local/ingliz.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "uz",
    debug: true,
    resources: {
      uz: { translation: uzTr },
      ru: { translation: ruTr },
      en: { translation: enTr },
    },
  });

export default i18n;

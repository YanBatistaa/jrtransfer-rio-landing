import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Carrega traduções de um servidor (da pasta /public)
  .use(LanguageDetector) // Detecta o idioma do usuário
  .use(initReactI18next) // Passa a instância do i18n para o react-i18next
  .init({
    supportedLngs: ["pt", "en", "es"], // Idiomas suportados
    fallbackLng: "pt", // Idioma padrão caso a detecção falhe
    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Caminho para os arquivos de tradução
    },
    react: {
      useSuspense: true, // Usa o Suspense do React para carregar as traduções
    },
  });

export default i18n;
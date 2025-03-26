import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './locales/en.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
  pt: { translation: pt }
};

const fallback = 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: fallback,
    fallbackLng: fallback,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

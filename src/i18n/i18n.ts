import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import languageEs from './locales/language_es.json';
import languageEn from './locales/language_en.json';
import languagePt from './locales/language_pt.json';
import languageDe from './locales/language_de.json';

const resources = {
	es: { translation: languageEs.es },
	en: { translation: languageEn.en },
	pt: { translation: languagePt.pt },
	de: { translation: languageDe.de },
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'en', // idioma por defecto
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export { i18n };

/**
 * Archivo: i18n.ts
 * Propósito: inicializa y configura i18next para soporte multilenguaje global.
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import type { Resource } from 'i18next';

import en from './locales/en.json';
import es from './locales/es.json';

// Traducciones disponibles: inglés (por defecto) y español
const resources: Resource = {
	en: { translation: en },
	es: { translation: es },
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'es', // Idioma por defecto
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false, // React ya maneja el escape
	},
});

export { i18n };

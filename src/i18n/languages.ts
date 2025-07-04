/**
 * Archivo: languages.ts
 * Propósito: Lista centralizada de idiomas disponibles en la aplicación.
 */

import type { LanguageOption } from './types/i18n';

export const availableLanguages: LanguageOption[] = [
	{ code: 'es', label: 'Español' },
	{ code: 'en', label: 'English' },
	{ code: 'pt', label: 'Português' },
	{ code: 'de', label: 'Deutsch' },
];

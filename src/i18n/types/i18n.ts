/**
 * Archivo: i18n.ts
 * Propósito: define el tipo recursivo para claves de traducción basadas en el JSON original
 * y los idiomas disponibles en la aplicación.
 */

// Importa las traducciones base para extraer las claves disponibles
import type languageEn from '../locales/language_en.json';

type RecursiveKeyOf<TObj extends object> = {
	[TKey in keyof TObj & string]: TObj[TKey] extends object
		? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
		: `${TKey}`;
}[keyof TObj & string];

export type TranslationKeys = RecursiveKeyOf<(typeof languageEn)['en']>;

/**
 * Códigos de idioma soportados por la app.
 */
export type LanguageCode = 'es' | 'en' | 'pt' | 'de';

export type LanguageOption = {
	code: LanguageCode;
	label: string;
};

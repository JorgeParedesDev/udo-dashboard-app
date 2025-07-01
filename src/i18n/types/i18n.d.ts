/**
 * Archivo: i18n.d.ts
 * Propósito: define el tipo recursivo para claves de traducción basadas en el JSON original
 * y los idiomas disponibles en la aplicación.
 */

import type en from './en.json';

type RecursiveKeyOf<TObj extends object> = {
	[TKey in keyof TObj & string]: TObj[TKey] extends object
		? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
		: `${TKey}`;
}[keyof TObj & string];

export type TranslationKeys = RecursiveKeyOf<typeof en>;

/**
 * Códigos de idioma soportados por la app.
 */
export type LanguageCode = 'es' | 'en';

export type LanguageOption = {
	code: LanguageCode;
	label: string;
};

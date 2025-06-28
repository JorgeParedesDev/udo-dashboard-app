/**
 * Archivo: i18n.d.ts
 * Propósito: define el tipo recursivo para claves de traducción basadas en el JSON original.
 */

import type en from './en.json';

type RecursiveKeyOf<TObj extends object> = {
	[TKey in keyof TObj & string]: TObj[TKey] extends object
		? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
		: `${TKey}`;
}[keyof TObj & string];

export type TranslationKeys = RecursiveKeyOf<typeof en>;

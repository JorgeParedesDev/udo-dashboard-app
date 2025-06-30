/**
 * Archivo: i18n.d.ts
 * Propósito: define el tipo recursivo para claves de traducción basadas en el JSON original.
 */

// Importamos el archivo JSON de traducciones para inferir las claves válidas.
// La ruta original era incorrecta, lo que hacía fallar el import en tiempo de
// compilación de tipos.
import type en from '../locales/en.json';

type RecursiveKeyOf<TObj extends object> = {
	[TKey in keyof TObj & string]: TObj[TKey] extends object
		? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
		: `${TKey}`;
}[keyof TObj & string];

export type TranslationKeys = RecursiveKeyOf<typeof en>;

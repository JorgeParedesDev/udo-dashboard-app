/**
 * Archivo: ThemeContextObject.ts
 * Propósito: Define la interfaz y el objeto por defecto para el contexto de tema (light/dark).
 */

import type { ThemeMode } from './types/theme';

/**
 * Interfaz del valor que será compartido por el ThemeContext.
 */
export interface ThemeContextValue {
	mode: ThemeMode; // Estado actual del tema ('light' | 'dark')
	toggleColorMode: () => void; // Función para cambiar el tema
}

/**
 * Objeto por defecto que usará el contexto si no se provee un valor.
 * toggleColorMode es un placeholder sin funcionalidad.
 */
export const themeContextObject: ThemeContextValue = {
	mode: 'light',
	toggleColorMode: () => {}, // noop
};

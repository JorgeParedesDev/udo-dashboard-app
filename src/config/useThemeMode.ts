/**
 * Archivo: useThemeMode.ts
 * Propósito: Hook personalizado para acceder al contexto del tema y cambiar el modo.
 */

import { useContext } from 'react';

import { ThemeContext } from './ThemeContextInstance';

/**
 * Hook que expone el modo de tema y la función para cambiarlo.
 */
export const useThemeMode = () => {
	return useContext(ThemeContext);
};

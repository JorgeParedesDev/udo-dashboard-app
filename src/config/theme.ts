/**
 * Archivo: theme.ts
 * Propósito: Genera el objeto Theme de MUI según el modo actual ('light' o 'dark').
 */

import { createTheme, type Theme } from '@mui/material/styles';

import type { ThemeMode } from './types/theme';

/**
 * Devuelve el objeto de tema personalizado basado en el modo actual.
 */
export const getTheme = (mode: ThemeMode): Theme =>
	createTheme({
		palette: {
			mode,
		},
		shape: {
			borderRadius: 8,
		},
		layout: {
			background: mode === 'light' ? '#f5f5f5' : '#121212',
			text: mode === 'light' ? '#1e1e1e' : '#f5f5f5',
		},
	});

/**
 * Archivo: theme.ts
 * Propósito: Genera el objeto Theme de MUI según el modo actual ('light' o 'dark').
 */

import { createTheme, type Theme } from '@mui/material/styles';

import type { ThemeMode } from './types/theme';

/**
 * Devuelve el objeto de tema personalizado basado en el modo actual.
 * Incluye configuración de paleta y forma (shape).
 *
 * La clave 'layout' se declara dentro de 'palette' para que esté tipada y disponible en theme.palette.layout.
 */
export const getTheme = (mode: ThemeMode): Theme =>
	createTheme({
		palette: {
			mode,
			layout: {
				background: mode === 'light' ? '#f5f5f5' : '#121212',
				header: mode === 'light' ? '#ffffff' : '#1a1a1a',
				text: mode === 'light' ? '#1e1e1e' : '#f5f5f5',
			},
			logo: {
				primary: mode === 'light' ? '#11296B' : '#00509D',
				secondary: mode === 'light' ? '#FFDB57' : '#FFDB57',
			},
		},
		shape: {
			borderRadius: 8,
		},
	});

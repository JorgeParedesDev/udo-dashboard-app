/**
 * Archivo: theme.d.ts
 * Propósito: Extiende el Theme de MUI para incluir la clave 'layout' fuera de 'palette'.
 */

import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Theme {
		layout: {
			background: string;
			text: string;
		};
	}
	interface ThemeOptions {
		layout?: {
			background: string;
			text: string;
		};
	}
}

export type ThemeMode = 'light' | 'dark';

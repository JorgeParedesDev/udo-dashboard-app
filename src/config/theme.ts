/**
 * Archivo: theme.ts
 * Propósito: Genera el objeto Theme de MUI según el modo actual ('light' o 'dark').
 */

import { createTheme, type Theme } from '@mui/material/styles';

import type { ThemeMode } from './types/theme';
import { themeColors } from './theme-defaults';

const defaultTheme = createTheme(); // se usa para acceder a breakpoints tipados

/**
 * Devuelve el objeto de tema personalizado basado en el modo actual.
 * Incluye:
 * - paleta extendida (`layout`, `logo`, `primary`, `secondary`, `text`, `background`)
 * - tipografía personalizada
 * - breakpoints fijos
 * - overrides globales de componentes
 */
export const getTheme = (mode: ThemeMode): Theme =>
	createTheme({
		// Desactiva el responsive redefiniendo los valores a 0
		breakpoints: {
			values: {
				xs: 0,
				sm: 0,
				md: 0,
				lg: 0,
				xl: 0,
			},
		},

		// Paleta completa basada en el modo (incluye valores extendidos)
		palette: {
			mode,
			...themeColors[mode],
		},

		// Tipografía personalizada para títulos y cuerpo
		typography: {
			fontFamily: '"Inter", "Source Sans 3", sans-serif',
			h1: {
				fontSize: '2rem',
				fontWeight: 700,
			},
			h2: {
				fontSize: '1.75rem',
				fontWeight: 600,
			},
			h3: {
				fontSize: '1.5rem',
				fontWeight: 600,
			},
			h4: {
				fontSize: '1.25rem',
				fontWeight: 500,
			},
			h5: {
				fontSize: '1.125rem',
				fontWeight: 500,
			},
			body1: {
				fontSize: '1rem',
				fontWeight: 400,
			},
			button: {
				fontSize: '0.875rem',
				fontWeight: 600,
				textTransform: 'none',
			},
		},

		// Estilo general de los bordes
		shape: {
			borderRadius: 8,
		},

		// Overrides globales de componentes MUI
		components: {
			MuiToolbar: {
				styleOverrides: {
					root: {
						[defaultTheme.breakpoints.up('xs')]: {
							minHeight: '48px',
							height: '48px',
						},
					},
				},
			},
		},
	});

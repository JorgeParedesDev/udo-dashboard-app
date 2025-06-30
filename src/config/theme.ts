/**
 * Archivo: theme.ts
 * Propósito: Genera el objeto Theme de MUI según el modo actual ('light' o 'dark').
 */

import { createTheme, type Theme } from '@mui/material/styles';

import type { ThemeMode } from './types/theme';

const defaultTheme = createTheme(); // se usa para acceder a breakpoints tipados

/**
 * Devuelve el objeto de tema personalizado basado en el modo actual.
 * Incluye paleta de colores extendida, forma y overrides globales de componentes.
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

		// Paleta personalizada extendida para layout y branding
		palette: {
			mode,
			layout: {
				header: {
					background: mode === 'light' ? '#FFFFFF' : '#141A21',
					text: mode === 'light' ? '#637381' : '#919EAB',
					iconColor: mode === 'light' ? '#637381' : '#919EAB',
					search: {
						background: mode === 'light' ? '#637381' : '#919EAB',
						text: mode === 'light' ? '#637381' : '#919EAB',
						iconColor: mode === 'light' ? '#637381' : '#919EAB',
					},
				},
				background: mode === 'light' ? '#FFFFFF' : '#141A21',
			},
			logo: {
				primary: mode === 'light' ? '#11296B' : '#00509D',
				secondary: '#FFDB57',
			},
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

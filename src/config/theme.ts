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
					background: mode === 'light' ? '#ffffff' : '#1a1a1a',
					text: mode === 'light' ? '#1e1e1e' : '#f5f5f5',
					border:
						mode === 'light'
							? '1px solid #e0e0e0'
							: '1px solid #2a2a2a',
					iconColor: mode === 'light' ? '#1e1e1e' : '#f5f5f5',

					// Estilos para el campo de búsqueda del header
					search: {
						background: mode === 'light' ? '#f0f0f0' : '#2a2a2a',
						border:
							mode === 'light'
								? '1px solid #ccc'
								: '1px solid #444',
						text: mode === 'light' ? '#1e1e1e' : '#f5f5f5',
						iconColor: mode === 'light' ? '#666' : '#ddd',
					},
				},
				background: mode === 'light' ? '#f5f5f5' : '#121212',
			},
			logo: {
				primary: mode === 'light' ? '#11296B' : '#00509D',
				secondary: '#FFDB57',
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
						// Aplica esta altura fija en todas las resoluciones (gracias a up('xs'))
						[defaultTheme.breakpoints.up('xs')]: {
							minHeight: '64px',
							height: '64px',
						},
					},
				},
			},
		},
	});

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
				header: {
					background: mode === 'light' ? '#ffffff' : '#1a1a1a',
					text: mode === 'light' ? '#1e1e1e' : '#f5f5f5',
					border:
						mode === 'light'
							? '1px solid #e0e0e0'
							: '1px solid #2a2a2a',
					iconColor: mode === 'light' ? '#1e1e1e' : '#f5f5f5',

					/**
					 * Estilos visuales específicos para el componente AppHeaderSearch.
					 * Permite cambiar fondo, borde, texto e ícono de forma centralizada.
					 */
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
		shape: {
			borderRadius: 8,
		},
	});

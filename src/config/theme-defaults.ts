/**
 * Archivo: theme-defaults.ts
 * Propósito: Centraliza todos los colores por modo (light/dark) para ser usados en theme.ts
 */

export const themeColors = {
	// Tema claro (modo 'light')
	light: {
		// Color primario estándar para componentes MUI (ej: botones, links)
		primary: {
			main: '#11296B',
		},
		// Color secundario estándar (ej: acentos, highlights)
		secondary: {
			main: '#FFDB57',
		},
		// Colores base para texto general
		text: {
			primary: '#212B36',
		},
		// Colores de fondo estándar
		background: {
			default: '#FFFFFF', // Fondo general de la app
			paper: '#F4F6F8', // Fondo para tarjetas, modales, secciones
		},
		// Colores personalizados para el layout general (header, etc.)
		layout: {
			header: {
				background: '#FFFFFF', // Fondo del header
				text: '#637381', // Texto en el header
				iconColor: '#637381', // Íconos del header
				search: {
					background: '#637381', // Fondo del campo de búsqueda
					text: '#637381', // Texto dentro del campo
					iconColor: '#637381', // Ícono del campo
				},
			},
			background: '#FFFFFF', // Fondo del layout general
		},
		// Colores para el logotipo de UDo (SVG)
		logo: {
			primary: '#11296B', // Color principal del logo
			secondary: '#FFDB57', // Color de acento del logo
		},
	},

	// Tema oscuro (modo 'dark')
	dark: {
		primary: {
			main: '#00509D',
		},
		secondary: {
			main: '#FFDB57',
		},
		text: {
			primary: '#F4F6F8',
		},
		background: {
			default: '#141A21',
			paper: '#1A1F25',
		},
		layout: {
			header: {
				background: '#141A21',
				text: '#919EAB',
				iconColor: '#919EAB',
				search: {
					background: '#919EAB',
					text: '#919EAB',
					iconColor: '#919EAB',
				},
			},
			background: '#141A21',
		},
		logo: {
			primary: '#00509D',
			secondary: '#FFDB57',
		},
	},
} as const; // Asegura inmutabilidad en tiempo de compilación

/**
 * Archivo: theme.d.ts
 * Propósito: Extiende la paleta de colores (Palette) del Theme de MUI para incluir la clave 'layout'.
 */

import '@mui/material/styles';

declare module '@mui/material/styles' {
	/**
	 * Extiende la paleta de colores para incluir un grupo 'layout'.
	 * Se accede mediante: theme.palette.layout
	 */
	interface Palette {
		layout: {
			background: string;
			header: string;
			text: string;
		};
	}

	/**
	 * Permite definir los valores de 'layout' dentro de la sección palette.
	 * Se configura dentro de: createTheme({ palette: { layout: {...} } })
	 */
	interface PaletteOptions {
		layout?: {
			background?: string;
			header?: string;
			text?: string;
		};
	}
}

/**
 * Define los modos de tema admitidos por la aplicación.
 */
export type ThemeMode = 'light' | 'dark';

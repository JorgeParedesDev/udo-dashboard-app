/**
 * Archivo: theme.d.ts
 * Propósito: Extiende la paleta de colores (Palette) del Theme de MUI para incluir las claves 'layout' y 'logo'.
 */

import '@mui/material/styles';

declare module '@mui/material/styles' {
	/**
	 * Extiende la paleta de colores para incluir un grupo 'layout' y 'logo'.
	 * Se accede mediante: theme.palette.layout o theme.palette.logo
	 */
	interface Palette {
		layout: {
			header: {
				background: string;
				text: string;
				border: string;
				iconColor: string;

				search: {
					background: string;
					border: string;
					text: string;
					iconColor: string;
				};
			};
			background: string;
		};
		logo: {
			primary: string;
			secondary: string;
		};
	}

	/**
	 * Permite definir los valores de 'layout' y 'logo' dentro de la sección palette.
	 * Se configura dentro de: createTheme({ palette: { layout: {...}, logo: {...} } })
	 */
	interface PaletteOptions {
		layout?: {
			header?: {
				background?: string;
				text?: string;
				border?: string;
				iconColor?: string;

				search?: {
					background?: string;
					border?: string;
					text?: string;
					iconColor?: string;
				};
			};
			background?: string;
		};
		logo?: {
			primary?: string;
			secondary?: string;
		};
	}
}

/**
 * Define los modos de tema admitidos por la aplicación.
 */
export type ThemeMode = 'light' | 'dark';

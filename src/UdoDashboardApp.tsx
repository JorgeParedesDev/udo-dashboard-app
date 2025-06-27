/**
 * Archivo: UdoDashboardApp.tsx
 * Propósito: Componente raíz de la app. Integra el sistema de theming y renderiza el contenido principal.
 */

import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';

import { useThemeMode } from './config/useThemeMode';
import { getTheme } from './config/theme';

export const UdoDashboardApp = () => {
	const { mode } = useThemeMode(); // Obtiene el modo actual ('light' | 'dark')
	const theme = getTheme(mode); // Genera el objeto de tema basado en ese modo

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
		</MuiThemeProvider>
	);
};

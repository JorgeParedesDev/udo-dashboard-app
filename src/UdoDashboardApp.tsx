/**
 * Archivo: UdoDashboardApp.tsx
 * Propósito: componente raíz de la aplicación. Aplica el tema dinámico según el modo y renderiza las rutas.
 */

import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { useThemeMode } from './config/useThemeMode';
import { getTheme } from './config/theme';
import { AppRouter } from './router/AppRouter';

export const UdoDashboardApp = () => {
	const { mode } = useThemeMode(); // Obtiene el modo actual ('light' | 'dark')
	const theme = getTheme(mode); // Genera el objeto de tema basado en ese modo

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</MuiThemeProvider>
	);
};

/**
 * Archivo: UdoDashboardApp.tsx
 * Propósito: Componente raíz de la app. Integra el sistema de theming y renderiza el contenido principal.
 */

import {
	CssBaseline,
	ThemeProvider as MuiThemeProvider,
	Box,
	Typography,
} from '@mui/material';

import { useThemeMode } from './config/useThemeMode';
import { getTheme } from './config/theme';
import { ThemeSwitcherButton } from './components/ThemeSwitcherButton';

const UdoDashboardApp = () => {
	const { mode } = useThemeMode(); // Obtiene el modo actual ('light' | 'dark')
	const theme = getTheme(mode); // Genera el objeto de tema basado en ese modo

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Box
				sx={{
					minHeight: '100vh',
					bgcolor: theme.layout.background,
					color: theme.layout.text,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 2,
				}}>
				<Typography variant='h4'>UDo Dashboard</Typography>
				<ThemeSwitcherButton />
			</Box>
		</MuiThemeProvider>
	);
};

export { UdoDashboardApp };

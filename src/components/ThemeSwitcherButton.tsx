/**
 * Archivo: ThemeSwitcherButton.tsx
 * Propósito: Botón para probar el cambio de tema claro/oscuro.
 */

import { Button } from '@mui/material';

import { useThemeMode } from '../config/useThemeMode';

export const ThemeSwitcherButton = () => {
	const { mode, toggleColorMode } = useThemeMode();

	return (
		<Button onClick={toggleColorMode} variant='contained'>
			Switch to {mode === 'light' ? 'dark' : 'light'} mode
		</Button>
	);
};

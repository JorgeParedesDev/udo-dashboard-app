/**
 * Archivo: ThemeToggleButton.tsx
 * Propósito: ícono en el Header para alternar el tema (modo claro/oscuro).
 */

import { IconButton, Tooltip } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';

/**
 * Componente visual sin funcionalidad, representando la sección de alternancia de tema.
 */
export const ThemeToggleButton = () => {
	return (
		<Tooltip title='Toggle theme'>
			<IconButton color='inherit' aria-label='toggle theme'>
				<DarkModeIcon />
			</IconButton>
		</Tooltip>
	);
};

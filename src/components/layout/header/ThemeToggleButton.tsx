/**
 * Archivo: ThemeToggleButton.tsx
 * Propósito: ícono en el Header para alternar el tema (modo claro/oscuro).
 */

import { IconButton, Tooltip } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';

/**
 * Componente visual sin funcionalidad, representando la sección de alternancia de tema.
 */
export const ThemeToggleButton = () => {
	const { translateText } = useTypedTranslation();
	return (
		<Tooltip title={translateText('header.toggleTheme')}>
			<IconButton
				color='inherit'
				aria-label={translateText('header.toggleTheme')}>
				<DarkModeIcon />
			</IconButton>
		</Tooltip>
	);
};

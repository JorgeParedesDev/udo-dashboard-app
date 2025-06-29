/**
 * Archivo: ThemeToggleButton.tsx
 * Propósito: ícono en el Header para alternar el tema (modo claro/oscuro).
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../styles/layout/app-header.styles';

/**
 * Componente visual sin funcionalidad, representando la sección de alternancia de tema.
 */
export const ThemeToggleButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();
	return (
		<Tooltip title={translateText('header.toggleTheme')}>
			<IconButton
				sx={appHeaderStyles.iconButtonHeader(theme)}
				aria-label={translateText('header.toggleTheme')}>
				<DarkModeIcon />
			</IconButton>
		</Tooltip>
	);
};

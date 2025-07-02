/**
 * Archivo: ThemeToggleButton.tsx
 * Propósito: Ícono en el Header para alternar el tema (modo claro/oscuro).
 */

import { IconButton, Tooltip } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../../styles/layout/app-header.styles';
import { useThemeMode } from '../../../../config/useThemeMode';

/**
 * Botón funcional para alternar entre modo claro y oscuro.
 */
export const ThemeToggleButton = () => {
	const { translateText } = useTypedTranslation();
	const { mode, toggleColorMode } = useThemeMode();

	const isDark = mode === 'dark';
	const icon = isDark ? <LightModeIcon /> : <DarkModeIcon />;

	return (
		<Tooltip title={translateText('header.toggleTheme')}>
			<IconButton
				onClick={toggleColorMode}
				sx={theme => appHeaderStyles.iconButtonHeader(theme)}
				aria-label={translateText('header.toggleTheme')}>
				{icon}
			</IconButton>
		</Tooltip>
	);
};

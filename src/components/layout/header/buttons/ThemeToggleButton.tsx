/**
 * Archivo: ThemeToggleButton.tsx
 * Propósito: Ícono en el Header para alternar el tema (modo claro/oscuro).
 */

import { IconButton, Tooltip } from '@mui/material';
import type { Theme } from '@mui/material/styles';
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
		<Tooltip title={translateText('Toggle theme')}>
			<IconButton
				onClick={toggleColorMode}
				sx={(theme: Theme) => appHeaderStyles.iconButtonHeader(theme)}
				aria-label={translateText('Toggle theme')}>
				{icon}
			</IconButton>
		</Tooltip>
	);
};

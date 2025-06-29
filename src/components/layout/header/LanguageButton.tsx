/**
 * Archivo: LanguageButton.tsx
 * Propósito: ícono visual para cambiar el idioma (sin funcionalidad).
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../styles/layout/app-header.styles';

/**
 * Componente visual sin funcionalidad, representa el cambio de idioma.
 */
export const LanguageButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();

	return (
		<Tooltip title={translateText('header.language')}>
			<IconButton
				sx={appHeaderStyles.iconButtonHeader(theme)}
				aria-label={translateText('header.language')}>
				<LanguageOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

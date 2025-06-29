/**
 * Archivo: AboutUdoButton.tsx
 * Propósito: botón informativo (sin funcionalidad), muestra un ícono "About".
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../styles/layout/app-header.styles';

/**
 * Componente visual sin funcionalidad, representando la sección About UDo.
 */
export const AboutUdoButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();

	return (
		<Tooltip title={translateText('header.about')}>
			<IconButton
				sx={appHeaderStyles.iconButtonHeader(theme)}
				aria-label={translateText('header.about')}>
				<InfoOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

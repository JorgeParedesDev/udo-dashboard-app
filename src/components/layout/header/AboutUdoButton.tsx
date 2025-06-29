/**
 * Archivo: AboutUdoButton.tsx
 * Propósito: botón informativo (sin funcionalidad), muestra un ícono "About".
 */

import { IconButton, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';

/**
 * Componente visual sin funcionalidad, representando la sección About UDo.
 */
export const AboutUdoButton = () => {
	const { translateText } = useTypedTranslation();

	return (
		<Tooltip title={translateText('header.about')}>
			<IconButton
				color='inherit'
				aria-label={translateText('header.about')}>
				<InfoOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

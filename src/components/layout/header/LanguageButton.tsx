/**
 * Archivo: LanguageButton.tsx
 * Propósito: ícono visual para cambiar el idioma (sin funcionalidad).
 */

import { IconButton, Tooltip } from '@mui/material';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';

/**
 * Componente visual sin funcionalidad, representa el cambio de idioma.
 */
export const LanguageButton = () => {
	const { translateText } = useTypedTranslation();

	return (
		<Tooltip title={translateText('header.language')}>
			<IconButton
				color='inherit'
				aria-label={translateText('header.language')}>
				<LanguageOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

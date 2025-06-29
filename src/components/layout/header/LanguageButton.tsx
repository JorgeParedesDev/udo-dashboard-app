/**
 * Archivo: LanguageButton.tsx
 * Propósito: ícono visual para cambiar el idioma (sin funcionalidad).
 */

import { IconButton, Tooltip } from '@mui/material';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

/**
 * Componente visual sin funcionalidad, representa el cambio de idioma.
 */
export const LanguageButton = () => {
	return (
		<Tooltip title='Language'>
			<IconButton color='inherit' aria-label='language'>
				<LanguageOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

/**
 * Archivo: AboutUdoButton.tsx
 * Propósito: botón informativo (sin funcionalidad), muestra un ícono "About".
 */

import { IconButton, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

/**
 * Componente visual sin funcionalidad, representando la sección About UDo.
 */
export const AboutUdoButton = () => {
	return (
		<Tooltip title='About UDo'>
			<IconButton color='inherit' aria-label='about udo'>
				<InfoOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

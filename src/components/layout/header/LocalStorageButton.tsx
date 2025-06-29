/**
 * Archivo: LocalStorageButton.tsx
 * Propósito: ícono visual para representar acceso al almacenamiento local.
 */

import { IconButton, Tooltip } from '@mui/material';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';

/**
 * Componente visual sin funcionalidad, representando almacenamiento local.
 */
export const LocalStorageButton = () => {
	return (
		<Tooltip title='Local Storage'>
			<IconButton color='inherit' aria-label='local storage'>
				<StorageOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

/**
 * Archivo: UserButton.tsx
 * Propósito: ícono visual para representar al usuario (sin funcionalidad).
 */

import { IconButton, Tooltip } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

/**
 * Componente visual sin funcionalidad, representa al usuario actual.
 */
export const UserButton = () => {
	return (
		<Tooltip title='User'>
			<IconButton color='inherit' aria-label='user'>
				<AccountCircleOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

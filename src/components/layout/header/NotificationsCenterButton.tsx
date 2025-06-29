/**
 * Archivo: NotificationsCenterButton.tsx
 * Propósito: ícono visual para el centro de notificaciones (sin funcionalidad).
 */

import { IconButton, Tooltip } from '@mui/material';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

/**
 * Componente visual sin funcionalidad, representa el centro de notificaciones.
 */
export const NotificationsCenterButton = () => {
	return (
		<Tooltip title='Notifications Center'>
			<IconButton color='inherit' aria-label='notifications center'>
				<ChatOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

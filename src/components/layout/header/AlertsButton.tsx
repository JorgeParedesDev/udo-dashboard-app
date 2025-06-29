/**
 * Archivo: AlertsButton.tsx
 * Propósito: ícono visual de notificaciones (sin funcionalidad).
 */

import { IconButton, Tooltip } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

/**
 * Componente visual sin funcionalidad, representando notificaciones o alertas.
 */
export const AlertsButton = () => {
	return (
		<Tooltip title='Alerts'>
			<IconButton color='inherit' aria-label='alerts'>
				<NotificationsNoneOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

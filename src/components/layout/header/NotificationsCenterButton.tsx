/**
 * Archivo: NotificationsCenterButton.tsx
 * Propósito: ícono visual para el centro de notificaciones (sin funcionalidad).
 */

import { IconButton, Tooltip } from '@mui/material';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';

/**
 * Componente visual sin funcionalidad, representa el centro de notificaciones.
 */
export const NotificationsCenterButton = () => {
	const { translateText } = useTypedTranslation();
	return (
		<Tooltip title={translateText('header.notificationsCenter')}>
			<IconButton
				color='inherit'
				aria-label={translateText('header.notificationsCenter')}>
				<ChatOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

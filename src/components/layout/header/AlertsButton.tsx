/**
 * Archivo: AlertsButton.tsx
 * Propósito: ícono visual de notificaciones (sin funcionalidad).
 */

import { IconButton, Tooltip } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';

/**
 * Componente visual sin funcionalidad, representando notificaciones o alertas.
 */
export const AlertsButton = () => {
	const { translateText } = useTypedTranslation();
	return (
		<Tooltip title={translateText('header.alerts')}>
			<IconButton
				color='inherit'
				aria-label={translateText('header.alerts')}>
				<NotificationsNoneOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

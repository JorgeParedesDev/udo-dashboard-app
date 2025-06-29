/**
 * Archivo: NotificationsCenterButton.tsx
 * Propósito: ícono visual para el centro de notificaciones (sin funcionalidad).
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../styles/layout/app-header.styles';

/**
 * Componente visual sin funcionalidad, representa el centro de notificaciones.
 */
export const NotificationsCenterButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();
	return (
		<Tooltip title={translateText('header.notificationsCenter')}>
			<IconButton
				sx={appHeaderStyles.iconButtonHeader(theme)}
				aria-label={translateText('header.notificationsCenter')}>
				<ChatOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

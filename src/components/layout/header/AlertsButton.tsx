/**
 * Archivo: AlertsButton.tsx
 * Propósito: ícono visual de notificaciones (sin funcionalidad).
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../styles/layout/app-header.styles';

/**
 * Componente visual sin funcionalidad, representando notificaciones o alertas.
 */
export const AlertsButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();

	return (
		<Tooltip title={translateText('header.alerts')}>
			<IconButton
				sx={appHeaderStyles.iconButtonHeader(theme)}
				aria-label={translateText('header.alerts')}>
				<NotificationsNoneOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

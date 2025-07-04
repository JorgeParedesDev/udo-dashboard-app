/**
 * Archivo: NotificationsCenterButton.tsx
 * Propósito: botón que despliega el panel lateral derecho de notificaciones.
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../../styles/layout/app-header.styles';
import { NotificationsDrawer } from '../drawers/NotificationsDrawer';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';

/**
 * Componente que muestra el botón de notificaciones y el Drawer asociado.
 */
export const NotificationsCenterButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();
	const { open, handleOpen, handleClose } = useDrawerToggle();

	return (
		<>
			<Tooltip title={translateText('Notifications Center')}>
				<IconButton
					onClick={handleOpen}
					sx={appHeaderStyles.iconButtonHeader(theme)}
					aria-label={translateText('Notifications Center')}>
					<ChatOutlinedIcon />
				</IconButton>
			</Tooltip>

			<NotificationsDrawer open={open} onClose={handleClose} />
		</>
	);
};

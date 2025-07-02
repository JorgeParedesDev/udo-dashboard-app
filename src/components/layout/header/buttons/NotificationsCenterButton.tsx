/**
 * Archivo: NotificationsCenterButton.tsx
 * Propósito: botón que despliega el panel lateral derecho de notificaciones.
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../../styles/layout/app-header.styles';
import { LocalStorageDrawer } from '../drawers/LocalStorageDrawer';
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
			<Tooltip title={translateText('header.notificationsCenter')}>
				<IconButton
					onClick={handleOpen}
					sx={appHeaderStyles.iconButtonHeader(theme)}
					aria-label={translateText('header.notificationsCenter')}>
					<ChatOutlinedIcon />
				</IconButton>
			</Tooltip>

			<LocalStorageDrawer open={open} onClose={handleClose} />
		</>
	);
};

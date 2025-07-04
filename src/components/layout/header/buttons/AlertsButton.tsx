/**
 * Archivo: AlertsButton.tsx
 * Propósito: botón que despliega el panel lateral derecho de alertas.
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../../styles/layout/app-header.styles';
import { AlertsDrawer } from '../drawers/AlertsDrawer';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';

/**
 * Componente que muestra el botón de alertas y el Drawer asociado.
 */
export const AlertsButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();
	const { open, handleOpen, handleClose } = useDrawerToggle();

	return (
		<>
			<Tooltip title={translateText('Alerts')}>
				<IconButton
					onClick={handleOpen}
					sx={appHeaderStyles.iconButtonHeader(theme)}
					aria-label={translateText('Alerts')}>
					<NotificationsNoneOutlinedIcon />
				</IconButton>
			</Tooltip>

			<AlertsDrawer open={open} onClose={handleClose} />
		</>
	);
};

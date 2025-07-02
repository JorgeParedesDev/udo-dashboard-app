/**
 * Archivo: AlertsButton.tsx
 * Propósito: botón que despliega el panel lateral derecho de alertas.
 */

import { useState } from 'react';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../../styles/layout/app-header.styles';
import { AlertsDrawer } from '../drawers/AlertsDrawer';

/**
 * Componente que muestra el botón de alertas y el Drawer asociado.
 */
export const AlertsButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Tooltip title={translateText('header.alerts')}>
				<IconButton
					onClick={handleOpen}
					sx={appHeaderStyles.iconButtonHeader(theme)}
					aria-label={translateText('header.alerts')}>
					<NotificationsNoneOutlinedIcon />
				</IconButton>
			</Tooltip>

			<AlertsDrawer open={open} onClose={handleClose} />
		</>
	);
};

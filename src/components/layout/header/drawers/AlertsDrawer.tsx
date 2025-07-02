/**
 * Archivo: AlertsDrawer.tsx
 * Ubicación: src/components/layout/header/drawers/
 * Propósito: Drawer lateral derecho para mostrar alertas.
 */

import { Box, Drawer, IconButton, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { notificationsDrawerStyles } from '../../../../styles/layout/notifications-drawer.styles';

type AlertsDrawerProps = {
	open: boolean;
	onClose: () => void;
};

export const AlertsDrawer = ({ open, onClose }: AlertsDrawerProps) => {
	const { translateText } = useTypedTranslation();

	return (
		<Drawer
			anchor='right'
			open={open}
			onClose={onClose}
			slotProps={{
				paper: { sx: notificationsDrawerStyles.paper },
			}}>
			<Box sx={notificationsDrawerStyles.headerBox}>
				<Box sx={notificationsDrawerStyles.titleBox}>
					<WarningAmberOutlinedIcon />
					<Typography variant='subtitle1' fontWeight={600}>
						{translateText('alerts.title')}
					</Typography>
				</Box>
				<IconButton onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</Box>

			<Divider />

			<Box sx={notificationsDrawerStyles.contentBox}>
				<Typography variant='body2' color='text.secondary'>
					{translateText('alerts.empty')}
				</Typography>
			</Box>
		</Drawer>
	);
};

/**
 * Archivo: AlertsDrawer.tsx
 * Ubicación: src/components/layout/header/drawers/
 * Propósito: Drawer lateral derecho para mostrar alertas.
 */

import { Box, Drawer, IconButton, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { notificationsDrawerStyles } from '../../../../styles/layout/notifications-drawer.styles';

export const AlertsDrawer = ({ open, onClose }: Layout.DrawerProps) => {
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
					<NotificationsNoneOutlinedIcon />
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

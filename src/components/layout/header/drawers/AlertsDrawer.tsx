/**
 * Archivo: AlertsDrawer.tsx
 * Propósito: Drawer lateral derecho para mostrar alertas.
 */

import { Box, Drawer, IconButton, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { drawerStyles } from '../../../../styles/layout/app-drawer.style';

export const AlertsDrawer = ({ open, onClose }: Layout.DrawerProps) => {
	const { translateText } = useTypedTranslation();

	return (
		<Drawer
			anchor='right'
			open={open}
			onClose={onClose}
			slotProps={{
				paper: { sx: drawerStyles.paper },
			}}>
			<Box sx={drawerStyles.headerBox}>
				<Box sx={drawerStyles.titleBox}>
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

			<Box sx={drawerStyles.contentBox}>
				<Typography variant='body2' color='text.secondary'>
					{translateText('alerts.empty')}
				</Typography>
			</Box>
		</Drawer>
	);
};

/**
 * Archivo: NotificationsDrawer.tsx
 * Ubicación: src/components/layout/header/drawers/
 * Propósito: Drawer lateral derecho para mostrar notificaciones.
 */

import { Box, Drawer, IconButton, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { drawerStyles } from '../../../../styles/layout/app-drawer.style';
import type { DrawerProps } from '../../../../types/layout/drawers';

export const NotificationsDrawer = ({ open, onClose }: DrawerProps) => {
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
					<ChatOutlinedIcon />
					<Typography variant='subtitle1' fontWeight={600}>
						{translateText('notifications.title')}
					</Typography>
				</Box>
				<IconButton onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</Box>

			<Divider />

			<Box sx={drawerStyles.contentBox}>
				<Typography variant='body2' color='text.secondary'>
					{translateText('notifications.empty')}
				</Typography>
			</Box>
		</Drawer>
	);
};

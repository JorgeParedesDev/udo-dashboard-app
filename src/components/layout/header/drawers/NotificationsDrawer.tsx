/**
 * Archivo: NotificationsDrawer.tsx
 * Ubicación: src/components/layout/header/drawers/
 * Propósito: Drawer lateral derecho para mostrar notificaciones.
 */

import { Box, Drawer, IconButton, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { notificationsDrawerStyles } from '../../../../styles/layout/notifications-drawer.styles';

type NotificationsDrawerProps = {
	open: boolean;
	onClose: () => void;
};

export const NotificationsDrawer = ({
	open,
	onClose,
}: NotificationsDrawerProps) => {
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
						{translateText('notifications.title')}
					</Typography>
				</Box>
				<IconButton onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</Box>

			<Divider />

			<Box sx={notificationsDrawerStyles.contentBox}>
				<Typography variant='body2' color='text.secondary'>
					{translateText('notifications.empty')}
				</Typography>
			</Box>
		</Drawer>
	);
};

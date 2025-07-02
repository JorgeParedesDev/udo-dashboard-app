/**
 * Archivo: NotificationsDrawer.tsx
 * Ubicación: src/components/layout/header/
 * Propósito: Drawer lateral derecho para mostrar notificaciones.
 */

import { Box, Drawer, IconButton, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';

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
			PaperProps={{
				sx: { width: 360 },
			}}>
			<Box
				display='flex'
				alignItems='center'
				justifyContent='space-between'
				px={2}
				py={1.5}>
				<Box display='flex' alignItems='center' gap={1}>
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

			<Box px={2} py={2}>
				<Typography variant='body2' color='text.secondary'>
					{translateText('notifications.empty')}
				</Typography>
			</Box>
		</Drawer>
	);
};

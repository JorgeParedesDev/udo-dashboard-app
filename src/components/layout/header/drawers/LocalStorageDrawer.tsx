/**
 * Archivo: LocalStorageDrawer.tsx
 * Propósito: Drawer lateral derecho para mostrar el Almecenamiento Local.
 */

import { Box, Drawer, IconButton, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { drawerStyles } from '../../../../styles/layout/app-drawer.style';

export const LocalStorageDrawer = ({ open, onClose }: Layout.DrawerProps) => {
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
					<StorageOutlinedIcon />
					<Typography variant='subtitle1' fontWeight={600}>
						{translateText('localStorage.title')}
					</Typography>
				</Box>
				<IconButton onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</Box>

			<Divider />

			<Box sx={drawerStyles.contentBox}>
				<Typography variant='body2' color='text.secondary'>
					{translateText('localStorage.empty')}
				</Typography>
			</Box>
		</Drawer>
	);
};

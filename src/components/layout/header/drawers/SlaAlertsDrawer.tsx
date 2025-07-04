/**
 * Archivo: SlaAlertsDrawer.tsx
 * Propósito: Drawer lateral derecho para mostrar las alertas SLA.
 */

import { Box, Drawer, IconButton, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { drawerStyles } from '../../../../styles/layout/app-drawer.style';
import type { DrawerProps } from '../../../../types/layout/drawers';

export const SlaAlertsDrawer = ({ open, onClose }: DrawerProps) => {
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
					<WarningAmberOutlinedIcon />
					<Typography variant='subtitle1' fontWeight={600}>
						{translateText('slaAlerts.title')}
					</Typography>
				</Box>
				<IconButton onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</Box>

			<Divider />

			<Box sx={drawerStyles.contentBox}>
				<Typography variant='body2' color='text.secondary'>
					{translateText('slaAlerts.empty')}
				</Typography>
			</Box>
		</Drawer>
	);
};

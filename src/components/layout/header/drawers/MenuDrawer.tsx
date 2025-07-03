/**
 * Archivo: MenuDrawer.tsx
 * Propósito: Drawer lateral izquierdo asociado al botón de menú, con estructura jerárquica de secciones.
 */

import {
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import HandymanIcon from '@mui/icons-material/Handyman';
import DescriptionIcon from '@mui/icons-material/Description';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { drawerStyles } from '../../../../styles/layout/app-drawer.style';

export const MenuDrawer = ({ open, onClose }: Layout.DrawerProps) => {
	const { translateText } = useTypedTranslation();

	return (
		<Drawer anchor='left' open={open} onClose={onClose}>
			<Box sx={drawerStyles.headerBox}>
				<Box sx={drawerStyles.titleBox}>
					<MenuIcon />
					<Typography variant='subtitle1' fontWeight={600}>
						{translateText('menu.title')}
					</Typography>
				</Box>
				<IconButton onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</Box>

			<Divider />

			<List>
				<ListItemButton>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<HandymanIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('menu.serviceAdministration')}
					</ListItemText>
				</ListItemButton>

				<ListItemButton>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<DescriptionIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('menu.csvReportManager')}
					</ListItemText>
				</ListItemButton>

				<ListItemButton>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<MenuBookIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('menu.udoDocumentation')}
					</ListItemText>
				</ListItemButton>

				<ListItemButton>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<GroupsIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('menu.leadersAdministration')}
					</ListItemText>
				</ListItemButton>

				<ListItemButton>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<CalendarMonthIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('menu.serviceCalendarsSlas')}
					</ListItemText>
				</ListItemButton>
			</List>
		</Drawer>
	);
};

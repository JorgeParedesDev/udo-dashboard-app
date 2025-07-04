/**
 * Archivo: MenuDrawer.tsx
 * Propósito: Drawer lateral izquierdo con submenús flotantes usando material-ui-popup-state, sin prop spreading.
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
import { usePopupState, bindHover } from 'material-ui-popup-state/hooks';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import HandymanIcon from '@mui/icons-material/Handyman';
import DescriptionIcon from '@mui/icons-material/Description';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { drawerStyles } from '../../../../styles/layout/app-drawer.style';
import type { DrawerProps } from '../../../../types/layout/drawers';

import { ServiceAdministrationMenu } from './menus/ServiceAdministrationMenu';
import { UdoDocumentationMenu } from './menus/UdoDocumentationMenu';
import { LeadersAdministrationMenu } from './menus/LeadersAdministrationMenu';
import { CalendarsSubmenu } from './menus/CalendarsSubmenu';

export const MenuDrawer = ({ open, onClose }: DrawerProps) => {
	const { translateText } = useTypedTranslation();

	// Submenu popups
	const servicePopup = usePopupState({
		variant: 'popover',
		popupId: 'service-submenu',
	});
	const docPopup = usePopupState({
		variant: 'popover',
		popupId: 'documentation-submenu',
	});
	const leadersPopup = usePopupState({
		variant: 'popover',
		popupId: 'leaders-submenu',
	});
	const calendarsPopup = usePopupState({
		variant: 'popover',
		popupId: 'calendars-submenu',
	});

	const { onMouseOver: serviceOver, onMouseLeave: serviceLeave } =
		bindHover(servicePopup);
	const { onMouseOver: docOver, onMouseLeave: docLeave } =
		bindHover(docPopup);
	const { onMouseOver: leadersOver, onMouseLeave: leadersLeave } =
		bindHover(leadersPopup);
	const { onMouseOver: calendarsOver, onMouseLeave: calendarsLeave } =
		bindHover(calendarsPopup);

	return (
		<Drawer anchor='left' open={open} onClose={onClose}>
			<Box sx={drawerStyles.headerBox}>
				<Box sx={drawerStyles.titleBox}>
					<MenuIcon />
					<Typography variant='subtitle1' fontWeight={600}>
						{translateText('Main Menu')}
					</Typography>
				</Box>
				<IconButton onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</Box>

			<Divider />

			<List>
				{/* Service Administration */}
				<ListItemButton
					onMouseOver={serviceOver}
					onMouseLeave={serviceLeave}>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<HandymanIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('Service Administration')}
					</ListItemText>
				</ListItemButton>
				<ServiceAdministrationMenu popupState={servicePopup} />

				{/* CSV Report Manager */}
				<ListItemButton>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<DescriptionIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('CSV Report Manager')}
					</ListItemText>
				</ListItemButton>

				{/* UDo Documentation */}
				<ListItemButton onMouseOver={docOver} onMouseLeave={docLeave}>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<MenuBookIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('UDo Documentation')}
					</ListItemText>
				</ListItemButton>
				<UdoDocumentationMenu popupState={docPopup} />

				{/* Leaders Administration */}
				<ListItemButton
					onMouseOver={leadersOver}
					onMouseLeave={leadersLeave}>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<GroupsIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('Leaders Administration')}
					</ListItemText>
				</ListItemButton>
				<LeadersAdministrationMenu popupState={leadersPopup} />

				{/* Service Calendars & SLAs */}
				<ListItemButton
					onMouseOver={calendarsOver}
					onMouseLeave={calendarsLeave}>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<CalendarMonthIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('Service Calendars & SLAs')}
					</ListItemText>
				</ListItemButton>
				<CalendarsSubmenu popupState={calendarsPopup} />
			</List>
		</Drawer>
	);
};

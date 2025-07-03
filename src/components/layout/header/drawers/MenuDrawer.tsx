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
	MenuItem,
	Typography,
} from '@mui/material';
import {
	usePopupState,
	bindHover,
	bindMenu,
} from 'material-ui-popup-state/hooks';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
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

	// Service Administration
	const servicePopup = usePopupState({
		variant: 'popover',
		popupId: 'service-submenu',
	});
	const { onMouseOver: serviceOver, onMouseLeave: serviceLeave } =
		bindHover(servicePopup);
	const {
		id: serviceId,
		anchorEl: serviceAnchor,
		anchorPosition: servicePos,
		anchorReference: serviceRef,
		open: serviceOpen,
		onClose: serviceClose,
		onMouseLeave: serviceMenuLeave,
		autoFocus: serviceAF,
		disableAutoFocusItem: serviceDAFI,
		disableAutoFocus: serviceDAF,
		disableEnforceFocus: serviceDEF,
		disableRestoreFocus: serviceDRF,
	} = bindMenu(servicePopup);

	// UDo Documentation
	const docPopup = usePopupState({
		variant: 'popover',
		popupId: 'documentation-submenu',
	});
	const { onMouseOver: docOver, onMouseLeave: docLeave } =
		bindHover(docPopup);
	const {
		id: docId,
		anchorEl: docAnchor,
		anchorPosition: docPos,
		anchorReference: docRef,
		open: docOpen,
		onClose: docClose,
		onMouseLeave: docMenuLeave,
		autoFocus: docAF,
		disableAutoFocusItem: docDAFI,
		disableAutoFocus: docDAF,
		disableEnforceFocus: docDEF,
		disableRestoreFocus: docDRF,
	} = bindMenu(docPopup);

	// Leaders Administration
	const leadersPopup = usePopupState({
		variant: 'popover',
		popupId: 'leaders-submenu',
	});
	const { onMouseOver: leadersOver, onMouseLeave: leadersLeave } =
		bindHover(leadersPopup);
	const {
		id: leadersId,
		anchorEl: leadersAnchor,
		anchorPosition: leadersPos,
		anchorReference: leadersRef,
		open: leadersOpen,
		onClose: leadersClose,
		onMouseLeave: leadersMenuLeave,
		autoFocus: leadersAF,
		disableAutoFocusItem: leadersDAFI,
		disableAutoFocus: leadersDAF,
		disableEnforceFocus: leadersDEF,
		disableRestoreFocus: leadersDRF,
	} = bindMenu(leadersPopup);

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
				{/* Service Administration */}
				<ListItemButton
					onMouseOver={serviceOver}
					onMouseLeave={serviceLeave}>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<HandymanIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('menu.serviceAdministration')}
					</ListItemText>
				</ListItemButton>

				<HoverMenu
					id={serviceId}
					anchorEl={serviceAnchor}
					anchorPosition={servicePos}
					anchorReference={serviceRef}
					open={serviceOpen}
					onClose={serviceClose}
					onMouseLeave={serviceMenuLeave}
					autoFocus={serviceAF}
					disableAutoFocusItem={serviceDAFI}
					disableAutoFocus={serviceDAF}
					disableEnforceFocus={serviceDEF}
					disableRestoreFocus={serviceDRF}
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
					<MenuItem onClick={servicePopup.close}>
						{translateText('menu.service')}
					</MenuItem>
					<MenuItem onClick={servicePopup.close}>
						{translateText('menu.scenario')}
					</MenuItem>
					<MenuItem onClick={servicePopup.close}>
						{translateText('menu.createNewService')}
					</MenuItem>
				</HoverMenu>

				{/* CSV Report Manager */}
				<ListItemButton>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<DescriptionIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('menu.csvReportManager')}
					</ListItemText>
				</ListItemButton>

				{/* UDo Documentation */}
				<ListItemButton onMouseOver={docOver} onMouseLeave={docLeave}>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<MenuBookIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('menu.udoDocumentation')}
					</ListItemText>
				</ListItemButton>

				<HoverMenu
					id={docId}
					anchorEl={docAnchor}
					anchorPosition={docPos}
					anchorReference={docRef}
					open={docOpen}
					onClose={docClose}
					onMouseLeave={docMenuLeave}
					autoFocus={docAF}
					disableAutoFocusItem={docDAFI}
					disableAutoFocus={docDAF}
					disableEnforceFocus={docDEF}
					disableRestoreFocus={docDRF}
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
					<MenuItem onClick={docPopup.close}>
						{translateText('menu.documentation')}
					</MenuItem>
					<MenuItem onClick={docPopup.close}>
						{translateText('menu.templates')}
					</MenuItem>
				</HoverMenu>

				{/* Leaders Administration */}
				<ListItemButton
					onMouseOver={leadersOver}
					onMouseLeave={leadersLeave}>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<GroupsIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('menu.leadersAdministration')}
					</ListItemText>
				</ListItemButton>

				<HoverMenu
					id={leadersId}
					anchorEl={leadersAnchor}
					anchorPosition={leadersPos}
					anchorReference={leadersRef}
					open={leadersOpen}
					onClose={leadersClose}
					onMouseLeave={leadersMenuLeave}
					autoFocus={leadersAF}
					disableAutoFocusItem={leadersDAFI}
					disableAutoFocus={leadersDAF}
					disableEnforceFocus={leadersDEF}
					disableRestoreFocus={leadersDRF}
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
					<MenuItem onClick={leadersPopup.close}>
						{translateText('menu.group')}
					</MenuItem>
					<MenuItem onClick={leadersPopup.close}>
						{translateText('menu.userCreation')}
					</MenuItem>
					<MenuItem onClick={leadersPopup.close}>
						{translateText('menu.users')}
					</MenuItem>
				</HoverMenu>

				{/* Service Calendars & SLAs */}
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

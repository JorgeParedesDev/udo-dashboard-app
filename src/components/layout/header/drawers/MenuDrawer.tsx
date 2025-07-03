/**
 * Archivo: MenuDrawer.tsx
 * Propósito: Drawer lateral izquierdo con submenu flotante usando material-ui-popup-state, sin prop spreading y correctamente tipado.
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

	const popupState = usePopupState({
		variant: 'popover',
		popupId: 'service-submenu',
	});

	// bindHover props (solo disponibles estas dos)
	const { onMouseOver, onMouseLeave } = bindHover(popupState);

	// bindMenu props
	const {
		id,
		anchorEl,
		anchorPosition,
		anchorReference,
		open: menuOpen,
		onClose: menuOnClose,
		onMouseLeave: menuOnMouseLeave,
		autoFocus,
		disableAutoFocusItem,
		disableAutoFocus,
		disableEnforceFocus,
		disableRestoreFocus,
	} = bindMenu(popupState);

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
				{/* Service Administration with submenu */}
				<ListItemButton
					onMouseOver={onMouseOver}
					onMouseLeave={onMouseLeave}>
					<ListItemIcon sx={drawerStyles.listItemIcon}>
						<HandymanIcon />
					</ListItemIcon>
					<ListItemText>
						{translateText('menu.serviceAdministration')}
					</ListItemText>
				</ListItemButton>

				<HoverMenu
					id={id}
					anchorEl={anchorEl}
					anchorPosition={anchorPosition}
					anchorReference={anchorReference}
					open={menuOpen}
					onClose={menuOnClose}
					onMouseLeave={menuOnMouseLeave}
					autoFocus={autoFocus}
					disableAutoFocusItem={disableAutoFocusItem}
					disableAutoFocus={disableAutoFocus}
					disableEnforceFocus={disableEnforceFocus}
					disableRestoreFocus={disableRestoreFocus}
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
					<MenuItem onClick={popupState.close}>
						{translateText('menu.service')}
					</MenuItem>
					<MenuItem onClick={popupState.close}>
						{translateText('menu.scenario')}
					</MenuItem>
					<MenuItem onClick={popupState.close}>
						{translateText('menu.createNewService')}
					</MenuItem>
				</HoverMenu>

				{/* Otros ítems simples */}
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

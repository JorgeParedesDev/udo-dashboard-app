/**
 * Archivo: CalendarsSubmenu.tsx
 * Propósito: Submenú flotante tipo cascada para "Service Calendars & SLAs".
 */

import { Box, MenuItem } from '@mui/material';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import { bindMenu } from 'material-ui-popup-state/hooks';

import { appDrawerMenuStyles } from '../../../../../styles/layout/app-drawer-menu.styles';
import { useTypedTranslation } from '../../../../../i18n/useTypedTranslation';
import type { DrawerMenuProps } from '../../../../../types/layout/menu';

export const CalendarsSubmenu = ({ popupState }: DrawerMenuProps) => {
	const { translateText } = useTypedTranslation();

	const {
		id,
		anchorEl,
		anchorPosition,
		anchorReference,
		open,
		onClose,
		onMouseLeave: menuMouseLeave,
		autoFocus,
		disableAutoFocusItem,
		disableAutoFocus,
		disableEnforceFocus,
		disableRestoreFocus,
	} = bindMenu(popupState);

	return (
		<HoverMenu
			id={id}
			anchorEl={anchorEl}
			anchorPosition={anchorPosition}
			anchorReference={anchorReference}
			open={open}
			onClose={onClose}
			onMouseLeave={menuMouseLeave}
			autoFocus={autoFocus}
			disableAutoFocusItem={disableAutoFocusItem}
			disableAutoFocus={disableAutoFocus}
			disableEnforceFocus={disableEnforceFocus}
			disableRestoreFocus={disableRestoreFocus}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
			<Box sx={appDrawerMenuStyles.cascadingSubmenuPanel}>
				{Array.from({ length: 40 }).map((_, index) => (
					<MenuItem key={index} onClick={popupState.close}>
						{`${translateText('menu.calendar')} ${index + 1}`}
					</MenuItem>
				))}
			</Box>
		</HoverMenu>
	);
};

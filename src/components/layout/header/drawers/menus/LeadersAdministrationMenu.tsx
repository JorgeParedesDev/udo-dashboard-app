/**
 * Archivo: LeadersAdministrationMenu.tsx
 * Propósito: Menú flotante para la sección "Leaders Administration" en el MenuDrawer.
 */

import { MenuItem } from '@mui/material';
import HoverMenu from 'material-ui-popup-state/HoverMenu';

import { useTypedTranslation } from '../../../../../i18n/useTypedTranslation';
import { useBoundHoverMenu } from '../../../../../hooks/useBoundHoverMenu';
import type { DrawerMenuProps } from '../../../../../types/layout/menu';

export const LeadersAdministrationMenu = ({ popupState }: DrawerMenuProps) => {
	const { translateText } = useTypedTranslation();
	const {
		id,
		anchorEl,
		anchorPosition,
		anchorReference,
		open,
		onClose,
		onMouseLeave,
		autoFocus,
		disableAutoFocusItem,
		disableAutoFocus,
		disableEnforceFocus,
		disableRestoreFocus,
	} = useBoundHoverMenu(popupState);

	return (
		<HoverMenu
			id={id}
			anchorEl={anchorEl}
			anchorPosition={anchorPosition}
			anchorReference={anchorReference}
			open={open}
			onClose={onClose}
			onMouseLeave={onMouseLeave}
			autoFocus={autoFocus}
			disableAutoFocusItem={disableAutoFocusItem}
			disableAutoFocus={disableAutoFocus}
			disableEnforceFocus={disableEnforceFocus}
			disableRestoreFocus={disableRestoreFocus}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
			<MenuItem onClick={popupState.close}>
				{translateText('menu.group')}
			</MenuItem>
			<MenuItem onClick={popupState.close}>
				{translateText('menu.userCreation')}
			</MenuItem>
			<MenuItem onClick={popupState.close}>
				{translateText('menu.users')}
			</MenuItem>
		</HoverMenu>
	);
};

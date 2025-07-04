/**
 * Archivo: ServiceAdministrationMenu.tsx
 * Propósito: Menú flotante para la sección "Service Administration" en el MenuDrawer.
 */

import { MenuItem } from '@mui/material';
import HoverMenu from 'material-ui-popup-state/HoverMenu';

import { useTypedTranslation } from '../../../../../i18n/useTypedTranslation';
import { useBoundHoverMenu } from '../../../../../hooks/useBoundHoverMenu';
import type { DrawerMenuProps } from '../../../../../types/layout/menu';

import { ServiceSubmenu } from './ServiceSubmenu';

export const ServiceAdministrationMenu = ({ popupState }: DrawerMenuProps) => {
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
			<ServiceSubmenu />
			<MenuItem onClick={popupState.close}>
				{translateText('menu.scenario')}
			</MenuItem>
			<MenuItem onClick={popupState.close}>
				{translateText('menu.createNewService')}
			</MenuItem>
		</HoverMenu>
	);
};

/**
 * Archivo: ScenarioSubmenu.tsx
 * Propósito: Submenú flotante tipo cascada desde el item "Scenario", con items organizados en columnas.
 */

import { Box, MenuItem, ListItemText } from '@mui/material';
import {
	usePopupState,
	bindHover,
	bindMenu,
} from 'material-ui-popup-state/hooks';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useRef } from 'react';

import { appDrawerMenuStyles } from '../../../../../styles/layout/app-drawer-menu.styles';
import { useTypedTranslation } from '../../../../../i18n/useTypedTranslation';

export const ScenarioSubmenu = () => {
	const { translateText } = useTypedTranslation();
	const popupState = usePopupState({
		variant: 'popover',
		popupId: 'scenario-submenu-grid',
	});
	const { onMouseOver, onMouseLeave } = bindHover(popupState);
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

	const anchorRef = useRef(null);

	return (
		<>
			<MenuItem
				ref={anchorRef}
				onMouseOver={onMouseOver}
				onMouseLeave={onMouseLeave}>
				<ListItemText>{translateText('menu.scenario')}</ListItemText>
				<ArrowRightIcon fontSize='small' />
			</MenuItem>

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
							{`${translateText('menu.scenario')} ${index + 1}`}
						</MenuItem>
					))}
				</Box>
			</HoverMenu>
		</>
	);
};

/**
 * Hook: useBoundHoverMenu
 * Propósito: Centraliza el resultado de bindMenu(popupState) para menús flotantes.
 */

import { bindMenu } from 'material-ui-popup-state/hooks';
import type { PopupState } from 'material-ui-popup-state/hooks';

export const useBoundHoverMenu = (popupState: PopupState) => {
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
	} = bindMenu(popupState);

	return {
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
	};
};

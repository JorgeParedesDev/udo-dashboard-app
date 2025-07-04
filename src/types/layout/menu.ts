/**
 * Archivo: menu.ts
 * Propósito: Tipos reutilizables para menús visuales con anclaje.
 */

import type { PopupState } from 'material-ui-popup-state/hooks';

export type AnchorMenuProps = {
	anchorEl: HTMLElement | null;
	open: boolean;
	onClose: () => void;
};

/**
 * Props estándar para menús flotantes controlados por popupState (HoverMenu).
 */
export type DrawerMenuProps = {
	popupState: PopupState;
};

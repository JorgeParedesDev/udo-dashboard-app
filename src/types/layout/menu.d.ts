/**
 * Archivo: menu.d.ts
 * Propósito: Tipos reutilizables para menús visuales con anclaje.
 */

export type AnchorMenuProps = {
	anchorEl: HTMLElement | null;
	open: boolean;
	onClose: () => void;
};

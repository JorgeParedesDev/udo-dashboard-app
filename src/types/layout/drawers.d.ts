/**
 * Archivo: drawers.d.ts
 * Propósito: Tipos utilizados por los Drawers del header.
 */

declare namespace Layout {
	export type DrawerProps = {
		open: boolean;
		onClose: () => void;
	};
}

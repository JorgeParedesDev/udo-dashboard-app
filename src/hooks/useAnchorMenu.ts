/**
 * Archivo: useAnchorMenu.ts
 * Propósito: Hook reutilizable para controlar apertura y cierre de menús anclados (MUI).
 */

import { useState } from 'react';

/**
 * Hook para controlar un menú basado en anchorEl (por ejemplo, MUI Menu).
 * Retorna el anchor, estado abierto, y funciones de apertura y cierre.
 */
export const useAnchorMenu = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const isOpen = Boolean(anchorEl);

	const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return {
		anchorEl,
		isOpen,
		handleOpen,
		handleClose,
	};
};

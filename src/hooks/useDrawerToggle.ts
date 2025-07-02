/**
 * Archivo: useDrawerToggle.ts
 * Propósito: manejar el estado de apertura/cierre de un Drawer reutilizable.
 */

import { useCallback, useState } from 'react';

export const useDrawerToggle = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = useCallback(() => setOpen(true), []);
	const handleClose = useCallback(() => setOpen(false), []);

	return { open, handleOpen, handleClose };
};

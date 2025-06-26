/**
 * Archivo: ThemeContext.tsx
 * Propósito: Proveedor del contexto que gestiona y expone el modo de tema (light/dark).
 */

import { useMemo, useState, type ReactNode } from 'react';

import { ThemeContext } from './ThemeContextInstance';
import type { ThemeContextValue } from './ThemeContextObject';
import type { ThemeMode } from './types/theme';

/**
 * Proveedor de tema que gestiona el estado 'mode' y lo expone mediante contexto.
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [mode, setMode] = useState<ThemeMode>('light');

	const toggleColorMode = () => {
		setMode(prev => (prev === 'light' ? 'dark' : 'light'));
	};

	const value = useMemo(
		(): ThemeContextValue => ({
			mode,
			toggleColorMode,
		}),
		[mode]
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

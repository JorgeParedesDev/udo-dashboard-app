/**
 * Archivo: app-header-search.styles.ts
 * Propósito: Estilos centralizados para el componente AppHeaderSearch.
 */

import { alpha, type Theme } from '@mui/material/styles';

export const appHeaderSearchStyles = {
	container: (theme: Theme) => ({
		padding: '0 6px',
		display: 'flex',
		alignItems: 'center',
		width: 300,
		height: 30,
		boxShadow: 'none',
		backgroundColor: alpha(
			theme.palette.layout.header.search.background,
			theme.palette.mode === 'light' ? 0.08 : 0.16
		),
		// border: theme.palette.layout.header.search.border,
	}),
	input: (theme: Theme) => ({
		marginLeft: theme.spacing(0.5),
		flex: 1,
		color: theme.palette.layout.header.search.text,
		fontSize: '0.85rem',
		lineHeight: 1.2,
	}),
	iconButton: (theme: Theme) => ({
		padding: '4px',
		color: theme.palette.layout.header.search.iconColor,
	}),
};

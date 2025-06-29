/**
 * Archivo: app-header-search.styles.ts
 * Propósito: Estilos centralizados para el componente AppHeaderSearch.
 */

import type { Theme } from '@mui/material/styles';

export const appHeaderSearchStyles = {
	container: (theme: Theme) => ({
		padding: '2px 8px',
		display: 'flex',
		alignItems: 'center',
		width: 300,
		borderRadius: theme.shape.borderRadius,
		boxShadow: 'none',
		backgroundColor: theme.palette.layout.header.search.background,
		border: theme.palette.layout.header.search.border,
	}),
	input: (theme: Theme) => ({
		marginLeft: theme.spacing(1),
		flex: 1,
		color: theme.palette.layout.header.search.text,
	}),
	iconButton: (theme: Theme) => ({
		padding: '10px',
		color: theme.palette.layout.header.search.iconColor,
	}),
};

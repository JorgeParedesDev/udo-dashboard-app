/**
 * Archivo: app-header.styles.ts
 * Propósito: Estilos centralizados para el componente AppHeader.
 */

import type { Theme } from '@mui/material/styles';

export const appHeaderStyles = {
	appBar: (theme: Theme) => ({
		backgroundColor: theme.palette.layout.header.background,
		color: theme.palette.layout.header.text,
		borderBottom: theme.palette.layout.header.border,
		boxShadow: 'none',
	}),
	toolbar: {
		minHeight: '64px',
	},
	menuButton: (theme: Theme) => ({
		color: theme.palette.layout.header.iconColor,
	}),
	logoLink: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: 8,
	},
	searchContainer: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'center',
	},
};

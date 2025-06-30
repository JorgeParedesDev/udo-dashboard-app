/**
 * Archivo: app-header.styles.ts
 * Propósito: Estilos centralizados para el componente AppHeader.
 */

import { alpha, type Theme } from '@mui/material/styles';

export const appHeaderStyles = {
	appBar: (theme: Theme) => ({
		backgroundColor: theme.palette.layout.header.background,
		boxShadow: 'none',
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
	headerActionsContainer: {
		display: 'flex',
		alignItems: 'center',
		gap: 1,
	},
	iconButtonHeader: (theme: Theme) => ({
		color: theme.palette.layout.header.iconColor,
		backgroundColor: 'transparent',
		'&:hover': {
			backgroundColor: alpha(
				theme.palette.layout.header.iconColor,
				theme.palette.mode === 'light' ? 0.08 : 0.16
			),
		},
	}),
};

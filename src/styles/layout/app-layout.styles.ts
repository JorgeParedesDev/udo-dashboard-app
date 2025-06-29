// Archivo: app-layout.styles.ts
// Propósito: estilos específicos del contenedor de layout principal

import type { Theme } from '@mui/material/styles';

export const appLayoutStyles = {
	container: (theme: Theme) => ({
		minHeight: '100vh',
		backgroundColor: theme.palette.layout.background,
	}),
};

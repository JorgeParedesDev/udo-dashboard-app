/**
 * Archivo: AppLayout.tsx
 * Propósito: define el layout principal con header y área de contenido enrutado.
 */

import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export const AppLayout = () => {
	const theme = useTheme();

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			{/* Header principal de la aplicación (pendiente de implementación) */}
			<Box
				component='header'
				sx={{
					height: 64,
					bgcolor: theme.palette.layout?.header,
					color: theme.palette.layout?.text,
					display: 'flex',
					alignItems: 'center',
					px: 2,
				}}>
				App Header
			</Box>

			{/* Contenido principal del layout */}
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 2,
					bgcolor: theme.palette.layout?.background,
					color: theme.palette.layout?.text,
					overflow: 'auto',
				}}>
				<Outlet />
			</Box>
		</Box>
	);
};

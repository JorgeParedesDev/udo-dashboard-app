/**
 * Archivo: AppLayout.tsx
 * Propósito: define el layout principal con encabezado y área para rutas anidadas.
 */

/**
 * Componente de layout principal que compone el encabezado de la app
 * y el espacio donde se renderizan las rutas hijas mediante <Outlet />.
 */
import { Outlet } from 'react-router-dom';

import { AppHeader } from './header/AppHeader';

export const AppLayout = () => {
	return (
		<>
			<AppHeader />
			<Outlet />
		</>
	);
};

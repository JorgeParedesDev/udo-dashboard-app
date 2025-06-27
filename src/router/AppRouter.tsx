/**
 * Archivo: AppRouter.tsx
 * Propósito: define las rutas principales de la aplicación usando React Router.
 */

import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { SettingsPage } from '../pages/SettingsPage';

/**
 * Componente que gestiona las rutas disponibles en la app.
 */
export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/settings' element={<SettingsPage />} />
		</Routes>
	);
};

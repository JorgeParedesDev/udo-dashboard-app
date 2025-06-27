/**
 * Archivo: AppRouter.tsx
 * Propósito: define las rutas principales de la aplicación y su layout general.
 * Este componente asume que BrowserRouter ya está definido en main.tsx.
 */

import { Routes, Route } from 'react-router-dom';

import { AppLayout } from '../components/layout/AppLayout';
import { HomePage } from '../pages/HomePage';
import { SettingsPage } from '../pages/SettingsPage';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<AppLayout />}>
				<Route index element={<HomePage />} />
				<Route path='settings' element={<SettingsPage />} />
			</Route>
		</Routes>
	);
};

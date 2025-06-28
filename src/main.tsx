/**
 * Archivo: main.tsx
 * Propósito: punto de entrada principal. Renderiza el árbol de la app dentro del proveedor de idioma y tema.
 */

import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { I18nextProvider } from 'react-i18next';

import { ThemeProvider } from './config/ThemeContext';
import { UdoDashboardApp } from './UdoDashboardApp';
import { i18n } from './i18n/i18n';

// Renderiza la aplicación dentro de los proveedores de i18n y tema
ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<I18nextProvider i18n={i18n}>
			<ThemeProvider>
				<UdoDashboardApp />
			</ThemeProvider>
		</I18nextProvider>
	</StrictMode>
);

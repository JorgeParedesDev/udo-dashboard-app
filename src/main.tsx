/**
 * Archivo: main.tsx
 * Propósito: punto de entrada principal. Renderiza el árbol de la app dentro del proveedor de tema.
 */

import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import { ThemeProvider } from './config/ThemeContext';
import { UdoDashboardApp } from './UdoDashboardApp';

// Renderiza la aplicación dentro del ThemeProvider personalizado
ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<UdoDashboardApp />
		</ThemeProvider>
	</StrictMode>
);

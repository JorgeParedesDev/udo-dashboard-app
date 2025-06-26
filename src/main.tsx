/**
 * Archivo: main.tsx
 * Propósito: Punto de entrada de la aplicación. Renderiza el componente raíz dentro del proveedor de tema.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from './config/ThemeContext';
import { UdoDashboardApp } from './UdoDashboardApp';

// Envuelve la app en StrictMode y en el proveedor del tema
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<UdoDashboardApp />
		</ThemeProvider>
	</StrictMode>
);

/**
 * Archivo: main.tsx
 * Propósito: Punto de entrada de la aplicación. Renderiza el componente raíz dentro del proveedor de tema.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './config/ThemeContext';
import { AppRouter } from './router/AppRouter';

// Envuelve la app en StrictMode, en el router y en el proveedor del tema
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<AppRouter />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
);

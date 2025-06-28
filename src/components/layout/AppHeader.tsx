/**
 * Archivo: AppHeader.tsx
 * Propósito: define el encabezado principal de la aplicación.
 */

import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { Logo } from '../ui/Logo';

/**
 * Componente visual que representa la barra superior del layout.
 * Incluye el botón de sidebar y el logo clickeable.
 */
export const AppHeader = () => {
	return (
		<AppBar position='static' color='default' elevation={0}>
			<Toolbar>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='open sidebar'>
					<MenuIcon />
				</IconButton>

				<Link
					to='/'
					style={{
						display: 'flex',
						alignItems: 'center',
						marginLeft: 8,
					}}>
					<Logo title='Ir al inicio' />
				</Link>
			</Toolbar>
		</AppBar>
	);
};

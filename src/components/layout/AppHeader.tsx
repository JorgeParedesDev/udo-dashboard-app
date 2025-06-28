/**
 * Archivo: AppHeader.tsx
 * Propósito: define el Header principal de la aplicación.
 */

import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { Logo } from '../ui/Logo';
import { useTypedTranslation } from '../../i18n/useTypedTranslation';

/**
 * Componente visual que representa la barra superior del layout.
 * Incluye el botón de sidebar y el logo clickeable.
 */
export const AppHeader = () => {
	const { translateText } = useTypedTranslation();
	return (
		<AppBar position='static' color='default' elevation={0}>
			<Toolbar>
				<IconButton
					edge='start'
					color='inherit'
					aria-label={translateText('header.openSidebar')}>
					<MenuIcon />
				</IconButton>

				<Link
					to='/'
					style={{
						display: 'flex',
						alignItems: 'center',
						marginLeft: 8,
					}}>
					<Logo
						homeLinkLabel={translateText('header.homeLinkLabel')}
					/>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

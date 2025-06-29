/**
 * Archivo: AppHeader.tsx
 * Propósito: define el Header principal de la aplicación.
 */

import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';
import { Logo } from '../../ui/Logo';

import { AppHeaderActions } from './AppHeaderActions';
import { AppHeaderSearch } from './AppHeaderSearch';

/**
 * Componente visual que representa la barra superior del layout.
 * Incluye el botón de sidebar, el logo, y los íconos del lado derecho
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
				<Box
					sx={{
						flexGrow: 1,
						display: 'flex',
						justifyContent: 'center',
					}}>
					<AppHeaderSearch />
				</Box>
				<AppHeaderActions />
			</Toolbar>
		</AppBar>
	);
};

/**
 * Archivo: AppHeader.tsx
 * Propósito: define el Header principal de la aplicación.
 */

import { AppBar, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';
import { Logo } from '../../ui/Logo';
import { appHeaderStyles } from '../../../styles/layout/app-header.styles';

import { AppHeaderActions } from './AppHeaderActions';
import { AppHeaderSearch } from './AppHeaderSearch';

/**
 * Componente visual que representa la barra superior del layout.
 * Incluye el botón de sidebar, el logo, y los íconos del lado derecho
 */
export const AppHeader = () => {
	const theme = useTheme();
	const { translateText } = useTypedTranslation();

	return (
		<AppBar
			position='static'
			elevation={0}
			sx={appHeaderStyles.appBar(theme)}>
			<Toolbar>
				<Tooltip title={translateText('header.openSidebar')}>
					<IconButton
						edge='start'
						sx={appHeaderStyles.iconButtonHeader(theme)}
						aria-label={translateText('header.openSidebar')}>
						<MenuIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title={translateText('header.homeLinkLabel')}>
					<Link to='/' style={appHeaderStyles.logoLink}>
						<Logo
							homeLinkLabel={translateText(
								'header.homeLinkLabel'
							)}
						/>
					</Link>
				</Tooltip>

				<Box sx={appHeaderStyles.searchContainer}>
					<AppHeaderSearch />
				</Box>

				<AppHeaderActions />
			</Toolbar>
		</AppBar>
	);
};

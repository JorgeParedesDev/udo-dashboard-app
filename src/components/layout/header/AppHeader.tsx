/**
 * Archivo: AppHeader.tsx
 * Propósito: define el Header principal de la aplicación.
 */

import { AppBar, Box, Toolbar, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';
import { Logo } from '../../ui/Logo';
import { appHeaderStyles } from '../../../styles/layout/app-header.styles';

import { AppHeaderActions } from './AppHeaderActions';
import { AppHeaderSearch } from './AppHeaderSearch';
import { MenuButton } from './buttons/MenuButton';

/**
 * Componente visual que representa la barra superior del layout.
 * Incluye el botón de sidebar, el logo, y los íconos del lado derecho
 */
export const AppHeader = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();

	return (
		<AppBar
			position='static'
			elevation={0}
			sx={appHeaderStyles.appBar(theme)}>
			<Toolbar>
				<MenuButton />
				<Tooltip title={translateText('Go to homepage')}>
					<Link to='/' style={appHeaderStyles.logoLink}>
						<Logo homeLinkLabel={translateText('Go to homepage')} />
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

/**
 * Archivo: MenuButton.tsx
 * Propósito: botón que despliega el panel lateral izquierdo de menú.
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../../styles/layout/app-header.styles';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';
import { MenuDrawer } from '../drawers/MenuDrawer';

/**
 * Componente que muestra el botón de menú y el Drawer asociado.
 */
export const MenuButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();
	const { open, handleOpen, handleClose } = useDrawerToggle();

	return (
		<>
			<Tooltip title={translateText('header.openSidebar')}>
				<IconButton
					edge='start'
					onClick={handleOpen}
					sx={appHeaderStyles.iconButtonHeader(theme)}
					aria-label={translateText('header.openSidebar')}>
					<MenuIcon />
				</IconButton>
			</Tooltip>

			<MenuDrawer open={open} onClose={handleClose} />
		</>
	);
};

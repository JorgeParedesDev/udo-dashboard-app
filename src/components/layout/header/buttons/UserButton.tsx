/**
 * Archivo: UserButton.tsx
 * Propósito: Botón de usuario ubicado en el AppHeader. Muestra un menú desplegable al hacer clic.
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../../styles/layout/app-header.styles';
import { useAnchorMenu } from '../../../../hooks/useAnchorMenu';
import { UserMenu } from '../menus/UserMenu';

/**
 * Componente que representa al usuario actual y muestra un menú desplegable al hacer clic.
 */
export const UserButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();

	const { anchorEl, isOpen, handleOpen, handleClose } = useAnchorMenu();

	return (
		<>
			<Tooltip title={translateText('header.user')}>
				<IconButton
					aria-label={translateText('header.user')}
					onClick={handleOpen}
					sx={appHeaderStyles.iconButtonHeader(theme)}>
					<AccountCircleOutlinedIcon />
				</IconButton>
			</Tooltip>

			<UserMenu anchorEl={anchorEl} open={isOpen} onClose={handleClose} />
		</>
	);
};

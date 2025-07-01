/**
 * Archivo: UserButton.tsx
 * Propósito: Botón de usuario ubicado en el AppHeader. Muestra un menú desplegable al hacer clic.
 */

import { useState } from 'react';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../styles/layout/app-header.styles';

import { UserMenu } from './UserMenu';

/**
 * Componente que representa al usuario actual y muestra un menú desplegable al hacer clic.
 */
export const UserButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Tooltip title={translateText('header.user')}>
				<IconButton
					aria-label={translateText('header.user')}
					onClick={handleOpenMenu}
					sx={appHeaderStyles.iconButtonHeader(theme)}>
					<AccountCircleOutlinedIcon />
				</IconButton>
			</Tooltip>

			<UserMenu
				anchorEl={anchorEl}
				open={open}
				onClose={handleCloseMenu}
			/>
		</>
	);
};

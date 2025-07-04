/**
 * Archivo: UserMenu.tsx
 * Propósito: Menú visual desplegable asociado al botón de usuario, con separación visual para Logout.
 */

import {
	Divider,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

import { appHeaderStyles } from '../../../../styles/layout/app-header.styles';
import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import type { AnchorMenuProps } from '../../../../types/layout/menu';

/**
 * Componente exportado que representa el menú desplegable del botón de usuario.
 */
export const UserMenu = ({ anchorEl, open, onClose }: AnchorMenuProps) => {
	const { translateText } = useTypedTranslation();

	return (
		<Menu
			anchorEl={anchorEl}
			open={open}
			onClose={onClose}
			slotProps={{
				paper: { sx: appHeaderStyles.userMenuPaper },
			}}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
			<MenuItem onClick={onClose}>
				<ListItemIcon>
					<AccountCircleIcon fontSize='small' />
				</ListItemIcon>
				<ListItemText>{translateText('header.myProfile')}</ListItemText>
			</MenuItem>

			{/* <MenuItem onClick={onClose}>
				<ListItemIcon>
					<InfoOutlinedIcon fontSize='small' />
				</ListItemIcon>
				<ListItemText>{translateText('header.about')}</ListItemText>
			</MenuItem> */}

			<Divider sx={appHeaderStyles.userMenuDivider} />

			<MenuItem onClick={onClose}>
				<ListItemIcon>
					<LogoutIcon fontSize='small' />
				</ListItemIcon>
				<ListItemText>{translateText('header.logout')}</ListItemText>
			</MenuItem>
		</Menu>
	);
};

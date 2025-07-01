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
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import type { FC } from 'react';

/**
 * Props para el menú del usuario.
 */
type UserMenuProps = {
	anchorEl: HTMLElement | null;
	open: boolean;
	onClose: () => void;
};

/**
 * Componente exportado que representa el menú desplegable del botón de usuario.
 */
export const UserMenu: FC<UserMenuProps> = ({ anchorEl, open, onClose }) => {
	return (
		<Menu
			anchorEl={anchorEl}
			open={open}
			onClose={onClose}
			slotProps={{
				paper: { sx: { width: 180 } },
			}}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
			<MenuItem onClick={onClose}>
				<ListItemIcon>
					<AccountCircleIcon fontSize='small' />
				</ListItemIcon>
				<ListItemText>My profile</ListItemText>
			</MenuItem>

			<MenuItem onClick={onClose}>
				<ListItemIcon>
					<InfoOutlinedIcon fontSize='small' />
				</ListItemIcon>
				<ListItemText>About UDo</ListItemText>
			</MenuItem>

			<Divider sx={{ my: 0.5 }} />

			<MenuItem onClick={onClose}>
				<ListItemIcon>
					<LogoutIcon fontSize='small' />
				</ListItemIcon>
				<ListItemText>Logout</ListItemText>
			</MenuItem>
		</Menu>
	);
};

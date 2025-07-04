/**
 * Archivo: AboutUdoMenu.tsx
 * Propósito: Menú desplegable asociado al botón de información sobre UDo (About).
 */

import {
	Divider,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { appHeaderStyles } from '../../../../styles/layout/app-header.styles';
import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import type { AnchorMenuProps } from '../../../../types/layout/menu';

/**
 * Componente exportado que representa el menú desplegable del botón About UDo.
 */
export const AboutUdoMenu = ({ anchorEl, open, onClose }: AnchorMenuProps) => {
	const { translateText } = useTypedTranslation();

	return (
		<Menu
			anchorEl={anchorEl}
			open={open}
			onClose={onClose}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
			{/* Título visual principal */}
			<MenuItem disabled>
				<ListItemText
					slotProps={{
						primary: { sx: appHeaderStyles.aboutMenuTitle },
					}}>
					{translateText('header.about')}
				</ListItemText>
			</MenuItem>

			{/* Build Info */}
			<MenuItem disabled>
				<ListItemText
					slotProps={{
						primary: { sx: appHeaderStyles.aboutMenuGroupLabel },
					}}>
					Build Info
				</ListItemText>
			</MenuItem>
			<MenuItem onClick={onClose}>
				<ListItemIcon>
					<ArticleOutlinedIcon fontSize='small' />
				</ListItemIcon>
				<ListItemText>Version 5.14.9 Changelog</ListItemText>
			</MenuItem>

			<Divider sx={appHeaderStyles.userMenuDivider} />

			{/* Support */}
			<MenuItem disabled>
				<ListItemText
					slotProps={{
						primary: { sx: appHeaderStyles.aboutMenuGroupLabel },
					}}>
					Support
				</ListItemText>
			</MenuItem>
			<MenuItem onClick={onClose}>
				<ListItemIcon>
					<SupportAgentIcon fontSize='small' />
				</ListItemIcon>
				<ListItemText>
					{`Ticket UDo: ${translateText('header.create')}`}
				</ListItemText>
			</MenuItem>

			<Divider sx={appHeaderStyles.userMenuDivider} />

			{/* UDo Guides */}
			<MenuItem disabled>
				<ListItemText
					slotProps={{
						primary: { sx: appHeaderStyles.aboutMenuGroupLabel },
					}}>
					UDo Guides
				</ListItemText>
			</MenuItem>
			<MenuItem onClick={onClose}>
				<ListItemIcon>
					<MenuBookIcon fontSize='small' />
				</ListItemIcon>
				<ListItemText>Version 5.14.9: Manuals</ListItemText>
			</MenuItem>
		</Menu>
	);
};

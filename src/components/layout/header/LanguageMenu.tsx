/**
 * Archivo: LanguageMenu.tsx
 * Propósito: Menú visual desplegable para seleccionar idioma (funcionalidad activa con i18next).
 */

import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import CheckIcon from '@mui/icons-material/Check';

import { i18n } from '../../../i18n/i18n'; // acceso directo a i18n

type LanguageMenuProps = {
	anchorEl: HTMLElement | null;
	open: boolean;
	onClose: () => void;
};

// Lista de idiomas disponibles. Se puede expandir más adelante.
const LANGUAGES = [
	{ code: 'es', label: 'Español' },
	{ code: 'en', label: 'English' },
];

/**
 * Componente exportado que muestra el menú de selección de idioma.
 */
export const LanguageMenu = ({
	anchorEl,
	open,
	onClose,
}: LanguageMenuProps) => {
	const currentLanguage = i18n.language;

	const handleSelectLanguage = async (code: string) => {
		await i18n.changeLanguage(code);
		onClose();
	};

	return (
		<Menu
			anchorEl={anchorEl}
			open={open}
			onClose={onClose}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
			{LANGUAGES.map(({ code, label }) => (
				<MenuItem
					key={code}
					onClick={() => handleSelectLanguage(code)}
					selected={code === currentLanguage}>
					<ListItemIcon>
						<TranslateIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText primary={label} />
					{code === currentLanguage && <CheckIcon fontSize='small' />}
				</MenuItem>
			))}
		</Menu>
	);
};

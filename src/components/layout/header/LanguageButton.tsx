/**
 * Archivo: LanguageButton.tsx
 * Propósito: Ícono visual que despliega el menú de selección de idioma.
 */

import { useState } from 'react';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../styles/layout/app-header.styles';

import { LanguageMenu } from './LanguageMenu';

/**
 * Componente exportado que muestra el botón para cambiar de idioma.
 * Al hacer clic, despliega un menú visual con los idiomas disponibles.
 */
export const LanguageButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isMenuOpen = Boolean(anchorEl);

	const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Tooltip title={translateText('header.language')}>
				<IconButton
					sx={appHeaderStyles.iconButtonHeader(theme)}
					onClick={handleOpen}
					aria-label={translateText('header.language')}>
					<LanguageOutlinedIcon />
				</IconButton>
			</Tooltip>

			<LanguageMenu
				anchorEl={anchorEl}
				open={isMenuOpen}
				onClose={handleClose}
			/>
		</>
	);
};

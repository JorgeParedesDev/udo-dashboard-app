/**
 * Archivo: LanguageButton.tsx
 * Propósito: Ícono visual que despliega el menú de selección de idioma.
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../styles/layout/app-header.styles';
import { useAnchorMenu } from '../../../hooks/useAnchorMenu';

import { LanguageMenu } from './LanguageMenu';

/**
 * Componente exportado que muestra el botón para cambiar de idioma.
 * Al hacer clic, despliega un menú visual con los idiomas disponibles.
 */
export const LanguageButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();

	const { anchorEl, isOpen, handleOpen, handleClose } = useAnchorMenu();

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
				open={isOpen}
				onClose={handleClose}
			/>
		</>
	);
};

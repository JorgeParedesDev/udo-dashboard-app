/**
 * Archivo: AboutUdoButton.tsx
 * Propósito: Botón de información sobre UDo ubicado en el AppHeader. Despliega un menú contextual.
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../../styles/layout/app-header.styles';
import { useAnchorMenu } from '../../../../hooks/useAnchorMenu';
import { AboutUdoMenu } from '../menus/AboutUdoMenu';

/**
 * Componente que representa el botón About y muestra un menú desplegable al hacer clic.
 */
export const AboutUdoButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();

	const { anchorEl, isOpen, handleOpen, handleClose } = useAnchorMenu();

	return (
		<>
			<Tooltip title={translateText('header.about')}>
				<IconButton
					aria-label={translateText('header.about')}
					onClick={handleOpen}
					sx={appHeaderStyles.iconButtonHeader(theme)}>
					<InfoOutlinedIcon />
				</IconButton>
			</Tooltip>

			<AboutUdoMenu
				anchorEl={anchorEl}
				open={isOpen}
				onClose={handleClose}
			/>
		</>
	);
};

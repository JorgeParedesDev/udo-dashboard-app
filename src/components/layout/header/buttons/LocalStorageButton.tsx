/**
 * Archivo: LocalStorageButton.tsx
 * Propósito: ícono visual para representar acceso al almacenamiento local.
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../../styles/layout/app-header.styles';
import { LocalStorageDrawer } from '../drawers/LocalStorageDrawer';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';

/**
 * Componente visual sin funcionalidad, representando almacenamiento local.
 */
export const LocalStorageButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();
	const { open, handleOpen, handleClose } = useDrawerToggle();

	return (
		<>
			<Tooltip title={translateText('header.localStorage')}>
				<IconButton
					onClick={handleOpen}
					sx={appHeaderStyles.iconButtonHeader(theme)}
					aria-label={translateText('header.localStorage')}>
					<StorageOutlinedIcon />
				</IconButton>
			</Tooltip>

			<LocalStorageDrawer open={open} onClose={handleClose} />
		</>
	);
};

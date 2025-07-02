/**
 * Archivo: LocalStorageButton.tsx
 * Propósito: ícono visual para representar acceso al almacenamiento local.
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../../styles/layout/app-header.styles';

/**
 * Componente visual sin funcionalidad, representando almacenamiento local.
 */
export const LocalStorageButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();
	return (
		<Tooltip title={translateText('header.localStorage')}>
			<IconButton
				sx={appHeaderStyles.iconButtonHeader(theme)}
				aria-label={translateText('header.localStorage')}>
				<StorageOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

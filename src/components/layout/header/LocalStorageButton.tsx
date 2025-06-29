/**
 * Archivo: LocalStorageButton.tsx
 * Propósito: ícono visual para representar acceso al almacenamiento local.
 */

import { IconButton, Tooltip } from '@mui/material';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';

/**
 * Componente visual sin funcionalidad, representando almacenamiento local.
 */
export const LocalStorageButton = () => {
	const { translateText } = useTypedTranslation();
	return (
		<Tooltip title={translateText('header.localStorage')}>
			<IconButton
				color='inherit'
				aria-label={translateText('header.localStorage')}>
				<StorageOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

/**
 * Archivo: UserButton.tsx
 * Propósito: ícono visual para representar al usuario (sin funcionalidad).
 */

import { IconButton, Tooltip } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';

/**
 * Componente visual sin funcionalidad, representa al usuario actual.
 */
export const UserButton = () => {
	const { translateText } = useTypedTranslation();
	return (
		<Tooltip title={translateText('header.user')}>
			<IconButton
				color='inherit'
				aria-label={translateText('header.user')}>
				<AccountCircleOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

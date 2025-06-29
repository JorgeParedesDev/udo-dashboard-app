/**
 * Archivo: UserButton.tsx
 * Propósito: ícono visual para representar al usuario (sin funcionalidad).
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../styles/layout/app-header.styles';

/**
 * Componente visual sin funcionalidad, representa al usuario actual.
 */
export const UserButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();

	return (
		<Tooltip title={translateText('header.user')}>
			<IconButton
				aria-label={translateText('header.user')}
				sx={appHeaderStyles.iconButtonHeader(theme)}>
				<AccountCircleOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

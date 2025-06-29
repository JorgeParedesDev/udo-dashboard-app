/**
 * Archivo: SlaAlertsButton.tsx
 * Propósito: botón visual para alertas SLA (sin funcionalidad).
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../styles/layout/app-header.styles';

/**
 * Componente visual sin funcionalidad, representando alertas SLA de UDo.
 */
export const SlaAlertsButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();
	return (
		<Tooltip title={translateText('header.slaAlerts')}>
			<IconButton
				sx={appHeaderStyles.iconButtonHeader(theme)}
				aria-label={translateText('header.slaAlerts')}>
				<WarningAmberOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

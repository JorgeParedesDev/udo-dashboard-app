/**
 * Archivo: SlaAlertsButton.tsx
 * Propósito: botón visual para alertas SLA (sin funcionalidad).
 */

import { IconButton, Tooltip } from '@mui/material';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';

/**
 * Componente visual sin funcionalidad, representando alertas SLA de UDo.
 */
export const SlaAlertsButton = () => {
	const { translateText } = useTypedTranslation();
	return (
		<Tooltip title={translateText('header.slaAlerts')}>
			<IconButton
				color='inherit'
				aria-label={translateText('header.slaAlerts')}>
				<WarningAmberOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

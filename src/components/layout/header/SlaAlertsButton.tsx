/**
 * Archivo: SlaAlertsButton.tsx
 * Propósito: botón visual para alertas SLA (sin funcionalidad).
 */

import { IconButton, Tooltip } from '@mui/material';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

/**
 * Componente visual sin funcionalidad, representando alertas SLA de UDo.
 */
export const SlaAlertsButton = () => {
	return (
		<Tooltip title='SLA Alerts'>
			<IconButton color='inherit' aria-label='sla alerts'>
				<WarningAmberOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
};

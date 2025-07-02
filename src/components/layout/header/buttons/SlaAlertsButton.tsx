/**
 * Archivo: SlaAlertsButton.tsx
 * Propósito: botón que despliega el panel lateral derecho de alertas SLA.
 */

import { IconButton, Tooltip, useTheme } from '@mui/material';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../../styles/layout/app-header.styles';
import { SlaAlertsDrawer } from '../drawers/SlaAlertsDrawer';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';

/**
 * Componente que muestra el botón de alertas SLA y el Drawer asociado.
 */
export const SlaAlertsButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();
	const { open, handleOpen, handleClose } = useDrawerToggle();

	return (
		<>
			<Tooltip title={translateText('header.slaAlerts')}>
				<IconButton
					onClick={handleOpen}
					sx={appHeaderStyles.iconButtonHeader(theme)}
					aria-label={translateText('header.slaAlerts')}>
					<WarningAmberOutlinedIcon />
				</IconButton>
			</Tooltip>

			<SlaAlertsDrawer open={open} onClose={handleClose} />
		</>
	);
};

/**
 * Archivo: AppHeaderActions.tsx
 * Propósito: agrupa los íconos del lado derecho de la AppBar.
 */

import { Box } from '@mui/material';

import { appHeaderStyles } from '../../../styles/layout/app-header.styles';

import { ThemeToggleButton } from './ThemeToggleButton';
import { AboutUdoButton } from './AboutUdoButton';
import { NotificationsCenterButton } from './NotificationsCenterButton';
import { AlertsButton } from './AlertsButton';
import { SlaAlertsButton } from './SlaAlertsButton';
import { LocalStorageButton } from './LocalStorageButton';
import { LanguageButton } from './LanguageButton';
import { UserButton } from './UserButton';

/**
 * Contenedor para los botones alineados a la derecha del AppHeader.
 */
export const AppHeaderActions = () => {
	return (
		<Box sx={appHeaderStyles.headerActionsContainer}>
			<UserButton />
			<LanguageButton />
			<LocalStorageButton />
			<SlaAlertsButton />
			<AlertsButton />
			<NotificationsCenterButton />
			<AboutUdoButton />
			<ThemeToggleButton />
		</Box>
	);
};

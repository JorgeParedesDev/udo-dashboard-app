/**
 * Archivo: AppHeaderActions.tsx
 * Propósito: agrupa los íconos del lado derecho de la AppBar.
 */

import { Box } from '@mui/material';

import { appHeaderStyles } from '../../../styles/layout/app-header.styles';

import { ThemeToggleButton } from './buttons/ThemeToggleButton';
import { AboutUdoButton } from './buttons/AboutUdoButton';
import { NotificationsCenterButton } from './buttons/NotificationsCenterButton';
import { AlertsButton } from './buttons/AlertsButton';
import { SlaAlertsButton } from './buttons/SlaAlertsButton';
import { LocalStorageButton } from './buttons/LocalStorageButton';
import { LanguageButton } from './buttons/LanguageButton';
import { UserButton } from './buttons/UserButton';

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

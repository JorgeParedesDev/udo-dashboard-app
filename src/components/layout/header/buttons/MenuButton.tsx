import { IconButton, Tooltip, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useTypedTranslation } from '../../../../i18n/useTypedTranslation';
import { appHeaderStyles } from '../../../../styles/layout/app-header.styles';

export const MenuButton = () => {
	const { translateText } = useTypedTranslation();
	const theme = useTheme();

	return (
		<Tooltip title={translateText('header.openSidebar')}>
			<IconButton
				edge='start'
				sx={appHeaderStyles.iconButtonHeader(theme)}
				aria-label={translateText('header.openSidebar')}>
				<MenuIcon />
			</IconButton>
		</Tooltip>
	);
};

/**
 * Archivo: AppHeaderSearch.tsx
 * Propósito: barra de búsqueda visual centrada en la AppBar, con ícono a la derecha.
 */

import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import type { FormEvent } from 'react';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';
import { appHeaderSearchStyles } from '../../../styles/layout/app-header-search.styles';

/**
 * Componente visual centrado entre logo e íconos. Sin funcionalidad.
 */
export const AppHeaderSearch = () => {
	const theme = useTheme();
	const { translateText } = useTypedTranslation();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<Paper
			component='form'
			sx={appHeaderSearchStyles.container(theme)}
			onSubmit={handleSubmit}>
			<InputBase
				sx={appHeaderSearchStyles.input(theme)}
				placeholder={translateText('Search')}
				inputProps={{ 'aria-label': translateText('Search') }}
			/>
			<IconButton
				type='submit'
				sx={appHeaderSearchStyles.iconButton(theme)}
				aria-label={translateText('Search')}>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

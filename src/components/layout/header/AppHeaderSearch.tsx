/**
 * Archivo: AppHeaderSearch.tsx
 * Propósito: barra de búsqueda visual centrada en la AppBar, con ícono a la derecha.
 */

import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useTypedTranslation } from '../../../i18n/useTypedTranslation';

/**
 * Componente visual centrado entre logo e íconos. Sin funcionalidad.
 */
export const AppHeaderSearch = () => {
	const { translateText } = useTypedTranslation();
	return (
		<Paper
			component='form'
			sx={{
				p: '2px 8px',
				display: 'flex',
				alignItems: 'center',
				width: 300,
				borderRadius: 1,
				boxShadow: 'none',
				bgcolor: 'background.default',
			}}>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder={translateText('header.search')}
				inputProps={{ 'aria-label': translateText('header.search') }}
			/>
			<IconButton
				type='submit'
				sx={{ p: '10px' }}
				aria-label={translateText('header.search')}>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

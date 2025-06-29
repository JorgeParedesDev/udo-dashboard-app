/**
 * Archivo: AppHeaderSearch.tsx
 * Propósito: barra de búsqueda visual centrada en la AppBar, con ícono a la derecha.
 */

import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

/**
 * Componente visual centrado entre logo e íconos. Sin funcionalidad.
 */
export const AppHeaderSearch = () => {
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
				placeholder='Search'
				inputProps={{ 'aria-label': 'search' }}
			/>
			<IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

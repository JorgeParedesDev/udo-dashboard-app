/**
 * Archivo: ServiceSubmenuGrid.tsx
 * Propósito: Submenú flotante en grilla que se despliega desde el item "Service".
 */

import { Box, MenuItem, Paper, Popper, Typography } from '@mui/material';
import { useState, useRef } from 'react';

export const ServiceSubmenuGrid = () => {
	const anchorRef = useRef<HTMLDivElement | null>(null);
	const [open, setOpen] = useState(false);

	const handleMouseEnter = () => setOpen(true);
	const handleMouseLeave = () => setOpen(false);

	return (
		<Box
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			ref={anchorRef}>
			<MenuItem>{'Service'}</MenuItem>

			<Popper
				open={open}
				anchorEl={anchorRef.current}
				placement='right-start'
				disablePortal>
				<Paper
					sx={{
						p: 2,
						display: 'grid',
						gridTemplateColumns: 'repeat(3, 1fr)',
						gap: 1,
					}}>
					{Array.from({ length: 12 }).map((_, index) => (
						<Box key={index}>
							<Typography variant='body2'>
								Item {index + 1}
							</Typography>
						</Box>
					))}
				</Paper>
			</Popper>
		</Box>
	);
};

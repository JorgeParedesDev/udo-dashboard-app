/**
 * Archivo: Logo.tsx
 * Propósito: componente SVG del logo principal, con colores dinámicos desde el theme y texto accesible.
 */

import { useTheme } from '@mui/material/styles';

type LogoProps = {
	homeLinkLabel?: string;
};

/**
 * Componente visual del logo de la app como SVG.
 * Toma los colores desde theme.palette.logo y muestra un título accesible.
 */
export const Logo = ({ homeLinkLabel }: LogoProps) => {
	const theme = useTheme();
	const { primary, secondary } = theme.palette.logo;

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			width={32}
			height={32}
			aria-label={homeLinkLabel}
			role='img'
			style={{ transform: 'scale(-1, 1)' }}>
			<g>
				<path
					d='M2 8V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4Zm14 2v12h4a2 2 0 0 0 2-2V10Z'
					fill={primary}
				/>
				<path d='M14 10H2v10a2 2 0 0 0 2 2h10Z' fill={secondary} />
			</g>
		</svg>
	);
};

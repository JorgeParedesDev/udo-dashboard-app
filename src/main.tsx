import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { UdoDashboardApp } from './UdoDashboardApp';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<UdoDashboardApp />
	</StrictMode>
);

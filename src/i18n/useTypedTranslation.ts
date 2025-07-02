/**
 * Archivo: useTypedTranslation.ts
 * Propósito: define un hook personalizado para obtener traducciones tipadas con autocompletado.
 */

import { useTranslation } from 'react-i18next';

import type { TranslationKeys } from './types/i18n';

export const useTypedTranslation = () => {
	const { t } = useTranslation();

	const translateText = (
		key: TranslationKeys,
		options?: Record<string, unknown>
	) => t(key, options);

	return { translateText };
};

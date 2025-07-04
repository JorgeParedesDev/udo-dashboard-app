/**
 * Archivo: useTypedTranslation.ts
 * Propósito: define un hook personalizado para obtener traducciones tipadas con autocompletado.
 */

import { useTranslation } from 'react-i18next';

import type { TranslationKeys } from './types/i18n';
import { useGenderTranslation } from './genderUtils';

export const useTypedTranslation = () => {
	const { t } = useTranslation();
	const { tGender } = useGenderTranslation();

	const translateText = (
		key: TranslationKeys,
		options?: Record<string, unknown>
	): string => t(key, options);

	const translateGender = tGender;

	return {
		translateText,
		translateGender,
	};
};

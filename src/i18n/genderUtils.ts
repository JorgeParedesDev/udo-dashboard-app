/**
 * Archivo: genderUtils.ts
 * Propósito: Helper para traducir claves que tienen variantes por género o número.
 */

import { useTranslation } from 'react-i18next';

import type { TranslationKeys } from './types/i18n';

export type GenderVariant = 'ms' | 'mp' | 'fs' | 'fp';

type GenderMap = Partial<Record<GenderVariant, string>>;

export const useGenderTranslation = () => {
	const { t } = useTranslation();

	const tGender = (
		key: TranslationKeys,
		gender: GenderVariant = 'ms'
	): string => {
		const raw = t(key, { returnObjects: true });

		if (
			typeof raw === 'object' &&
			raw !== null &&
			Object.prototype.hasOwnProperty.call(raw, gender)
		) {
			const genderValue = (raw as unknown as GenderMap)[gender];
			if (typeof genderValue === 'string') {
				return genderValue;
			}
		}

		if (typeof raw === 'string') return raw;

		if (window['DEBUG_MODE']) return `[!!] ${key}`;
		return key;
	};

	return { tGender };
};

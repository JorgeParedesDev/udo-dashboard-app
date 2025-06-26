/**
 * Archivo: ThemeContextInstance.ts
 * Propósito: Define y exporta el objeto React Context para el tema.
 */

import { createContext } from 'react';

import { themeContextObject } from './ThemeContextObject';
import type { ThemeContextValue } from './ThemeContextObject';

// React Context para el tema
export const ThemeContext =
	createContext<ThemeContextValue>(themeContextObject);

// Error forzado de tipo real
const sumar = (a: number, b: number): number => a + b;

const resultado = sumar(2, '3'); // ❌ string en vez de number

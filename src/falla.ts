// ❌ Tiene error de tipo
const suma = (a: number, b: number): number => {
	return a + b;
};

const resultado = suma(1, '2'); // error: '2' es string
console.log(resultado);

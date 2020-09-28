// Declaração de função (function hoisting)
function falaoi() {
	console.log('oie');
}
falaoi();

// First-Class Objects (Objetos de primeira classe)
// Function expression
const souUmDado = () => {
	console.log('Sou um dado.');
};
souUmDado();

// Arrow Function
const arrowFunc = () => {
	console.log('Sou uma arrow function');
}
arrowFunc();

// Dentro de um objeto
const obj = {
	falar() {
		console.log('Estou falando');
	},
}
obj.falar();


// For in -> Lê os índices ou chaves do objeto

const pessoa = {
	nome: 'Franccesco',
	sobrenome: 'Antonio',
	idade: 26,
}

for(let chave in pessoa) {
	console.log(chave, pessoa[chave]);
}

// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
// 	console.log(frutas[i]);
// }

// for(let index in frutas) {
// 	console.log(frutas[index]);
// }

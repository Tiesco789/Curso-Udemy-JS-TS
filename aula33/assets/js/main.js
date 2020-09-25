const pessoa = {
	nome: 'Franccesco',
	sobrenome: 'Antonio',
	idade: 26,
	endereco: {
		rua: 'Av Brasil',
		numero: 613
	}
}

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;

console.log(nome, sobrenome, resto);

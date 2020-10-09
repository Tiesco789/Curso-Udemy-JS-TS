// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
	Object.defineProperty(this, 'estoque', {
		enumerable: true, // mostra a chave
		value: estoque, // valor da chave
		writable: false, // pode alterar
		configurable: true // configurável
	});

	Object.defineProperties(this, {
		nome: {
			enumerable: true, // mostra a chave
			value: nome, // valor da chave
			writable: true, // pode alterar
			configurable: true // configurável
		},
		preco: {
			enumerable: true, // mostra a chave
			value: preco, // valor da chave
			writable: true, // pode alterar
			configurable: true // configurável
		},
	});
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for (const chave in p1) {
	console.log(chave);
}

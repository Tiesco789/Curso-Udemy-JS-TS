class Pessoa {
	constructor(nome, sobrenome) {
		this.nome = nome;
		this.sobrenome = sobrenome;
	}
	falar() {
		console.log(`${this.nome} está falando`);
	}
}

function Pessoa2(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Franccesco', 'Antonio');


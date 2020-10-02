class Pessoa {
	constructor(nome, sobrenome) {
		this.nome = nome;
		this.sobrenome = sobrenome;

		Object.freeze(this);
	}
}

const p1 = new Pessoa('Franccesco', 'Antonio');
p1.nome = 'outra coisa';
const p2 = new Pessoa('José', 'Antonio');

console.log(p1);
console.log(p2);


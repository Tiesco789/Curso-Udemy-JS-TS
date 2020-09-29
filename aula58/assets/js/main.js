// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa(new)

class Pessoa {
	constructor(nome, sobrenome) {
		// Atributos ou métodos privados
		const ID = 123456;
		const metodoInterno = () => {
		}

		// Atributos ou métodos públicos
		this.nome = nome;
		this.sobrenome = sobrenome;

		this.metodo = () => {
			console.log(this.nome + ': Sou um método');
		}
	}
}

const p1 = new Pessoa('Franccesco', 'Antonio');
const p2 = new Pessoa('Jessica', 'Dias');
p1.metodo();

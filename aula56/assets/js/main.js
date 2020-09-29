// Factory function
// Constructor function
function criaPessoa(nome, sobrenome, a, p) {
	return {
		nome,
		sobrenome,

		// Getter
		get nomeCompleto() {
			return `${this.nome} ${this.sobrenome}`
		},

		// Setter
		set nomeCompleto(valor) {
			valor = valor.split(' ');
			this.nome = valor.shift();
			this.sobrenome = valor.join(' ');
			console.log(valor);
		},

		fala(assunto = 'falando sobre nada') {
			return `${this.nome} está ${assunto}`
		},

		altura: a,
		peso: p,

		// Getter
		get imc() {
			const indice = this.peso / (this.altura ** 2);
			return indice.toFixed(2);
		}
	};
}

const p1 = criaPessoa('Franccesco', 'Bordon', 1.8, 92);
const p2 = criaPessoa('Giovanni', 'Bordon', 1.90, 70);
const p3 = criaPessoa('Pedro', 'Bordon', 1.7, 80);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);


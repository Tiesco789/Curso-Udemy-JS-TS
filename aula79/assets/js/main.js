const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`);
  },
};

const drink = {
  beber() {
    console.log(`${this.nome} está bebendo`);
  },
};

const pessoaPrototype = Object.assign({}, falar, comer, drink);

function criaPessoa(nome, sobrenome) {
	return Object.create(pessoaPrototype, {
		nome: { value: nome },
		sobrenome: { value: sobrenome },
	});
}

const p1 = criaPessoa('Franccesco', 'Antonio');
const p2 = criaPessoa('Luiz', 'Otavio');
console.log(p1);



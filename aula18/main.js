/* eslint-disable no-plusplus */
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}

const teste = {
  nome: 'Franccesco',
  sobrenome: 'Antonio',
  idade: 25,
  fala() {
    console.log(`A minha idade atual é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

const pessoa1 = criaPessoa('Franccesco', 'Antonio', 26);
const pessoa2 = criaPessoa('Jessica', 'Dias', 19);
const pessoa3 = criaPessoa('Patrick', 'Silva', 25);

console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.nome);

teste.fala();
teste.incrementaIdade();
teste.fala();
teste.incrementaIdade();
teste.fala();
teste.incrementaIdade();
teste.fala();

function retornaFuncao(nome) {
	return function () {
		return nome;
	};
}

const funcao = retornaFuncao('Franccesco');
const funcao2 = retornaFuncao('Antonio');

console.dir(funcao);
console.dir(funcao2);
console.log(funcao(), funcao2());


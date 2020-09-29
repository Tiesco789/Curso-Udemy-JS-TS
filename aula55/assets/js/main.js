// IIFE -> Immediately Invoked Function Expression
(function(idade, peso, altura) {
	const sobrenome = 'Antonio';
	function criaNome(nome) {
		return nome + ' ' + sobrenome
	}
	function falaNome() {
		console.log(criaNome('Franccesco'));
	}

	falaNome();
	console.log(idade, peso, altura);

})(30, 80, 1.85)

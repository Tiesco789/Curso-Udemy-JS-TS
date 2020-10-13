/**
 * Objects.values
 * Objects.entries
 * Objects.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ...(spread)
 *
 * | Já vimos |
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define várias propriedades)
 * Object.defineProperty (define uma propriedade)
 */

const produto = {
	nome: 'Produto',
	preco: 1.80,
	material: 'porcelana'
}

console.log(Object.entries(produto));

for(let valor of Object.entries(produto)){
	console.log(valor[0], valor[1]);
}

// Object.defineProperty(produto, 'nome', {
// 	writable: false,
// 	configurable: false,
// 	value: 'Qualquer outra coisa'
// });

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// produto.nome = 'outra coisa';
// console.log(produto);

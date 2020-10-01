// filter -> Sempre vai retornar um array, com a mesma quantidade de elementos ou menos
// map -> sempre terá o mesmo tamanho do array original

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

const pessoas = [
	{nome: 'Luiz', idade: 62},
	{nome: 'Maria', idade: 70},
	{nome: 'Eduardo', idade: 55},
	{nome: 'Leticia', idade: 19},
	{nome: 'Rosana', idade: 53},
	{nome: 'Wallace', idade: 47},
	{nome: 'Giovanni', idade: 23},
	{nome: 'Franccesco', idade: 26},
]

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade }));
const comIds = pessoas.map((obj, indice) => {
	const newObj = { ...obj };
	newObj.id = indice;
	return newObj;
});

// console.log(pessoas);
console.log(nomes);
console.log(idades);
console.log(comIds);

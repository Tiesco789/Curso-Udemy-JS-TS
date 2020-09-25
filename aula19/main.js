/**
 * * Já foi visto os tipos de dados:
 * * Strings, Numbers, Boolean, Undefined,
 * * Null (bigint, symbol) - valores copiados
 * * Referencia (Mutavel) - array, object, function - Passados por referencias
 */

const a = {
  nome: 'Franccesco',
  sobrenome: 'Antonio',
};

const b = {...a};

a.nome = 'José';
console.log(a);
console.log(b);


// const a = [1, 2, 3];
// const b = [...a];
// const c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// c.push('Tiesco');
// console.log(a, c);

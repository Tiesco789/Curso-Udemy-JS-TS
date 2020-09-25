// ! Condição ? 'valor verdadeiro' : 'valor falso';

const pontuacaoUsuario = 1001;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);


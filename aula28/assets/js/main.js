// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);

// const data = new Date(2020, 3); // ano, mes, dia, hora, Minuto, segunds, milisegundos

// const data = new Date(1600887679090);
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Seg', data.getSeconds());
// console.log('Minutos', data.getMinutes());
// console.log('ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay());

// console.log(data.toString());
// console.log(Date.now());

function zeroAEsquerda(num) {
	return num >= 10 ? num : `0${num}`
}

function formataData(data) {
	const dia = zeroAEsquerda(data.getDate());
	const mes = zeroAEsquerda(data.getMonth() + 1);
	const ano = zeroAEsquerda(data.getFullYear());
	const hora = zeroAEsquerda(data.getHours());
	const min = zeroAEsquerda(data.getMinutes());
	const seg = zeroAEsquerda(data.getSeconds());

	return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);


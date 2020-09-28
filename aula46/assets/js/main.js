function mostrHora() {
	let data = new Date();

	return data.toLocaleTimeString();
}

const timer = setInterval(function() {
	console.log(mostrHora());
}, 1000);

setTimeout(() => {
	clearInterval(timer);
}, 3000);

setTimeout(() => {
	console.log('Olá Mundo');
}, 5000)

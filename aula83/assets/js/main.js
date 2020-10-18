function teste() {
	console.log('Este é meu teste.');
}

class ControleRemoto {
	constructor(tv) {
		this.tv = tv;
		this.volume = 0;
		teste();
	}

	aumentarVolume() {
		this.volume += 2;
	}

	diminuirVolume() {
		this.volume -= 2
	}

	// Método estatico
	static soma(x, y) {
		console.log(this);;
	}
}

const controle1 = new ControleRemoto('LG');
ControleRemoto.soma();

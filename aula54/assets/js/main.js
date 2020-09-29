function rand(min = 1000, max = 3000) {
	const num = Math.random() * (max - min) + min;
	return Math.floor(num);
}

function f1(callbback) {
	setTimeout(() => {
		console.log('f1');
		if(callbback) callbback();
	}, rand())
}

function f2(callbback) {
	setTimeout(() => {
		console.log('f2');
		if(callbback) callbback();
	}, rand())
}

function f3(callbback) {
	setTimeout(() => {
		console.log('f3');
		if(callbback) callbback();
	}, rand())
}

f1(f1callback);

function f1callback() {
	f2(f2callback);
}

function f2callback() {
	f3(f3callback);
}

function f3callback() {
	console.log('olá mundo');
}



// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getNameOfDay(dayWeek) {
//   let dayWeekText;
//   switch (dayWeek) {
//     case 0:
//       dayWeekText = 'Domingo';
//       return dayWeekText;

//     case 1:
//       dayWeekText = 'Segunda-Feira';
//       return dayWeekText;

//     case 2:
//       dayWeekText = 'Terça-Feira';
//       return dayWeekText;

//     case 3:
//       dayWeekText = 'Quarta-Feira';
//       return dayWeekText;

//     case 4:
//       dayWeekText = 'Quinta-Feira';
//       return dayWeekText;

//     case 5:
//       dayWeekText = 'Sexta-Feira';
//       return dayWeekText;

//     case 6:
//       dayWeekText = 'Sábado';
//       return dayWeekText;

//     default:
//       dayWeekText = '';
//       return dayWeekText;
//   }
// }

// function getNameOfMonth(numberMonth) {
//   let monthName;
//   switch (numberMonth) {
//     case 0:
//       monthName = 'Janeiro';
//       return monthName;

//     case 1:
//       monthName = 'Fevereiro';
//       return monthName;

//     case 2:
//       monthName = 'Março';
//       return monthName;

//     case 3:
//       monthName = 'Abril';
//       return monthName;

//     case 4:
//       monthName = 'Maio';
//       return monthName;

//     case 5:
//       monthName = 'Junho';
//       return monthName;

//     case 6:
//       monthName = 'Julho';
//       return monthName;

//     case 7:
//       monthName = 'Agosto';
//       return monthName;

//     case 8:
//       monthName = 'Setembro';
//       return monthName;

//     case 9:
//       monthName = 'Outubro';
//       return monthName;

//     case 10:
//       monthName = 'Novembro';
//       return monthName;

//     case 11:
//       monthName = 'Dezembro';
//       return monthName;

//     default:
//       monthName = '';
//       return monthName;
//   }
// }

// function zeroAEsquerda(num) {
// 	return num >= 10 ? num : `0${num}`
// }


// function createDate(data) {
// 	const weekDay = data.getDay();
// 	const monthDay = data.getmonth() + 1;

// 	const dayName = getNameOfDay(weekDay);
// 	const monthName = getNameOfMonth(monthDay);

// 	return `${dayName}, ${data.getdate()} de ${monthName} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
// }

// h1.innerHTML = createDate(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'});

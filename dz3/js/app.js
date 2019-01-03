// На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
// будут в верхнем регистре. Использовать for или while.

let myStringVariable = 'i am in the eeasycode';
let res = '';

for (let i = 0; i < myStringVariable.length; i++) {
	res += (myStringVariable[i - 1] === ' ' || i === 0) ? myStringVariable[i].toUpperCase() : myStringVariable[i];
	console.log(res);
}

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let myVar = 'tseb eht ma i';
let myRes = '';

for (let i = myVar.length - 1; i >= 0; i--) {
	myRes += myVar[i];
	console.log(myRes)
}

//   3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for of.

let n = 10;
let factorial = 1;

for (let i = 1; i <= n; i++) {
	factorial *= i;
	console.log(factorial);

}

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let stringVariable = 'JavaScript is a pretty good language';

let result = '';

for (let i = 0; i < stringVariable.length; i++) {
	if (stringVariable[i] !== " ") {
		result += stringVariable[i - 1] === " " ? stringVariable[i].toUpperCase() : stringVariable[i];
	}
	console.log(result);
}


// 5. Найти все нечетные числа от 1 до 15 включительно и вывести их в консоль. Использовать for of.

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let index of myArray) {
	if (index % 2) console.log(index);
}


// 6. Дан объект:

let list = {
	name: 'denis',
	work: 'easycode',
	age: 29
}

for (index in list) {
	console.log(list[index]);
	if (typeof list[index] === 'string') {
		list[index] = list[index].toUpperCase();
	}
	console.log(list[index])
}
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.


// тернарный оператор.задачи

// if (a === ‘block’) {
// 	console.log(‘block’)
//   } else if (a === ‘none’) {
// 	console.log(‘none’)
//   } else if (a === ‘inline’) {
// 	console.log(‘inline’)
//   } else {
// 	console.log(‘other’)
//   }

// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

let sectionToShow = 'inline';

switch (sectionToShow) {
	case 'block':
		console.log('block');
		break;
	case 'none':
		console.log('none');
		break;
	case 'inline':
		console.log('inline');
		break;
	default:
		console.log('other');
}

// // 1.Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let visibility = "hidden";

// if (visibility === "hidden") {
//   visibility = "visible";
// } else {
//   visibility = "hidden";
// }  записать в виде тернарного оператора



visibility = visibility === 'hidden' ? 'visible' : 'hidden';
console.log(visibility);



let myConstVariable = 0;

// if (myConstVariable === 0) {
//   MyConstVariable = 1;
// } else if (myConstVariable < 0) {
//   MyConstVariable = "less then zero";
// } else {
//   myConstVariable *= 10;
// }

// myConstVariable === 0 ? myConstVariable = 1 : myConstVariable < 0 ?
// 	myConstVariable = 'less then zero' :
// 	myConstVariable *= 10;

myConstVariable = myConstVariable === 0 ? 1 :myConstVariable < 0 ? 'less then zero' :myConstVariable *=10;
console.log(myConstVariable);


let car = {
	name: "Lexus",
	age: 10,
	create: 2008,
	needRepair: false
};

// if (car.age > 5) {
// 	car.needRepair = true;
// 	console.log("Need Repair");
// } else {
// 	car.needRepair = false;
// }
car.age > 5 ? car.needRepair = true : car.needRepair = false;
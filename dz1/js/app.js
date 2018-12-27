// Cтрока
let string = 'some testing string';
console.log('some testing string');

// 1. Получить первую и последнюю буквы строки

console.log(string[0]); 
console.log(string[string.length-1]);


// 2.Сделать первую и последнюю буквы в верхнем регистре

console.log(string.charAt(0).toUpperCase());
console.log(string[string.length-1].toUpperCase());

// 3. Найти положение слова ‘string’ в строке

console.log(string.indexOf('string'));

// 4. Найти положение второго пробела (“вручную” ничего не считать)

let secondSpace = string.indexOf(' ', string.indexOf(' ') + 1)

console.log(secondSpace);


// 5. Получить строку с 5-го символа длиной 4 буквы

console.log(string.substr(4, 4));

// 6. Получить строку с 5-го по 9-й символы

console.log(string.slice(4, 8));

// 7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)

console.log(string.slice(0, -6));

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”


let a = 20,
	b = 16;
let res = String(a) + String(b);
console.log(res);



// ЧИСЛА.ЗАДАЧИ

// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
Math.PI
console.log(Math.PI);
Math.PI.toFixed(2);
console.log(Math.PI.toFixed(2));

//2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));


// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// b. Получить случайное целое число от 0 до X. X - любое произвольное число. 
 console.log(Math.random().toFixed(2));

Math.round(Math.random() * 10);
console.log(Math.round(Math.random() * 10));

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

let x = 10;
console.log((0.6 * x + 0.7 * x) / x);

// 5. Получить число из строки ‘100$’

console.log(parseInt('100$'));


// let myFirstName = "Mikhail.Pulyashenko"

// console.log(myFirstName);

// let mySliceVariable = myFirstName.slice((myFirstName.length -1));

// console.log(mySliceVariable);
// ДЗ №5

// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback 
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.

function every(array, callback) {
	if (!Array.isArray(array)) return "Please, the variable <arr> should be an array";
	for (let i = 0; i < array.length; i++) {
		if (!callback(array[i], i, array)) return false;
	}
	return true;
}

function isBetterThanFive(currentValue, index, array) {
	return currentValue > 5;
}
console.log(every([6,2,34,4,2],isBetterThanFive));


// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

function arrayToStringed(array, callback) {
	let response = 'New value: ';
	for (let item of array) {
		response += callback(item);
	}
	return response.trim(item);
}

function allStringToUpperCase(item) {
	return item[0].toUpperCase() + item.slice(1);
}

function toStringWithIncreaseBy10(item) {
	return item * 10 + ", ";
}

function toSrtingFromArrayObj(item) {
	return item.name + " is " + item.age + ", ";
}

function reverseToString(item) {
	return item.split("").reverse().join("") + ", ";

}

console.log(arrayToStringed(['my', 'name', 'is', 'Trinity'], allStringToUpperCase));
console.log(arrayToStringed([10, 20, 30], toStringWithIncreaseBy10));
console.log(arrayToStringed([{
	age: 45,
	name: 'Jhon'
}, {
	age: 20,
	name: 'Aaron'
}], toSrtingFromArrayObj));
console.log(arrayToStringed(['abc', '123'], reverseToString));

// На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]


// function checkOdd(array) {
// 	return array.map(function (element) {
// 			({
// 				digit: element,
// 				odd: !!(element % 2)
// 			});
// 		}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mapRes = array.map(function (element) {
	return {
		digit: element,
		odd: !!(element % 2)
	};
});
console.log(mapRes);

// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.

let secondArr = [12, 4, 50, 1, 0, 18, 40];
let secondArrRes = secondArr.every(function (element) {
	if (!element){
		return false;
	};
});

console.log(secondArrRes);

// Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

let stringArr = ['yes', 'hello', 'no', 'easycode', 'what'];

let strResponse = stringArr.some(function (element) {
	if (element.length > 3){
		return true;
	};
});

console.log(strResponse);

// Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”


let flexibleArr = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
					{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
					{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

let responseSortArr = flexibleArr.sort(function(prev, next) {	
	return prev.index - next.index;
	});
console.log(responseSortArr);


function arrayToStr(flexibleArr) {
	return flexibleArr.reduce(function(currentValue, item) {
		return currentValue + item.char;
	}, '' );
}
console.log(arrayToStr([{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}]));



// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной):
//  [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

const myArrayFlex = [[14,45], [1], ['a' ,'c' ,'d']];

let myResponse = myArrayFlex.sort(function(prev,next) {
	return prev.length - next.length;
});

console.log(myResponse);

// Есть массив объектов:
// [
//     {cpu: 'intel', info: {cores:2, сache: 3}},
//     {cpu: 'intel', info: {cores:4, сache: 4}},
//     {cpu: 'amd', info: {cores:1, сache: 1}},
//     {cpu: 'intel', info: {cores:3, сache: 2}},
//     {cpu: 'amd', info: {cores:4, сache: 2}}
// ]

// Отсортировать их по возрастающему количеству ядер (cores).


const arrCPU = [
	{cpu: 'intel', info: {cores:2, сache: 3}},
	{cpu: 'intel', info: {cores:4, сache: 4}},
	{cpu: 'amd', info: {cores:1, сache: 1}},
	{cpu: 'intel', info: {cores:3, сache: 2}},
	{cpu: 'amd', info: {cores:4, сache: 2}}
 ];

let arrCPUresponse = arrCPU.sort(function(prev, next) {
	return prev.info.cores - next.info.cores;
});

console.log(arrCPUresponse);
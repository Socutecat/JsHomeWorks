// Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function randomInteger(myMath, min = 0, max = 10) {
	if (myMath > max || myMath <= min) {
		return 'Введите от 1 до 10'
	}
	let prNum = Math.floor((Math.random() * 10) + 1);
	console.log(prNum);
	if (myMath === prNum) {
		return 'Вы выиграли'
	} else {
		return (`Вы не угадали ваше число ${myMath} а выпало число ${prNum}`);
	}

}
let randomedInteger = randomInteger(5);
console.log(randomedInteger);



// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

function multiply() {

	let doubleRes = 1;
	if (arguments.length === 0)
		return 0;
	for (let i = 0; i < arguments.length; i++) {
		doubleRes *= arguments[i];
	}
	return doubleRes;
}
let mult = multiply(1, 2, 3)
console.log(mult);

// Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseStr(str) {
	let newStr = '';
	for (i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
}
let revers = reverseStr('test');
console.log(revers);


// 4. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, 
//    где каждый символ разделен пробелом и заменен на юникод-значение символа:
//    getCodeStringFromText(‘hello’) = “104 101 108 108 111”
//    подсказка: для получения кода используйте специальный метод

// function getUnicodestr(string)

// let myStr = '';

function unicodeString(string) {
	let res = "";
	for (let i = 0, myString = string.length; i < myString; i++) {
		res += string.charCodeAt(i) + (i < string.length - 1 ? " " : "");
	}
	return res;
}


// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

function map(arr) {
	let napp = [];
	for (let i = 0; i < arr.length; i++) {
		napp.push(arr[i]);
	}
	return napp;
}
let arr = map([1, 2, 3]);

let doubleArray = arr.concat(arr);
console.log(doubleArray);


// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

let items = [{
		name: 'Denis',
		age: 29,
		gender: 'male'
	},
	{
		name: 'Ivan',
		age: 20,
		gender: 'male'
	},
	{
		name: 'Dasha',
		age: 25,
		gender: 'female'
	}
]

function getUsers(items, prop, value) {
	let res = [];
	for (item of items) {
		if (item[prop] === value) {
			res.push(item);
		}
	}
	return res;
}

console.log(getUsers(items, "gender", "male"));

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: 
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
	let res = [];
	for (let i = 0, arrayString = arguments.length; i < arrayString; i++) {
		arguments[i].shift();
		res.push(arguments[i]);
	}
	return res;
}
let changedCollection = changeCollection([1, 2, 3], ['a', 'b', 'c']);
console.log(changedCollection);

// 5. Создать функцию, которая принимает число N и возвращает массив, заполненный числами от 1 до N: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

// function getArray(n) {
// 	let myArray = [];
// 	for (let i = 0; i < n; i ++){
// 		myArray.push[i];
// 	}
// }
function ranged(start, end) {
	let foo = [];
	for (let i = start; i <= end; i++) {
		foo.push(i);
	}
	return foo;
}
let rangeNumberArray = ranged(1, 10);
console.log(rangeNumberArray);

const heroes = [
    {name: 'Hulk', strength: 90000, sex: 'm'},
    {name: 'Spider-Man', strength: 25000, sex: 'm'},
    {name: 'Hawk Eye', strength: 136, sex: 'm'},
    {name: 'Thor', strength: 100000, sex: 'm'},
    {name: 'Black Widow', strength: 136, sex: 'f'},
    {name: 'Vision', strength: 5000, sex: 'm'},
    {name: 'Scarlet Witch', strength: 60, sex: 'f'},
    {name: 'Mystique', strength: 120, sex: 'f'},
    {name: 'Namora', strength: 75000, sex: 'f'},
];

function filteredbyStrength(heroes, min=60, max=100000){
	let res6= [];
	for (let i=0; i<heroes.length; i++){
		if(heroes[i].strength >=min && heroes[i].strength<=max){
			res6.push(heroes[i])
		}
	}
	return res6;
}
let filteritem = filteredbyStrength(heroes, 60, 7876);
console.log(filteritem);

function filteredbySex(heroes,prop,value){
	let res7 = [];
	for( hero of heroes){
		if(hero[prop]===value){
			res7.push(hero);
		}
	}
	return res7
}
let filterSex = filteredbySex(heroes, 'sex','f');
console.log(filterSex);
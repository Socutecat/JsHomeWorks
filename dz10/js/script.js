
// Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает марку, и
// второй метод, который возвращает год производства машины (год текущий минус возраст машины, использовать Date для получения текущего года)
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2014 (2016-2);
// Марка машины всегда должна возвращаться с большой буквы!

function Car(model, yearOfInstance) {
    this.model = model
    this.yearOfInstance = yearOfInstance;
    this.sayHi = function () {
        let str = this.model;
        let res = "";
        for (let i = 0; i < str.length; i++) {
            res += str[i - 1] === " " || i === 0 ? str[0].toUpperCase() + str.slice(1) : str[i];
            return res;
        }
    }
    this.getYear = function () {
        let today = new Date();
        let year = today.getFullYear();
        return year - this.yearOfInstance;
    }
}

const auto = new Car('lexus', 10);




// Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой другой метод). Конструктор при инициализации получает строку и имеет следующие методы:
// 	a. показать оригинальную строку
// b. показать зашифрованную строку
// Строки не должны быть доступны через this, только с помощью методов.

function Stringer(str) {
    this.ShowOriginalString = function () {
        return str;
    }

    this.toStringWithReverse = function () {
        return str.split("").reverse().join("");
    }
}

const responseStr = new Stringer('I am in the easycode');


// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const Calculated =(function (){
    let value;
    

    // УСТАНАВЛИВАЕМ ЗНАЧЕНИЕ
    function setValue (valueVariable) {
        
        value = typeof valueVariable === 'number' ? valueVariable : 0;
        return this;
    }



    function plusValue (valueVariable) {
        
        value += valueVariable;
        return this;
    }

    

    function multiplyValue (valueVariable){
        
        value *= valueVariable;
        return this;
    }

    function minusValue (valueVariable) {
        value -= valueVariable;
        return this;
    }

    function divideValue (valueVariable) {
        value /= valueVariable;
        return this;
    }

    function powValue (valueVariable) {
        value = Math.pow(value, valueVariable);
        return this;
    }

    function getValue () {
        
        return Number(value.toFixed(2));
    }

    return {
        setValue,
        plusValue,
        multiplyValue,
        minusValue,
        divideValue,
        powValue,
        getValue
    }

}());


console.log(Calculated.setValue(2220).plusValue(55).multiplyValue(42).minusValue(13).divideValue(21).getValue());


// Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.




const difference = function(value) {
	return function(myPersonalVariable) {
		return (typeof value === "number" ? value : 0) - (typeof myPersonalVariable === "number" ? myPersonalVariable : 0);
	};
};

const difference1 = difference(10) (2);

console.log(difference1);

function multiplyMaker(value) {
	value = typeof value === "number" ? value : 1;
	return function(myPersonalVariable) {
		return value *= (typeof myPersonalVariable === "number" ? myPersonalVariable : 1);
	};
} 

// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function MultiplyMaker ...
// const multiply = MultiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

const multiply = multiplyMaker(2);

console.log(multiply(1));
console.log(multiply(2));
console.log(multiply(3));


// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш


const myStringModule = (function(){
    let valueVariable;


    /**
     * @param
     * @param {*} comingValueVariable 
     * @return {object} - текущий контекст
     */
    function setString(comingValueVariable){
        valueVariable = String(comingValueVariable|| " ");
        return this;
    }

    /**
     *@returns {string}
     */
    function getString(){
        return valueVariable;
    }

    function getLength() {
        return valueVariable.length;
    }

    function getReverse() {
        return valueVariable.split("").reverse().join("");
    }
    return{
        setString,
        getString,
        getLength,
        getReverse
    }

}());

console.log(myStringModule.setString('mystring'));
console.log(myStringModule.getLength())
console.log(myStringModule.getString())
console.log(myStringModule.getReverse());


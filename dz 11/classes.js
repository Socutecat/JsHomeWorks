



// Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):

// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }

// Пример вызова:

// const comp = new Component('span');


class Component {
    constructor (tagName){
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }
}

const comp = new Component ('span');

// Реализовать конструктор и методы в ES6 синтаксисе:

// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }

// Component.prototype.setText = function (text) { 
//   this.node.textContent = text;
// };

class Component2 {
    constructor (tagName) {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }

    setText(text) {
        this.node.textContent = text;
    }
}

const comp2 = new Component2 ('p');


// Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.


class Calculated {
    constructor (value) {
        this._number = value
    }

    plusValue(value) {
        this._number += value;
        return this;
    }

    minusValue(value) {
        this._number -= value;
        return this;
    }

    multiplyValue(value) {
        this._number *= value;
        return this;
    }

    dividedValue(value) {
        this._number /= value;
        return this;
    }


    get number() {
        return `Your number is  ${this._number}`;
    }

    set number (value) {
        this._number = value;
    }
}

const calc = new Calculated(3);
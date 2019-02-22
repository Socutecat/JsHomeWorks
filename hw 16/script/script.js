
function Planet (name) {
    this.name = name;
    this.getName = function () {
        return `Planet name is ${this.name}`
    }
}

const resInc = new Planet ('mars');

function PlanetWithSatellite (name,satelite) {
    Planet.call(this,name);
    this.satelite = satelite;
    this.getName = function () {
        return `Planet name is ${this.name}. Sattelite is ${this.satelite}`
    }
}
const earth = new PlanetWithSatellite('earth', 'moon');


// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 

// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

function Zdanie (name,floors) {
    this.name = name;
    this.floors = floors;
    this.getfloor = function () {
        return `Number of floors is ${this.floors}`
    }
    this.setfloor = function (value) {
        this.floors = value
    }
}

const mean = new Zdanie ('dom', 4)



function OverDom (numHat) {
    Zdanie.apply(this,arguments)
    this.numHat = numHat;
    this.getfloor = function () {
        return `Number of floors is ${this.floors}. Number of hat is ${this.floors * this.numHat}`

    }
}
const mean2 = new OverDom (5, 5)

function OverMagaz (numShop) {
    Zdanie.apply(this,arguments)
    this.numShop = numShop;
    this.getfloor = function () {
        return `Number of floor is ${this.floors}. Number of shops is ${this.floors * this.numShop}`
    }
}

const mean3 = new OverMagaz(6,12)






function Furniture (name,price) {
    this.name = name;
    this.price = price;
}
Furniture.prototype.getInfo = function() {
    return `This name is ${this.name}. This price is ${this.price}`
}
const response = new Furniture('Table', '400$')

function OffFurn (name,price,ofset){
    Furniture.apply(this,arguments)
    this.ofset = ofset
    this.getInfo = function () {
        return `This name is ${this.name}. This price is ${this.price}. This ofset is ${this.ofset}`
    }
}

const response2 = new OffFurn('Table','400$','pencil')



// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)

function User (name,date){
    this.name = name;
    this.date = date
}
User.prototype.getInfo = function () {
    return `My name is ${this.name}, i was born in ${this.date}`
}

function Admin (name,date,){
    User.apply(this, arguments);
    this._super_prop = true;
} 
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin; 
Admin.prototype.getInfo = function () {
    return `My name is ${this.name}, i was born in ${this.date}. my prop is ${this._super_prop}`
}

const admin = new Admin ('misha', 1994)

function Quest (name,date,validate) {
    User.apply(this, arguments);
    this.validate = function () {
        return new Date().getFullYear() - validate;
    }
}
    Quest.prototype = Object.create(User.prototype);
    Quest.prototype.constructor = Quest; 
    Quest.prototype.getInfo = function() {
        return `My name is ${this.name}, i was born in ${this.date}. my validate is ${this.validate()} year`
    }

const quest = new Quest('misha', 1994 ,2012)
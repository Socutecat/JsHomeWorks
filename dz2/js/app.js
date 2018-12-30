// if else ЗАДАЧИ

// 1.Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let visibility = "hidden";

if (visibility === "hidden") {
  visibility = "visible";
} else {
  visibility = "hidden";
}

console.log(visibility);

// Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
// 	если меньше нуля - строку “less then zero”;
// 	если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let myConstVariable = 0;

if (myConstVariable === 0) {
  MyConstVariable = 1;
} else if (myConstVariable < 0) {
  MyConstVariable = "less then zero";
} else {
  myConstVariable *= 10;
}

console.log(MyConstVariable);

// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
  name: "Lexus",
  age: 10,
  create: 2008,
  needRepair: false
};

if (car.age > 5) {
  car.needRepair = true;
  console.log("Need Repair");
} else {
  car.needRepair = false;
}

console.log(car);

// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = {
  name: "Intel core i7",
  price: "100$",
  discount: "15%"
};

let price = parseInt(item.price);
let discount = parseInt(item.discount);

if ("discount" in item && discount) {
  item.priceWithDiscount = price - (price / 100) * discount + "$";
  console.log(item.priceWithDiscount);
} else {
  console.log(item.price);
}

// 6.

// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
  name: "Яблоко",
  price: "10$"
};
let priceVariable = parseInt(product.price);
let min = 10; // min price
let max = 20; // max price

if (priceVariable >= min && priceVariable <= max) {
  console.log(product.name);
} else {
  console.log("Product not found");
}

//====================================================================================================================

// обьекты задачи
// 1. Создать объект с полем product, равным ‘iphone’
// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
// 3. Добавить поле details, которое будет содержать объект с полями model и color

// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.

let obj = {
  product: "Iphone"
};
obj.price = 1000;
obj.currency = "dollar";
obj.details = {
  model: "6s",
  color: "pink"
};

console.log(obj);

//====================================================================================================================

// Преобразование примитивов

// Чему равно а почему?
// let a = 0 || 'string';
console.log(0 || "string"); // 'string' запнулось на правде

// let a = 1 && 'string';
console.log(1 && "string"); //'string' запнулось на последней правде

// let a = null || 25;
console.log( null || 25); //'25' запнулось на правде

// let a = null && 25;
console.log(null && 25); // 'null' запнулось на первой  лжи

// let a = null || 0 || 35;
console.log(null || 0 || 35); //'35' запнулось на первой правде

// let a = null && 0 && 35;
console.log(null && 0 && 35); //'null' запнулось на первой лжи

// ==================================================================================================================

// Что отобразится в консоли. Почему?
// 12 + 14 + '12'
console.log(12 + 14 + "12"); //  12 + 14 = 26, а потом обьединение 26 + '12' = '2612'

// 3 + 2 - '1'
console.log(3 + 2 - "1"); // 3 + 2 - 1 = 4 ('1' преобразовывается в 1)

// '3' + 2 - 1
console.log("3" + 2 - 1); // сначала идет конкатенация '3' + 2 = '32', а потом преобразование '32' в 32
// и вычитание 32 - 1 = 31

// true + 2
console.log(true + 2); // 1 + 2 = 3 (true преобразовывается в 1)

// +'10' + 1
console.log(+"10" + 1); // 10 + 1 = 11 (+'10' преобразовывается в 10)

// undefined + 2
console.log(undefined + 2); // NaN + 2 = NaN

// null + 5
console.log(null + 5); // null + 5 = 5

// true + undefined
console.log(true + undefined); // 1 + NaN = NaN

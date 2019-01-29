// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }


const numerator = {
	value: 1,
	double: function () {
		this.value *= 2
		return this
	},
	plusOne: function () {
		this.value += 1
		return this
	},
	minusOne: function () {
		this.value -= 1
		return this;
	}
}

console.log(numerator.double().plusOne().plusOne().minusOne());
console.log(numerator.value);

// 1.Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};


const rectangle = {
	width: 20,
	height: 4,
	getSquare: function () {
		return this.width * this.height;
	}
}

console.log(rectangle.getSquare());

// Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

const price = {
	price: 10,
	discount: '15%',
	getPrice: function () {
		return this.price
	},
	getPriceWithDiscount: function () {
		return this.price - (this.price / 100) * parseInt(this.discount);
	}
}
console.log(price.getPrice());
console.log(price.getPriceWithDiscount());


// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;




const myObj = {
	height: 10,
	increase
}
function increase (){
	this.height++
	return this;
}

console.log(myObj.increase());

// Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

const items = {
	price: 100,
	foreignPrice: 22,
	getSummary: function () {
		return this.price * this.foreignPrice
	}
}

console.log(items.getSummary());

// Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

const itemsSecond = {
	price: 20,
	foreignPrice: 7
}

console.log(items.getSummary.call(itemsSecond));

// Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes


let sizes = {
		width: 5,
		height: 10
	},
	getSquare = function () {
		return this.width * this.height
	};

let response = getSquare.call(sizes);
console.log(response);

// 4


let element = {
	height: 25,
	getHeight: function () {
		return this.height;
	}
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight()); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.

//========================================================================================================


// Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

// function sum() {
//   const params = Array.prototype.slice.call(arguments);
//   if (!params.length) return 0;
//   return params.reduce((prev, next){ return prev + next; });
// }

// sum(1, 2, 3, 4); // 10
// sum(); // 0

let Sum = (...rest) => {
	const params = Array.prototype.slice.call(rest);
	if (!params.length) return 0;
	return params.reduce((prev, next) => {
		return prev + next;
	});
}

console.log(Sum(1, 2, 3, 4, 555, 2111, 4))
console.log(Sum());

// Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) → 
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }

let getObj = (...rest) => {
	return {
		first: rest[0],
		other: rest.slice(1)
	}
}
console.log(getObj('a', 'b', 'c', 'd'));

// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {
	name: 'Google',
	info: {
		employees: ['Vlad', 'Olga'],
		partners: ['Microsoft', 'Facebook', 'Xing']
	}
};

function getInfo(user) {
	const {
		name,
		info: {
			partners: [name_1, name_2]
		}
	} = user;
	console.log(`Name - ${name||'Unknown'}, Partners - ${name_1}, ${name_2}`);
}

getInfo(organisation);

// var metadata = {
//     title: "Scratchpad",
//     translations: [
//        {
//         locale: "de",
//         localization_tags: [ ],
//         last_edit: "2014-04-14T08:43:37",
//         url: "/de/docs/Tools/Scratchpad",
//         title: "JavaScript-Umgebung"
//        }
//     ],
//     url: "/en-US/docs/Tools/Scratchpad"
// };

// var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

// console.log(englishTitle); // "Scratchpad"
// console.log(localeTitle);  // "JavaScript-Umgebung"
//	DOM TASKS

// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

let constFunc = (parent, child) => {
	return parent.contains(child);
}

console.log(constFunc(document.body.children[0], document.querySelector('mark')));

// 2. Получить список всех ссылок, которые не находятся внутри списка ul


// let linkFunc = Array.prototype.slice.call(document.links).filter(linkItem)=>!link.closest('ul')
let links = Array.prototype.slice.call(document.links).filter((linkItem) => !linkItem.closest('ul'));

console.log(links);

// 3. Найти элемент, который находится перед и после списка ul

let myUl = document.querySelector('ul');
console.log(myUl);

let prevElement = myUl.previousElementSibling;
console.log(prevElement);

let nextElement = myUl.nextElementSibling;
console.log(nextElement);

// Посчитать количество элементов li в списке

let numbersOfLi = myUl.getElementsByTagName('li').length;

console.log(numbersOfLi);
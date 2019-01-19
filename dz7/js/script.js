//DOM PROPERTIES TASKS

//1.1. Найти параграф и получить его текстовое содержимое (только текст!)
let p = document.querySelector('p').textContent;

console.log(p);


//2.Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
function getTextFromUi() {
	let arr = []
	let res = document.querySelector('ul').children;
	for (let i = 0; i < res.length; i++) {
		arr.push((res[i].textContent));
	}
	return arr;
}

console.log(getTextFromUi('ul'));



//3.Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0)ю
function getObj() {
	let body = document.querySelector('p');
	return {
		type: body.nodeType,
		name: body.nodeName,
		child: body.childNodes
	}
}



//4.В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

let myVar = document.querySelector('p');
let a = document.querySelector('a');
myVar.lastChild.data = '-text-';
myVar.firstChild.data = '-text-';
myVar.childNodes[1].data = '-text-';
a.nextSibling.data = '-text-';
console.log(myVar);

//5.Найти в коде список ul и добавить класс “list”
let ul = document.querySelector('ul');
ul.classList.add('list')
console.log(ul);

//6.Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let span = document.querySelector('ul').nextElementSibling;
let link = span.nextElementSibling;
link.id = 'link';

//7На li через один (начиная с самого первого) установить класс “item”
let list = document.querySelector('ul').children;

for (let i = 0; i < list.length; i++) {
	if (!(i % 2))
		list[i].classList.add('item');

}
console.log(list);


//8.На все ссылки в примере установить класс “custom-link”
let allLinks = document.links;
for (i = 0; i < allLinks.length; i++) {
	allLinks[i].classList.add('custom-link');
}

console.log(allLinks);

//9  Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
let number = ul.getElementsByTagName('li').length;

for (i = 0; i < number; i++) document.querySelector('ul').insertAdjacentHTML('beforeend', '<li class = "new-item">item ' + (number + i) + '</li>');


//10.
// В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 
let strong = document.createElement("strong");
strong.insertAdjacentText("beforeend", "STRONG");

ul.querySelectorAll("a").forEach((element, index) => {
	if (index > 3) return false;
	element.appendChild(strong.cloneNode(true));

});


//11В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 

let img = document.createElement("img");

img.src = 'https://upload.wikimedia.org/wikipedia/commons/3/39/Lone_House.jpg'
img.alt = 'housse'

document.body.insertAdjacentElement('afterbegin', img);


//12Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

let mark = document.querySelector('mark');
mark.classList.add('green');
mark.insertAdjacentText('beforeend', 'green');

//13Отсортировать li внутри списка в обратном порядке (по тексту внутри)


Array.from(ul.children).sort((prev, next) => {
	if (prev.textContent > next.textContent) return -1;
	if (prev.textContent < next.textContent) return 1;
	return 0;
}).forEach(element => ul.appendChild(element));
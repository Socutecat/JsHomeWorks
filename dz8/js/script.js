// 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.

let button = document.getElementById('btn-msg');
console.log(button);
let data_text = button.getAttribute('data-text');
console.log(data_text);
let btn_generate = document.getElementById('btn-generate');
console.log(btn_generate);
let ul = document.querySelector('ul');
console.log(ul);
let li = ul.querySelectorAll('li');
console.log(li);
let currentItem = ul.querySelector('li');
console.log(currentItem);
// let node = document.createElement('<li>');
var div = document.createElement('div');


button.addEventListener('click', (event)=>{
	alert(data_text);
});

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

button.addEventListener('mouseover',(event)=>{
	button.classList.add('color-red');
})

button.addEventListener('mouseout',(event)=>{
	button.classList.remove('color-red');
})

//3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
document.addEventListener('click',function(e){
	tag.textContent = 'Tag: '+ e.target.tagName;
})



// При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д 

btn_generate.addEventListener('click',(event)=>{
	li.forEach((elem,index)=>{
		if (index<1) return ;
			elem.insertAdjacentHTML('afterend', '<li> Item+'+[index] + '</li>')
		
	})
})

// ДЕНИС КАК ПОЛУЧИТЬ ПОРЯДКОВЫЙ НОМЕР LI ПО СПИСКУ ??
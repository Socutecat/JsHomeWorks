// const menu = document.querySelector('.menu');
// const items = menu.querySelectorAll('.dropdown-item');
// const icons = menu.querySelectorAll(".icon");

// items.forEach(item => item.addEventListener("click", e => {
// // Текущее меню
// const currentMenu = item.querySelector(".dropdown-menu");
// const icon = item.querySelector(".icon");


// icons.forEach(item => {
// item.classList.toggle("fa-minus", item === icon);
// item.classList.toggle("fa-plus", item !== icon);
// });

// // Находим все меню
// menu.querySelectorAll('.dropdown-menu').forEach(element => {
// // Цепляем класс d-none на все меню, кроме текущего
// if (element !== currentMenu) element.classList.toggle("d-none", true);
// });
// currentMenu.classList.toggle("d-none");
// }));

const menu = document.querySelector('.menu');
const items = menu.querySelectorAll('.dropdown-item');

items.forEach(item => item.addEventListener("click", e => {
  item.classList.toggle("active");
  items.forEach(element => {
    if (element !== item) element.classList.toggle("active", false);
  })

})); 

const menu = document.querySelector('.menu');
const items = menu.querySelectorAll('.dropdown-item');
console.log(items)

items.forEach(item => item.addEventListener("click", e => {
    // Текущее меню
    const currentMenu = item.querySelector(".dropdown-menu");

    // Находим все меню
    menu.querySelectorAll('.dropdown-menu').forEach(element => {
        // Цепляем класс d-none на все меню, кроме текущего
        if (element !==  currentMenu)  element.classList.toggle("d-none", true);
    });

    currentMenu.classList.toggle("d-none");
})); 


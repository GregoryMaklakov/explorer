// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
// Подключение type - анимация печатания текста
import Typed from 'typed.js';

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 50, // Скорость печати
    startDelay: 1000, // Задержка перед стартом анимации
    backDelay: 1000, // Пауза перед удалением
    backSpeed: 10, // Скорость удаления
    showCursor: false, // показивать курсор
    loop: true // Указываем, повторять ли анимацию
   
});

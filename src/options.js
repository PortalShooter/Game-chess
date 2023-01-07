/** Хочу, чтобы был файл, в котором можно указать
 *  параметры, которые будут иметь доступ как в js,
 *  так и из css. 
 *  Не знаю насколько данная реализация грамотная.
 */

// Размер поля
const fieldSize = 8;
// Цвет белых полей
const colorWite = '#fff';
// Цвет черных полей
const colorBlack = '#000';

// Задаем переменные в css
let root =  document.documentElement
root.style.setProperty('--color-white', colorWite);
root.style.setProperty('--color-black', colorBlack);
root.style.setProperty('--field-size', fieldSize);


export {fieldSize, colorWite, colorBlack}
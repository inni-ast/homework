
"use strict"
//Зерна на шахматной доске

/* 1. Найдем количество зерен
на 64 шахматных клетках*/

let grains;
grains = (Math.pow(2, 64)) - 1;
console.log("Количество зерен " + grains);

/* 2. Узнаем вес зерна, если вес 1 зернышка равен 0,065 грамма*/
let weightGrains;
weightGrains = (grains * 0.065) / 1000000;
console.log("Масса зерна " + weightGrains);

/* Узнаем сколько нужно машин БелАЗ 75600  грузоподъемностью 352 тонны*/
let cars;
cars = weightGrains / 352;
console.log("Нужно Белазов " + cars);


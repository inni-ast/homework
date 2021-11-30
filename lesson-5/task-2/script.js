
"use strict"
//Найти площадь и периметр прямоугольника

//Площадь прямоугольника
// s=a*b

function findRectangleArea(a, b) {
	let rectangleArea = a * b;
	return rectangleArea;
}

console.log(findRectangleArea(5, 4));
console.log(findRectangleArea(6, 4));
console.log(findRectangleArea(7, 4));

//Периметр прямоугольника
// p=2*(a+b)

function findRectanglePerimeter(a, b) {
	let rectanglePerimeter = 2 * (a + b);
	return rectanglePerimeter;
}
console.log(findRectanglePerimeter(5, 4));
console.log(findRectanglePerimeter(6, 4));
console.log(findRectanglePerimeter(7, 4));

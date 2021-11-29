
"use strict"
//Найти площадь и периметр прямоугольника

//Площадь прямоугольника
// s=a*b
let rectangleFirstSide;
let rectangleSecondSide;

function findRectangleArea(rectangleFirstSide, rectangleSecondSide) {
	let rectangleArea = rectangleFirstSide * rectangleSecondSide;
	return rectangleArea;
}

console.log(findRectangleArea(5, 4));
console.log(findRectangleArea(6, 4));
console.log(findRectangleArea(7, 4));

//Периметр прямоугольника
// p=2*(a+b)

function findRectanglePerimeter(rectangleFirstSide, rectangleSecondSide) {
	let rectanglePerimeter = 2 * (rectangleFirstSide + rectangleSecondSide);
	return rectanglePerimeter;
}
console.log(findRectanglePerimeter(5, 4));
console.log(findRectanglePerimeter(6, 4));
console.log(findRectanglePerimeter(7, 4));

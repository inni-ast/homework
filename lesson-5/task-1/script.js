
"use strict"
//Найти площадь и периметр квадрата

//Площадь квадрата
// s=a*a
let squareSide;

function findSquareArea(squareSide) {
	let squareArea = squareSide * squareSide;
	return squareArea;
}

console.log(findSquareArea(5));
console.log(findSquareArea(6));
console.log(findSquareArea(7));

//Периметр квадрата
// p=a*4

function findSquarePerimeter(squareSide) {
	let squarePerimeter = squareSide * 4;
	return squarePerimeter;
}
console.log(findSquarePerimeter(5));
console.log(findSquarePerimeter(6));
console.log(findSquarePerimeter(7));

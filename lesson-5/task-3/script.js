
"use strict"
//Найти площадь и периметр куба

//Площадь поверхности куба
// s=6(a**2)

function findCubeArea(a) {
	let cubeArea = (a * a) * 6;
	return cubeArea;
}

console.log(findCubeArea(5));
console.log(findCubeArea(6));
console.log(findCubeArea(7));

//Периметр куба
// p=12*a

function findCubePerimeter(a) {
	let cubePerimeter = 12 * a;
	return cubePerimeter;
}
console.log(findCubePerimeter(5));
console.log(findCubePerimeter(6));
console.log(findCubePerimeter(7));


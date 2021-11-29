
"use strict"
//Найти площадь и периметр куба

//Площадь поверхности куба
// s=6(a**2)
let cubeSide;

function findCubeArea(cubeSide) {
	let cubeArea = (cubeSide * cubeSide) * 6;
	return cubeArea;
}

console.log(findCubeArea(5));
console.log(findCubeArea(6));
console.log(findCubeArea(7));

//Периметр куба
// p=12*a

function findCubePerimeter(cubeSide) {
	let cubePerimeter = 12 * cubeSide;
	return cubePerimeter;
}
console.log(findCubePerimeter(5));
console.log(findCubePerimeter(6));
console.log(findCubePerimeter(7));

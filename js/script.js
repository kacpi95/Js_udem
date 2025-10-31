const numbers = [2, 5, 7, 10];

let new1 = numbers.reduce((a, b) => {
	return a + b;
});
console.log(new1);

let new2 = numbers.map((el) => {
	return el * 2;
});
console.log(new2);

let new3 = numbers.filter((el) => el % 2 === 0);
console.log(new3);

const students = [
	{ name: "Kacper", grade: 5 },
	{ name: "Ola", grade: 2 },
	{ name: "Asia", grade: 4 },
];

let new4 = students.filter((el) => {
	return el.grade >= 3;
});
console.log(new4);

let new5 = students.some((el) => el.grade === 5);
console.log(new5);

let new6 = students.every((el) => el.grade >= 3);
console.log(new6);

let new7 = students.find((el) => el.name === "Ola");
console.log(new7);

let array = [3, 4, 5, 2, 5];

let new8 = array.reduce((a, b) => a + b, 0) / array.length;

console.log(new8);

let new9 = array.filter((el) => {
	return el === 5;
});
console.log(new9);

tab = [1, 2, 3, 4, 5, 6];

let new10 = tab.filter((el) => el % 2 === 0).map((el) => el * el);
console.log(new10);

let new11 = students.sort((a, b) => a.grade - b.grade);
console.log(new11);

let new12 = students.filter((el) => el.grade >= 3).map((el) => el.name);

console.log(new12);

tab = [1, 3, 5, 7, 9, 10];

let new13 = tab
	.filter((el) => el > 5)
	.map((el) => el * 2)
	.reduce((a, b) => a + b);

console.log(new13);

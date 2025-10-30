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

let new7 = students.find((el)=> el.name === 'Ola');
console.log(new7);

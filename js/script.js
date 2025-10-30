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

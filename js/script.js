let obj = {
	num: 123,
	str: "text",
	printData: () => {
		return console.log("Hello");
	},
	arr: [1, 2, 3, 4],
	data: { a: 1, b: 2 },
};

const objKeys = Object.keys(obj);
for (const key of objKeys) {
	console.log(key, obj[key]);
}
const objValues = Object.values(obj);
const objEntries = Object.entries(obj);
for (const [key, value] of objEntries) {
	console.log(key, value);
}
console.log(objKeys);
console.log(objValues);
console.log(objEntries);

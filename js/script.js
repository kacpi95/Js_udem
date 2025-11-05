const map = new Map();

map.set("jabłko", 3.2);
map.set("banan", 5);
map.set("gruszka", 4);

console.log(map.get("banan"));

const map2 = new Map();

map2.set(1, "kacper");
map2.set(2, "adam");
map2.set(3, "Kasia");

if (map2.has(2) === true) {
	console.log(`Użytkownik istnieje ${map2.get(2)}`);
} else {
	console.log("Użytkownik nie istnieje");
}

for (const [key, value] of map) console.log(key, value);

const words = ["kot", "pies", "kot", "ryba", "pies", "kot"];

const students = [
	{ name: "Jan", grade: 5 },
	{ name: "Anna", grade: 4 },
	{ name: "Jan", grade: 3 },
];

const storeGrades = (students) => {
	let map3 = new Map();

	for (const student of students) {
		const { name, grade } = student;
		if (map3.has(name)) {
			map3.get(name).push(grade);
		} else {
			map3.set(name, [grade]);
		}
	}
	return map3;
};

console.log(storeGrades(students));

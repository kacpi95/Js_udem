const tvFactor = {
	name: "Factory",
	city: "Krk",
	employees: [],
	brand: "Sharp",
	addEmployees: function (name, surname) {
		const obj = {
			name: name,
			surname: surname,
			email: `${name}.${surname}@gmail.com`,
		};
		this.employees[this.employees.length] = obj;
	},
	showEmployees: function () {
		console.log(this.name, "employees");

		for (let i = 0; i < this.employees.length; i++) {
			const e = this.employees[i];
			console.log(e.name, e.surname, e.email);
		}
	},
	makeTv: function (model, color) {
		return {
			id: `${model}-${color}-TV`,
			brand: this.brand,
			model: model,
			color: color,
		};
	},
};

tvFactor.addEmployees("Kacper", "Kowalski");
tvFactor.addEmployees("Adam", "Nowal");
console.log(tvFactor.employees);

tvFactor.showEmployees();

const tv1 = tvFactor.makeTv("Sony", "black");
console.log(tv1);
const tv2 = tvFactor.makeTv("Samsung", "white");
console.log(tv2);

tvFactor.name = "Factory Ltd.";

console.log(tvFactor);

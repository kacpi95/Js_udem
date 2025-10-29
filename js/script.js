const school = {
	name: "UJ",
	city: "Krk",
	students: [],
	addStudent: function (name, surname) {
		const obj = {
			name: name,
			surname: surname,
		};
		const index = this.students.length;
		this.students[index] = obj;
	},
	showStudents: function () {
		if (this.students.length == 0) {
			console.log("Szkoła nie ma studentów ");
			return;
		}

		for (let i = 0; i < this.students.length; i++) {
			const stud = this.students[i];
			console.log(stud.name, stud.surname);
		}
	},
	showStudentsByName: function (name) {
		if (this.students.length == 0) {
			console.log("Szkoła nie ma studentów ");
			return;
		}

		for (let i = 0; i < this.students.length; i++) {
			const stud = this.students[i];
			if (stud.name === name) {
				console.log(stud.name, stud.surname);
			}
		}
		console.log("Imię studenta:", name);
	},
	getNumStudents: function () {
		let numStudents = this.students.length;
		return numStudents;
	},
	resetStudents: function () {
		this.students = [];
	},
};

school.addStudent("Kacper", "Kowalski");
school.addStudent("Kacper", "Nowak");
school.addStudent("Asia", "Nowak");
school.addStudent("Ola", "Adamska");
console.log(school.students);
school.showStudents();

school.showStudentsByName("Kacper");

console.log(school.getNumStudents());

school.resetStudents();

console.log(school.getNumStudents());

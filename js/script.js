const school = {
	name: "UJ",
	city: "Krk",
	students: [],
	addStudent: function (name, surname) {
		const obj = {
			name: name,
			surname: surname,
			grades: [],
		};

		this.students.push(obj);
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
		const filterStudents = this.students.filter((stud) => stud.name === name);

		if (filterStudents.length == 0) {
			console.log("Szkoła nie ma studentów ");
			return;
		}

		console.log("Studenci o imieniu:", name, ":");

		filterStudents.forEach((stud) => console.log(stud.name, stud.surname));
	},
	getNumStudents: function () {
		return this.students.length;
	},
	resetStudents: function () {
		this.students = [];
	},
	addGrade: function (name, surname, grade) {
		const findStudent = this.students.find(
			(stud) => stud.name === name && stud.surname === surname
		);

		if (!findStudent) {
			console.log("Nie znaleziono studenta o podanym imieniu i nazwisku");
			return;
		}

		findStudent.grades.push(grade);

		console.log(`Dodano ocenę ${grade} dla ${name} ${surname}`);
	},
	showGrades: function (name, surname) {
		const findStudent = this.students.find(
			(stud) => stud.name === name && stud.surname === surname
		);

		if (!findStudent) {
			console.log("Student nie ma żadnych ocen");
			return;
		}

		console.log(
			`Oceny studenta ${name} ${surname}`,
			findStudent.grades
		);
	},
	getAverageGrade: function (name, surname) {
		const findStudent = this.students.find(
			(stud) => stud.name === name && stud.surname === surname
		);
		if (findStudent.grades.length === 0) {
			console.log("Student nie ma ocen");
			return;
		}

		const sum = findStudent.grades.reduce((a, b) => a + b, 0);
		const avg = sum / findStudent.grades.length;

		return avg.toFixed(2);
	},
};

school.addStudent("Kacper", "Kowalski");
school.addStudent("Asia", "Nowak");

school.addGrade("Kacper", "Kowalski", 5);
school.addGrade("Kacper", "Kowalski", 4);
school.addGrade("Asia", "Nowak", 3);

school.showGrades("Kacper", "Kowalski");
console.log("Średnia:", school.getAverageGrade("Kacper", "Kowalski"));

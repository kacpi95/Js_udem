class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}
	getSummary() {
		console.log(
			`Tytuł: ${this.title}, Autor: ${this.author}, Rok: ${this.year}`
		);
	}
	updateYear(newYear) {
		this.year = newYear;
	}
}

const book1 = new Book("Harry Potter", "Rowling", 2005);
const book2 = new Book("The Lord Of the Rings", "Tolkien", 2002);
book1.getSummary();
book2.getSummary();
book2.updateYear(1992);
book2.getSummary();

class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	set fullName(name) {
		const fullName = name;
		this.firstName = fullName;
		this.lastName = fullName;
	}
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

const person = new Person("Jan", "Kowalski");
console.log(person.fullName);
